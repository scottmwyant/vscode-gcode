import { ExtensionContext, window, workspace } from 'vscode'

interface Definitions {
    [key: string]: string
}

export class Dictionary {
    
    private definitionsFromSettings: Definitions = {};
    private definitionsFromComments: Definitions = {};
    private definitions: Definitions = {};

    constructor(fileText?: string) {

        // Initialize definitions
        this.definitionsFromComments = (fileText == undefined) ? {} : this.refreshDefinitionsFromComments(fileText);
        this.definitionsFromSettings = this.refreshDefinitionsFromSettings();
        this.definitions = this.mergeDefinitions();
    }


    public register(context: ExtensionContext): void {
        
        // Register a function to parse comments when the active editor changes
        context.subscriptions.push(
            workspace.onWillSaveTextDocument(event => {
                if (event.document.languageId == 'gcode') {
                    this.definitionsFromComments = this.refreshDefinitionsFromComments(event.document.getText());
                    this.definitions = this.mergeDefinitions();
                }
            })
        );

        // Register a function to read definitions from settings when any config file is changed
        context.subscriptions.push(
            workspace.onDidChangeConfiguration(event => {
                if (event.affectsConfiguration('gcode.definitions')) {
                    this.definitionsFromSettings = this.refreshDefinitionsFromSettings();
                    this.definitions = this.mergeDefinitions();
                }
            })
        );
    }

    public lookup(code: string){
        const removeLeadingZeros = (code: string) => code.substring(0,1) + parseInt(code.substring(1)).toString();
        return this.definitions[removeLeadingZeros(code)];
    }

    private mergeDefinitions() {
        return Object.assign({}, this.definitionsFromSettings, this.definitionsFromComments)
    }

    private refreshDefinitionsFromComments(fileText: string) {
        
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
        return this.removeLeadingZerosFromKeys(obj);

    }

    private refreshDefinitionsFromSettings() {
        let obj = JSON.parse(JSON.stringify(workspace.getConfiguration('gcode.definitions')));
        return this.removeLeadingZerosFromKeys(obj);
    }

    private removeLeadingZerosFromKeys(obj: Definitions): Definitions {
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
    }
}


