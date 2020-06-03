const startFlag = '(';
const endFlag = ')';

export const commentUtility = {
    /**
     * Tells the caller if the given string starts and ends with comment flags.
     */
    isComment: function (text: string): boolean {

        // See if a string starts with a given value
        function startsWith(text: string, prefix: string): boolean {
            return prefix.length > text.length ? false : text.indexOf(prefix) == 0;
        }

        // See if a string ends with a given value
        function endsWith(text: string, suffix: string): boolean {
            return suffix.length > text.length ? false : text.slice(text.length - suffix.length) == suffix;
        }

        // Report if the string passed in starts and ends with comment flags
        return startsWith(text, startFlag) && endsWith(text, endFlag);

    },
    
    /**
     * This function is naieve, if you ask it to format the text as code
     * it will remove characters from the start and end, even if the input
     * string is not a comment.  It is the caller's responsibility to find
     * out if the string is a comment or code before invoking this method.
     * 
     * Note, there is another method provided that will tell you if a given
     * string is a comment or not.  This encapsulates the comment start and
     * end flags.  The caller does not need to know about the flags.
     */ 

    formatText: function (text: string, asComment: boolean): string {

        // Wrap text inside comment flags
        function comment(text: string): string {
            return startFlag + text + endFlag;
        }

        // Rip the ends of the string off, returning text without the comment flags
        function uncomment(text: string): string {
            return text.slice(startFlag.length, text.length - endFlag.length);
        }

        return asComment ? comment(text) : uncomment(text);

    }
};