import { CancellationToken, Hover, HoverProvider, Position, ProviderResult, TextDocument} from 'vscode'
import { Dictionary } from './dictionary'

export class gcodeHoverProvider implements HoverProvider {

    private dictionary: Dictionary
    
    constructor(dictionary: Dictionary){
        this.dictionary = dictionary
    }

    provideHover(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Hover> {
        const code = document.getText(document.getWordRangeAtPosition(position));
        const definition = this.dictionary.lookup(code);
        return definition == null ? null : new Hover(definition);
    }
}
