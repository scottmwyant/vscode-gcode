import { ExtensionContext, languages, workspace, window } from 'vscode';
import * as commands from './commands'
import * as hoverProvider from './hoverProvider'

export function activate(context: ExtensionContext) {
    
    commands.register(context);
    hoverProvider.register(context);

}
