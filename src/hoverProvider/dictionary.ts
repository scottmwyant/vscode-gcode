
interface Definitions {
    [key: string]: string
}

export class Dictionary {
    
    private definitionsFromSettings: Definitions = {};
    private definitionsFromComments: Definitions = {};
    private definitions: Definitions = {};

    constructor(obj: Definitions, fileText?: string) {

        // Initialize definitions
        this.definitionsFromComments = (fileText == undefined) ? {} : this._refreshDefinitionsFromComments(fileText);
        this.definitionsFromSettings = this._refreshDefinitionsFromSettings(obj);
        this.definitions = this.mergeDefinitions();
    }

    public lookup(code: string){
        const removeLeadingZeros = (code: string) => code.substring(0,1) + parseInt(code.substring(1)).toString();
        return this.definitions[removeLeadingZeros(code)];
    }

    public refreshDefinitionsFromComments(fileText: string) {
        this.definitionsFromComments = this._refreshDefinitionsFromComments(fileText);
        this.definitions = this.mergeDefinitions();
    }

    public refreshDefinitionsFromSettings(obj: Definitions) {
        this.definitionsFromSettings = this._refreshDefinitionsFromSettings(obj);
        this.definitions = this.mergeDefinitions();
    }

    private mergeDefinitions() {
        return Object.assign({}, this.definitionsFromSettings, this.definitionsFromComments)
    }

    private _refreshDefinitionsFromComments(fileText: string) {
        
        function parse(comments: string[]): Definitions {
            // Change first and last characters from parens to double-quotes
            comments = comments.map(comment => '"' + comment.substr(1, comment.length - 2).trim() + '"');
            // Ensure key value seperator is a colon, add inner quotes
            comments = comments.map(comment => comment.replace(/\s*[:=]\s*/, '": "'));
            // Finish converting comment to a JSON string
            const jsonString: string = "{\n" + comments.join(",\n") + "\n}";
            // Parse the JSON to an object  !!! This may result in an error, we have not checked for duplicate keys
            return JSON.parse(jsonString);
        }

        const regex = /\(\s*[A-Z][A-Z0-9]{1,4}\s*[:=]\s*([\w\,\.\-\+\.\;]+\s*)+\)/g;
        const matches = fileText.match(regex);
        const obj = (matches == null) ? {} : parse(matches);
        return this.removeLeadingZerosFromKeys(obj);


    }

    private _refreshDefinitionsFromSettings(obj: Definitions) {
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


