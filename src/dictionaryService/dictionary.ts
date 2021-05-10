import { IDictionary } from './index'
import { commands, ExtensionContext, ViewColumn, WebviewPanel, window, workspace } from 'vscode'

interface Definitions {
    [key: string]: string
}

export class Dictionary implements IDictionary {

    private definitionsFromSettings: Definitions = {};
    private definitionsFromComments: Definitions = {};
    private definitions: Definitions = {};
    private panel: WebviewPanel | undefined

    constructor(context: ExtensionContext) {

        const fileText = window.activeTextEditor?.document.getText();

        const removeLeadingZerosFromKeys = (obj: Definitions): Definitions => {
            Object.keys(obj).forEach(key => {
                let cleanKey = key;
                const prefix = key.replace(/\d+/g, '');
                if ((key.length > prefix.length) && key.startsWith(prefix)) {
                    const suffix = key.substr(prefix.length);
                    cleanKey = prefix + parseInt(suffix);
                    if (cleanKey.length < key.length && obj[cleanKey] == undefined) {
                        obj[cleanKey] = obj[key];
                        delete obj[key];
                    }
                }
            })
            return obj
        };

        const refreshDefinitionsFromComments = (fileText: string) => {

            function parse(comments: string[]): Definitions {
                // Change first and last characters from parens to double-quotes
                comments = comments.map(comment => '"' + comment.substr(1, comment.length - 2) + '"');
                // Ensure key value seperator is a colon, add inner quotes
                comments = comments.map(comment => comment.replace(/\s*[:=]\s*/, '": "'));
                // Finish converting comment to a JSON string
                const jsonString: string = "{\n" + comments.join(",\n") + "\n}";
                // Parse the JSON to an object  !!! This may result in an error, we have not checked for duplicate keys
                return JSON.parse(jsonString);
            }

            const regex = /\(\s*[A-Z0-9]{2,5}\s*[:=]\s*[a-zA-Z0-9\,\s]+\s*\)/g;
            const matches = fileText.match(regex);
            const obj = (matches == null) ? {} : parse(matches);
            return removeLeadingZerosFromKeys(obj);

        }

        const refreshDefinitionsFromSettings = () => {

            // Get through the proxy object...
            const obj = JSON.parse(JSON.stringify(workspace.getConfiguration('gcode.definitions')));

            return removeLeadingZerosFromKeys(obj);
        }

        const mergeDefinitions = () => Object.assign({}, this.definitionsFromSettings, this.definitionsFromComments)

        const publish = () => {
            this.definitions = mergeDefinitions()
            if (this.panel != undefined) { this.panel.webview.html = getWebviewHtml() }
        }

        // Initialize definitions
        this.definitionsFromComments = (fileText == undefined) ? {} : refreshDefinitionsFromComments(fileText);
        this.definitionsFromSettings = refreshDefinitionsFromSettings();
        publish()

        // Register event handlers
        context.subscriptions.push(

            // Parse comments when the active editor changes
            window.onDidChangeActiveTextEditor(event => {
                if (event?.document.languageId == 'gcode') {
                    this.definitionsFromComments = refreshDefinitionsFromComments(event.document.getText());
                    publish()
                }
            }),

            // Parse comments when the document is saved
            workspace.onDidSaveTextDocument(document => {
                if (document.languageId == 'gcode') {
                    this.definitionsFromComments = refreshDefinitionsFromComments(document.getText());
                    publish()
                }
            }),

            // Read definitions from settings when any config file is changed
            workspace.onDidChangeConfiguration(event => {
                if (event.affectsConfiguration('gcode.definitions')) {
                    this.definitionsFromSettings = refreshDefinitionsFromSettings();
                    publish()
                }
            }),

            // Register a command to display the dictionary in a webview
            commands.registerCommand('gcode.showDictionary', () => {

                // Create and show panel
                if (this.panel != undefined) {
                    this.panel.reveal(ViewColumn.Beside)
                }
                else {
                    this.panel = window.createWebviewPanel(
                        'gcodeDictionary',
                        'G-Code Dictionary',
                        ViewColumn.Beside,
                        {}
                    );
                    this.panel.onDidDispose(
                        () => { this.panel = undefined; },
                        undefined,
                        context.subscriptions
                    );
                }

                // And set its HTML content
                this.panel.webview.html = getWebviewHtml();
            })
            
        )

        const getWebviewHtml = () => {
            const template = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>G-Code Dictionary</title></head><body></body></html>';
            
            const keys = Object.keys(this.definitions).sort(function(a, b){
                
                function getWord(str: string){
                    const prefix = ((str.match(/^[A-Z]/g)) as RegExpMatchArray)[0]
                    return {
                        address: prefix,
                        value: parseInt(str.replace(prefix, ''))
                    }
                }

                const A = getWord(a)
                const B = getWord(b)
                if(A.address > B.address) {
                    return 1
                }
                else if (A.address < B.address) {
                    return -1
                }
                else {
                    return A.value - B.value
                }
            })
            
            const data = keys.map(key => ({ word: key, meaning: this.definitions[key] }))
            const html = (data.map(item => `<p><strong>${item.word}</strong> - ${item.meaning}</p>`)).join('\n')
            return template.replace('<body></body>', `<body>${html}</body>`)
        }

    }

    public lookup(code: string) {
        const removeLeadingZeros = (code: string) => code.substring(0, 1) + parseInt(code.substring(1)).toString();
        return this.definitions[removeLeadingZeros(code)];
    }

}


