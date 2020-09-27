import { commands, ExtensionContext, window, workspace } from 'vscode'
import * as template from './gcode.tmLanguage.json'
import * as scopes from './scopes.json'
import { join } from 'path'
import { readFileSync, writeFile } from 'fs'

const grammarFile = join(__dirname, '..', '..', 'syntaxes', 'gcode.tmLanguage.json');

export function register(context: ExtensionContext) {

    // Register an event handler, listening for theme changes
    context.subscriptions.push(workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration('workbench.colorTheme')) { tailorGrammar(); }
    }))

    // Call the handler directly to see if 
    // the grammar needs updated at startup
    tailorGrammar();

}

function tailorGrammar() {
    const themeName = (workspace.getConfiguration().get('workbench.colorTheme') as string);
    // console.log(`The current theme is '${themeName}'`);
    if (tailoredForTheme() != themeName) {
        if (themeName in scopes) {
            // console.log(`The '${themeName}' theme is supported, prompt user to update grammar`);
            window.showInformationMessage(`Tailor G-Code grammer to the '${themeName}' theme?`, 'Yes', 'Not now').then(value => {
                if (value == 'Yes') { updateGrammar(themeName) } else {console.log('User declined to tailor the grammar.');};
            });
        }
        else {
            // console.log(`G-Code grammar cannot be tailored to the '${themeName}' theme.  This theme is not supported.`);
            window.showInformationMessage(`G-Code grammer cannot be tailored to the '${themeName} theme', this theme is not supported by the G-Code extension.`, 'Okay');
        }
    }
    else {
        // console.log(`No update needed.`)
    }
}

function updateGrammar(themeName: string) {
    // console.log(`G-Code grammar will be now be tailored to the '${themeName}' theme`);
    const targetScopes = (scopes as any)[themeName];
    (template as any).themeName = themeName;
    let json = JSON.stringify(template, null, 2);
    Object.keys(targetScopes).forEach(key => {
        const regex = new RegExp('replace.' + key, 'g');
        json = json.replace(regex, targetScopes[key]);
    });
    writeFile(grammarFile, json, () => commands.executeCommand('workbench.action.reloadWindow'));
    // console.log(`G-Code grammar file has been tailored to the '${themeName}' theme.`);

}

function tailoredForTheme() {
    const grammar = JSON.parse(readFileSync(grammarFile, 'utf8'));
    const rtn = grammar.themeName == undefined ? '' : grammar.themeName;
    // console.log(`G-Code grammar is tailored to the '${rtn}' theme.`);
    return rtn.toString();
}
