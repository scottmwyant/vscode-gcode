import { ExtensionContext } from 'vscode';
// import * as commands from './commands'
// import * as hoverProvider from './hoverProvider'
// import * as grammar from './grammar'
import * as decoration from './decoration'

export function activate(context: ExtensionContext) {

    // commands.register(context);
    // hoverProvider.register(context);
    // grammar.register(context);
    decoration.register(context);
}
