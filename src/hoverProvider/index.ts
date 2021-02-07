import { ExtensionContext, languages } from 'vscode';
import { gcodeHoverProvider } from './gcodeHoverProvider';
import { Dictionary } from './dictionary'

export function register(context: ExtensionContext) {
    
    const dictionary = new Dictionary(context);

    context.subscriptions.push(
        languages.registerHoverProvider('gcode', new gcodeHoverProvider(dictionary))
    );
    
}