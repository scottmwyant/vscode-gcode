import { ExtensionContext } from 'vscode';
import * as commands from './commands'
import * as hoverProvider from './hoverProvider'
import * as grammar from './grammar'

export function activate(context: ExtensionContext) {
    
    commands.register(context);
    hoverProvider.register(context);
    grammar.register(context);
}
