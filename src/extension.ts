import { commands, ExtensionContext } from 'vscode';
import { gcodeCommands } from './commands'

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
}
