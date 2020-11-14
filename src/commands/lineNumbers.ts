import * as vscode from 'vscode';
import { commentUtility } from './utilities';

const editor = vscode.window.activeTextEditor!;

/**
 * Requirements:
 *  - Apply/update line numbers (labels)
 *  - Do not apply labels to blank lines
 * 
 */
export function addLineNumbers(): void {
    
    const regexp = new RegExp('^N[0-9]{1,5}');

    editor.edit(function (builder) {

        const lineCount = editor.document.lineCount;
        const defaultSettings = {
            increment: 10
        };

        let fixedLength = (lineCount * defaultSettings.increment + defaultSettings.increment).toString().length;

        for (let i = 0; i < lineCount; i++) {
            const line = editor.document.lineAt(i);
            if (line.text != '' && !commentUtility.isComment(line.text)) {

                // Format the line number in the editor as a label
                const label = `N${(defaultSettings.increment * i + defaultSettings.increment).toString().padStart(fixedLength, '0')}`;

                // Check if the line is already numbered
                if (regexp.test(line.text)) {
                    const labelText = regexp.exec(line.text)![0].trim();
                    const labelRange = new vscode.Range(
                        new vscode.Position(i, 0),
                        new vscode.Position(i, labelText.length)
                    );
                    builder.replace(labelRange, label);
                }
                else {
                    builder.insert(new vscode.Position(i, 0), label+' ');
                }
            }
        };

    });
}

/**
 * Requirements:
 *  - Remove line numbers from the document
 */
export function removeLineNumbers(): void {
    const regexp = new RegExp('^N[0-9]{1,5}\\s?');
    editor.edit(function (builder) {
        const lineCount = editor.document.lineCount;
        for (let i = 0; i < lineCount; i++) {
            const line = editor.document.lineAt(i);
            if (regexp.test(line.text)) {
                const lineNumber = regexp.exec(line.text)![0];
                builder.delete(new vscode.Range(new vscode.Position(i, 0), new vscode.Position(i, lineNumber.length)));
            }
        };
    });
}




