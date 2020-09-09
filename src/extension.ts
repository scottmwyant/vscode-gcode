import { commands, ExtensionContext, languages, window, workspace } from 'vscode';
import { gcodeCommands } from './commands'
import { gcodeHoverProvider, Dictionary } from './hoverProvider'

/**
 * Register each item in an array of functions as a command.
 * Use the name of the function as the unique identifier for
 * the command.
 */
export function activate(context: ExtensionContext) {
	gcodeCommands.forEach(cmd => {
		context.subscriptions.push(
			commands.registerCommand(`gcode.${cmd.name}`, cmd)
		);
	});
    
  registerHoverProvider(context);

}


function registerHoverProvider(context: ExtensionContext) {
	
	const text = window.activeTextEditor?.document.getText();
	const dictionary = new Dictionary(text);

	// Have the dictionary parse comments when the active editor changes.
	context.subscriptions.push(
		window.onDidChangeActiveTextEditor(event => {
			if (event != undefined && event.document.languageId != 'gcode') {
				dictionary.refreshDefinitionsFromComments(event.document.getText());
			}
		})
	)

	// Register a handler for config changes
	context.subscriptions.push(
		workspace.onDidChangeConfiguration(event => {
			if (event.affectsConfiguration('gcode.defintiions')) {
				dictionary.refreshDefinitionsFromSettings();
			}
		})
	)

	const provider = new gcodeHoverProvider(dictionary);
	context.subscriptions.push(languages.registerHoverProvider('gcode', provider));
}
