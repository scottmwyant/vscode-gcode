import * as vscode from 'vscode';
import { commentUtility } from './utilities';
/**
 * Requirements:
 *  - Toggle parentheses at the start and end of each line in the selection.
 * 
 *  - When the selection contains both commented and uncommented lines, the
 *    first line in the selection is checked.  The desired state is the opposite
 *    of the first line.
 * 
 * Caution:
 *  - This function may not play nice with controllers that do not support
 *    nested comments.
 * 
 */
export function toggleComment(): void {
    
    const editor = vscode.window.activeTextEditor!;
    
    editor.edit(function (builder) {

        // Look at the first line in the selection to determine if we're commenting or uncommenting
        const shouldBeComment: boolean = !commentUtility.isComment(editor.document.lineAt(editor.selection.start.line).text);

        // Check each of the lines in the selection, if they are not in the desired state, flip the state
        for (let i = editor.selection.start.line; i <= editor.selection.end.line; i++) {
            let line = editor.document.lineAt(i);
            let lineIsComment = commentUtility.isComment(line.text);
            if(shouldBeComment != lineIsComment){
                builder.replace(line.range, commentUtility.formatText(line.text, !lineIsComment));
            }
        };

    });
}




