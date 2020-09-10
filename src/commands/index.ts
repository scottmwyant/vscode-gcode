import { commands, ExtensionContext } from 'vscode';
import { addLineNumbers, removeLineNumbers } from './lineNumbers';
import { toggleComment } from './toggleComment';

export function register(context: ExtensionContext){
    
  // Create an array where each item  is a function that returns 'void'.
  // Since these functions will be registered as commands, the names of the
  // functions must match what is defined in the project's package.json.
  const gcodeCommands = [
    addLineNumbers,
    removeLineNumbers,
    toggleComment
  ];

  gcodeCommands.forEach(cmd => {
    context.subscriptions.push(
      commands.registerCommand(`gcode.${cmd.name}`, cmd)
    );
  });

}
