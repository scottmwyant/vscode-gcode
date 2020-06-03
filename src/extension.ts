import * as vscode from 'vscode';
import { commands } from './commands'

/**
 * Register each item in an array of functions as a command.
 * Use the name of the function as the unique identifier for
 * the command.
 */
export function activate(context: vscode.ExtensionContext) {
	commands.forEach(cmd => {
		context.subscriptions.push(
			vscode.commands.registerCommand(`gcode.${cmd.name}`, cmd)
		);
	});
}
