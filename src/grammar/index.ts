import { commands, ExtensionContext, window, workspace } from 'vscode'
import { getJson, isThemeSupported } from './getJson'
import { join } from 'path'
import { readFileSync, writeFile } from 'fs'

const grammarFile = join(__dirname, '..', '..', 'syntaxes', 'gcode.tmLanguage.json');

export function register(context: ExtensionContext) {

    // Register an event handler, listening for theme changes
    context.subscriptions.push(workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration('workbench.colorTheme')) { tailorGrammar.conditionally(); }
    }))

    // Call the handler directly to see if 
    // the grammar needs updated at startup
    tailorGrammar.conditionally();

}

const tailorGrammar = (function() {

    function updateGrammar(themeName: string) {
        const json = getJson(themeName);
        writeFile(grammarFile, json, () => commands.executeCommand('workbench.action.reloadWindow'));
        // console.log(`G-Code grammar file has been tailored to the '${themeName}' theme.`);
    
    }
    
    function tailoredForTheme() {
        const grammar = JSON.parse(readFileSync(grammarFile, 'utf8'));
        const rtn = grammar.themeName == undefined ? '' : grammar.themeName;
        // console.log(`G-Code grammar is tailored to the '${rtn}' theme.`);
        return rtn.toString();
    }

    function doUpdate(force: boolean){
        const themeName = (workspace.getConfiguration().get('workbench.colorTheme') as string);
        if(force == true || tailoredForTheme() != themeName){
            if (isThemeSupported(themeName)) {
                // console.log(`The '${themeName}' theme is supported, prompt user to update grammar`);
                if(force == true) {
                    updateGrammar(themeName);
                }
                else {
                    window.showInformationMessage(`Tailor G-Code grammer to the '${themeName}' theme?`, 'Yes', 'Not now').then(value => {
                        if (value == 'Yes') { updateGrammar(themeName) } else {console.log('User declined to tailor the grammar.');};
                    });
                }
            }
            else {
                // console.log(`G-Code grammar cannot be tailored to the '${themeName}' theme.  This theme is not supported.`);
                window.showInformationMessage(`G-Code grammer cannot be tailored to the '${themeName}' theme, this theme is not supported by the G-Code extension.`, 'Okay');
            }
        }
        else {
            // console.log(`G-Code grammar is already tailored to the '${themeName}' theme.`)
        }
    }
    

    return {
        "conditionally": function(){
            doUpdate(false)
        },
        "force": function(){
            doUpdate(true);
        }
    }
})();

export function tailorTextMateGrammar() {
    tailorGrammar.force();
}