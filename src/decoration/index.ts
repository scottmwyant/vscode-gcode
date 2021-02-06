import {
    DecorationOptions,
    ExtensionContext,
    Position,
    Range,
    TextEditor,
    workspace,
    window,
} from 'vscode';

export function register(ctx: ExtensionContext){

    // https://vscode.rocks/decorations/

    // border
    // outline
    // color
    // backgroundColor
    // fontWeight
    // textDecoration
    // letterSpacing
    // opacity

    workspace.onWillSaveTextDocument(event => {
        const openEditor = window.visibleTextEditors.filter(
            editor => editor.document.uri === event.document.uri
        )[0];


        const decorate = (regex: RegExp, text: string) => {
            const range  = openEditor.document.getText().split('\n').reduce((result, line, lineNumber) => {
                if(regex.test(line)) {result.push(openEditor.document.lineAt(lineNumber).range);}
                return result;
            }, <Range[]>[]);
    
            const options = {
                after: {
                    contentText: text,
                    margin: "50px",
                    color: "rgba(100,100,100,128)"
                },
                cursor: "not-allowed"
            }
    
            const decoration = window.createTextEditorDecorationType(options);
    
            openEditor.setDecorations(decoration, range);
    
        }

        decorate(/(console\.log)/, 'Hello World!');

    })
}
