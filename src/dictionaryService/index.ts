import { ExtensionContext } from 'vscode'
import { Dictionary } from './dictionary'


export interface IDictionary {
    lookup: (word: string) => string
}

export const start = (context: ExtensionContext) => new Dictionary(context)