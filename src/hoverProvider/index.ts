import { ExtensionContext, languages } from 'vscode';
import { gcodeHoverProvider } from './gcodeHoverProvider';
import { IDictionary } from '../dictionaryService'

export function register(context: ExtensionContext, dictionary: IDictionary) {

    context.subscriptions.push(
        languages.registerHoverProvider('gcode', new gcodeHoverProvider(dictionary))
    );
    
}