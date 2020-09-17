import { ExtensionContext, languages, workspace, window } from 'vscode';
import { gcodeHoverProvider } from './gcodeHoverProvider';
import { Dictionary } from './dictionary'

export function register(context: ExtensionContext) {
    
    const dictionary = new Dictionary();

    // On active editor change hand data over to the dictionary
    context.subscriptions.push(
        window.onDidChangeActiveTextEditor(event => {
            if (event != undefined && event.document.languageId == 'gcode') {
                dictionary.useDefinitionsFromComments(event.document.getText());
            }
        })
    );

    // On config change hand data over to the dictionary
    context.subscriptions.push(
        workspace.onDidChangeConfiguration(event => {
            if (event.affectsConfiguration('gcode.definitions')) {
                dictionary.useDefinitionsFromSettings(JSON.parse(JSON.stringify(workspace.getConfiguration('gcode.definitions'))));
            }
        })
    );

    context.subscriptions.push(
        languages.registerHoverProvider('gcode', new gcodeHoverProvider(dict))
    );


    context.subscriptions.push(
        languages.registerHoverProvider('gcode', new gcodeHoverProvider(dictionary))
    );
    
}