import { ExtensionContext } from 'vscode';
import * as commands from './commands'
import * as hoverProvider from './hoverProvider'
import * as grammar from './grammar'
import * as dictionaryService from './dictionaryService'

export function activate(context: ExtensionContext) {
    
    const dictionary = dictionaryService.start(context)
    commands.register(context);
    hoverProvider.register(context, dictionary);
    grammar.register(context);
}
