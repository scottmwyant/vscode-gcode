const myThemeData = [
    {
        "name": "Light (Visual Studio)",
        "editorBackground": "#ffffff",
        "tokenColors": [
            {
                "scope": [
                    "meta.embedded",
                    "source.groovy.embedded"
                ],
                "settings": {
                    "foreground": "#000000"
                }
            },
            {
                "scope": "emphasis",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "strong",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "meta.diff.header",
                "settings": {
                    "foreground": "#000080"
                }
            },
            {
                "scope": "comment",
                "settings": {
                    "foreground": "#008000"
                }
            },
            {
                "scope": "constant.language",
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": [
                    "constant.numeric",
                    "variable.other.enummember",
                    "keyword.operator.plus.exponent",
                    "keyword.operator.minus.exponent"
                ],
                "settings": {
                    "foreground": "#098658"
                }
            },
            {
                "scope": "constant.regexp",
                "settings": {
                    "foreground": "#811F3F"
                }
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#800000"
                }
            },
            {
                "scope": "entity.name.selector",
                "settings": {
                    "foreground": "#800000"
                }
            },
            {
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": "#FF0000"
                }
            },
            {
                "scope": [
                    "entity.other.attribute-name.class.css",
                    "entity.other.attribute-name.class.mixin.css",
                    "entity.other.attribute-name.id.css",
                    "entity.other.attribute-name.parent-selector.css",
                    "entity.other.attribute-name.pseudo-class.css",
                    "entity.other.attribute-name.pseudo-element.css",
                    "source.css.less entity.other.attribute-name.id",
                    "entity.other.attribute-name.attribute.scss",
                    "entity.other.attribute-name.scss"
                ],
                "settings": {
                    "foreground": "#800000"
                }
            },
            {
                "scope": "invalid",
                "settings": {
                    "foreground": "#CD3131"
                }
            },
            {
                "scope": "markup.underline",
                "settings": {
                    "fontStyle": "underline"
                }
            },
            {
                "scope": "markup.bold",
                "settings": {
                    "foreground": "#000080",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.heading",
                "settings": {
                    "foreground": "#800000",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.italic",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.inserted",
                "settings": {
                    "foreground": "#098658"
                }
            },
            {
                "scope": "markup.deleted",
                "settings": {
                    "foreground": "#A31515"
                }
            },
            {
                "scope": "markup.changed",
                "settings": {
                    "foreground": "#0451A5"
                }
            },
            {
                "scope": [
                    "punctuation.definition.quote.begin.markdown",
                    "punctuation.definition.list.begin.markdown"
                ],
                "settings": {
                    "foreground": "#0451A5"
                }
            },
            {
                "scope": "markup.inline.raw",
                "settings": {
                    "foreground": "#800000"
                }
            },
            {
                "scope": "punctuation.definition.tag",
                "settings": {
                    "foreground": "#800000"
                }
            },
            {
                "scope": [
                    "meta.preprocessor",
                    "entity.name.function.preprocessor"
                ],
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": "meta.preprocessor.string",
                "settings": {
                    "foreground": "#A31515"
                }
            },
            {
                "scope": "meta.preprocessor.numeric",
                "settings": {
                    "foreground": "#098658"
                }
            },
            {
                "scope": "meta.structure.dictionary.key.python",
                "settings": {
                    "foreground": "#0451A5"
                }
            },
            {
                "scope": "storage",
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": "storage.type",
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": [
                    "storage.modifier",
                    "keyword.operator.noexcept"
                ],
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": [
                    "string",
                    "meta.embedded.assembly"
                ],
                "settings": {
                    "foreground": "#A31515"
                }
            },
            {
                "scope": [
                    "string.comment.buffered.block.pug",
                    "string.quoted.pug",
                    "string.interpolated.pug",
                    "string.unquoted.plain.in.yaml",
                    "string.unquoted.plain.out.yaml",
                    "string.unquoted.block.yaml",
                    "string.quoted.single.yaml",
                    "string.quoted.double.xml",
                    "string.quoted.single.xml",
                    "string.unquoted.cdata.xml",
                    "string.quoted.double.html",
                    "string.quoted.single.html",
                    "string.unquoted.html",
                    "string.quoted.single.handlebars",
                    "string.quoted.double.handlebars"
                ],
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": "string.regexp",
                "settings": {
                    "foreground": "#811F3F"
                }
            },
            {
                "scope": [
                    "punctuation.definition.template-expression.begin",
                    "punctuation.definition.template-expression.end",
                    "punctuation.section.embedded"
                ],
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": [
                    "meta.template.expression"
                ],
                "settings": {
                    "foreground": "#000000"
                }
            },
            {
                "scope": [
                    "support.constant.property-value",
                    "support.constant.font-name",
                    "support.constant.media-type",
                    "support.constant.media",
                    "constant.other.color.rgb-value",
                    "constant.other.rgb-value",
                    "support.constant.color"
                ],
                "settings": {
                    "foreground": "#0451A5"
                }
            },
            {
                "scope": [
                    "support.type.vendored.property-name",
                    "support.type.property-name",
                    "variable.css",
                    "variable.scss",
                    "variable.other.less",
                    "source.coffee.embedded"
                ],
                "settings": {
                    "foreground": "#FF0000"
                }
            },
            {
                "scope": [
                    "support.type.property-name.json"
                ],
                "settings": {
                    "foreground": "#0451A5"
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": "keyword.control",
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": "keyword.operator",
                "settings": {
                    "foreground": "#000000"
                }
            },
            {
                "scope": [
                    "keyword.operator.new",
                    "keyword.operator.expression",
                    "keyword.operator.cast",
                    "keyword.operator.sizeof",
                    "keyword.operator.alignof",
                    "keyword.operator.typeid",
                    "keyword.operator.alignas",
                    "keyword.operator.instanceof",
                    "keyword.operator.logical.python",
                    "keyword.operator.wordlike"
                ],
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": "keyword.other.unit",
                "settings": {
                    "foreground": "#098658"
                }
            },
            {
                "scope": [
                    "punctuation.section.embedded.begin.php",
                    "punctuation.section.embedded.end.php"
                ],
                "settings": {
                    "foreground": "#800000"
                }
            },
            {
                "scope": "support.function.git-rebase",
                "settings": {
                    "foreground": "#0451A5"
                }
            },
            {
                "scope": "constant.sha.git-rebase",
                "settings": {
                    "foreground": "#098658"
                }
            },
            {
                "scope": [
                    "storage.modifier.import.java",
                    "variable.language.wildcard.java",
                    "storage.modifier.package.java"
                ],
                "settings": {
                    "foreground": "#000000"
                }
            },
            {
                "scope": "variable.language",
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#316BCD"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#CD9731"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#CD3131"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#800080"
                }
            }
        ]
    },
    {
        "name": "Light+ (default light)",
        "editorBackground": "#ffffff",
        "tokenColors": [
            {
                "scope": [
                    "meta.embedded",
                    "source.groovy.embedded"
                ],
                "settings": {
                    "foreground": "#000000"
                }
            },
            {
                "scope": "emphasis",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "strong",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "meta.diff.header",
                "settings": {
                    "foreground": "#000080"
                }
            },
            {
                "scope": "comment",
                "settings": {
                    "foreground": "#008000"
                }
            },
            {
                "scope": "constant.language",
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": [
                    "constant.numeric",
                    "variable.other.enummember",
                    "keyword.operator.plus.exponent",
                    "keyword.operator.minus.exponent"
                ],
                "settings": {
                    "foreground": "#098658"
                }
            },
            {
                "scope": "constant.regexp",
                "settings": {
                    "foreground": "#811F3F"
                }
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#800000"
                }
            },
            {
                "scope": "entity.name.selector",
                "settings": {
                    "foreground": "#800000"
                }
            },
            {
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": "#FF0000"
                }
            },
            {
                "scope": [
                    "entity.other.attribute-name.class.css",
                    "entity.other.attribute-name.class.mixin.css",
                    "entity.other.attribute-name.id.css",
                    "entity.other.attribute-name.parent-selector.css",
                    "entity.other.attribute-name.pseudo-class.css",
                    "entity.other.attribute-name.pseudo-element.css",
                    "source.css.less entity.other.attribute-name.id",
                    "entity.other.attribute-name.attribute.scss",
                    "entity.other.attribute-name.scss"
                ],
                "settings": {
                    "foreground": "#800000"
                }
            },
            {
                "scope": "invalid",
                "settings": {
                    "foreground": "#CD3131"
                }
            },
            {
                "scope": "markup.underline",
                "settings": {
                    "fontStyle": "underline"
                }
            },
            {
                "scope": "markup.bold",
                "settings": {
                    "foreground": "#000080",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.heading",
                "settings": {
                    "foreground": "#800000",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.italic",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.inserted",
                "settings": {
                    "foreground": "#098658"
                }
            },
            {
                "scope": "markup.deleted",
                "settings": {
                    "foreground": "#A31515"
                }
            },
            {
                "scope": "markup.changed",
                "settings": {
                    "foreground": "#0451A5"
                }
            },
            {
                "scope": [
                    "punctuation.definition.quote.begin.markdown",
                    "punctuation.definition.list.begin.markdown"
                ],
                "settings": {
                    "foreground": "#0451A5"
                }
            },
            {
                "scope": "markup.inline.raw",
                "settings": {
                    "foreground": "#800000"
                }
            },
            {
                "scope": "punctuation.definition.tag",
                "settings": {
                    "foreground": "#800000"
                }
            },
            {
                "scope": [
                    "meta.preprocessor",
                    "entity.name.function.preprocessor"
                ],
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": "meta.preprocessor.string",
                "settings": {
                    "foreground": "#A31515"
                }
            },
            {
                "scope": "meta.preprocessor.numeric",
                "settings": {
                    "foreground": "#098658"
                }
            },
            {
                "scope": "meta.structure.dictionary.key.python",
                "settings": {
                    "foreground": "#0451A5"
                }
            },
            {
                "scope": "storage",
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": "storage.type",
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": [
                    "storage.modifier",
                    "keyword.operator.noexcept"
                ],
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": [
                    "string",
                    "meta.embedded.assembly"
                ],
                "settings": {
                    "foreground": "#A31515"
                }
            },
            {
                "scope": [
                    "string.comment.buffered.block.pug",
                    "string.quoted.pug",
                    "string.interpolated.pug",
                    "string.unquoted.plain.in.yaml",
                    "string.unquoted.plain.out.yaml",
                    "string.unquoted.block.yaml",
                    "string.quoted.single.yaml",
                    "string.quoted.double.xml",
                    "string.quoted.single.xml",
                    "string.unquoted.cdata.xml",
                    "string.quoted.double.html",
                    "string.quoted.single.html",
                    "string.unquoted.html",
                    "string.quoted.single.handlebars",
                    "string.quoted.double.handlebars"
                ],
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": "string.regexp",
                "settings": {
                    "foreground": "#811F3F"
                }
            },
            {
                "scope": [
                    "punctuation.definition.template-expression.begin",
                    "punctuation.definition.template-expression.end",
                    "punctuation.section.embedded"
                ],
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": [
                    "meta.template.expression"
                ],
                "settings": {
                    "foreground": "#000000"
                }
            },
            {
                "scope": [
                    "support.constant.property-value",
                    "support.constant.font-name",
                    "support.constant.media-type",
                    "support.constant.media",
                    "constant.other.color.rgb-value",
                    "constant.other.rgb-value",
                    "support.constant.color"
                ],
                "settings": {
                    "foreground": "#0451A5"
                }
            },
            {
                "scope": [
                    "support.type.vendored.property-name",
                    "support.type.property-name",
                    "variable.css",
                    "variable.scss",
                    "variable.other.less",
                    "source.coffee.embedded"
                ],
                "settings": {
                    "foreground": "#FF0000"
                }
            },
            {
                "scope": [
                    "support.type.property-name.json"
                ],
                "settings": {
                    "foreground": "#0451A5"
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": "keyword.control",
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": "keyword.operator",
                "settings": {
                    "foreground": "#000000"
                }
            },
            {
                "scope": [
                    "keyword.operator.new",
                    "keyword.operator.expression",
                    "keyword.operator.cast",
                    "keyword.operator.sizeof",
                    "keyword.operator.alignof",
                    "keyword.operator.typeid",
                    "keyword.operator.alignas",
                    "keyword.operator.instanceof",
                    "keyword.operator.logical.python",
                    "keyword.operator.wordlike"
                ],
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": "keyword.other.unit",
                "settings": {
                    "foreground": "#098658"
                }
            },
            {
                "scope": [
                    "punctuation.section.embedded.begin.php",
                    "punctuation.section.embedded.end.php"
                ],
                "settings": {
                    "foreground": "#800000"
                }
            },
            {
                "scope": "support.function.git-rebase",
                "settings": {
                    "foreground": "#0451A5"
                }
            },
            {
                "scope": "constant.sha.git-rebase",
                "settings": {
                    "foreground": "#098658"
                }
            },
            {
                "scope": [
                    "storage.modifier.import.java",
                    "variable.language.wildcard.java",
                    "storage.modifier.package.java"
                ],
                "settings": {
                    "foreground": "#000000"
                }
            },
            {
                "scope": "variable.language",
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": [
                    "entity.name.function",
                    "support.function",
                    "support.constant.handlebars",
                    "source.powershell variable.other.member",
                    "entity.name.operator.custom-literal"
                ],
                "settings": {
                    "foreground": "#795E26"
                }
            },
            {
                "scope": [
                    "meta.return-type",
                    "support.class",
                    "support.type",
                    "entity.name.type",
                    "entity.name.namespace",
                    "entity.other.attribute",
                    "entity.name.scope-resolution",
                    "entity.name.class",
                    "storage.type.numeric.go",
                    "storage.type.byte.go",
                    "storage.type.boolean.go",
                    "storage.type.string.go",
                    "storage.type.uintptr.go",
                    "storage.type.error.go",
                    "storage.type.rune.go",
                    "storage.type.cs",
                    "storage.type.generic.cs",
                    "storage.type.modifier.cs",
                    "storage.type.variable.cs",
                    "storage.type.annotation.java",
                    "storage.type.generic.java",
                    "storage.type.java",
                    "storage.type.object.array.java",
                    "storage.type.primitive.array.java",
                    "storage.type.primitive.java",
                    "storage.type.token.java",
                    "storage.type.groovy",
                    "storage.type.annotation.groovy",
                    "storage.type.parameters.groovy",
                    "storage.type.generic.groovy",
                    "storage.type.object.array.groovy",
                    "storage.type.primitive.array.groovy",
                    "storage.type.primitive.groovy"
                ],
                "settings": {
                    "foreground": "#267F99"
                }
            },
            {
                "scope": [
                    "meta.type.cast.expr",
                    "meta.type.new.expr",
                    "support.constant.math",
                    "support.constant.dom",
                    "support.constant.json",
                    "entity.other.inherited-class"
                ],
                "settings": {
                    "foreground": "#267F99"
                }
            },
            {
                "scope": [
                    "keyword.control",
                    "source.cpp keyword.operator.new",
                    "source.cpp keyword.operator.delete",
                    "keyword.other.using",
                    "keyword.other.operator",
                    "entity.name.operator"
                ],
                "settings": {
                    "foreground": "#AF00DB"
                }
            },
            {
                "scope": [
                    "variable",
                    "meta.definition.variable.name",
                    "support.variable",
                    "entity.name.variable"
                ],
                "settings": {
                    "foreground": "#001080"
                }
            },
            {
                "scope": [
                    "variable.other.constant",
                    "variable.other.enummember"
                ],
                "settings": {
                    "foreground": "#0070C1"
                }
            },
            {
                "scope": [
                    "meta.object-literal.key"
                ],
                "settings": {
                    "foreground": "#001080"
                }
            },
            {
                "scope": [
                    "support.constant.property-value",
                    "support.constant.font-name",
                    "support.constant.media-type",
                    "support.constant.media",
                    "constant.other.color.rgb-value",
                    "constant.other.rgb-value",
                    "support.constant.color"
                ],
                "settings": {
                    "foreground": "#0451A5"
                }
            },
            {
                "scope": [
                    "punctuation.definition.group.regexp",
                    "punctuation.definition.group.assertion.regexp",
                    "punctuation.definition.character-class.regexp",
                    "punctuation.character.set.begin.regexp",
                    "punctuation.character.set.end.regexp",
                    "keyword.operator.negation.regexp",
                    "support.other.parenthesis.regexp"
                ],
                "settings": {
                    "foreground": "#D16969"
                }
            },
            {
                "scope": [
                    "constant.character.character-class.regexp",
                    "constant.other.character-class.set.regexp",
                    "constant.other.character-class.regexp",
                    "constant.character.set.regexp"
                ],
                "settings": {
                    "foreground": "#811F3F"
                }
            },
            {
                "scope": "keyword.operator.quantifier.regexp",
                "settings": {
                    "foreground": "#000000"
                }
            },
            {
                "scope": [
                    "keyword.operator.or.regexp",
                    "keyword.control.anchor.regexp"
                ],
                "settings": {
                    "foreground": "#EE0000"
                }
            },
            {
                "scope": "constant.character",
                "settings": {
                    "foreground": "#0000FF"
                }
            },
            {
                "scope": "constant.character.escape",
                "settings": {
                    "foreground": "#EE0000"
                }
            },
            {
                "scope": "entity.name.label",
                "settings": {
                    "foreground": "#000000"
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#316BCD"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#CD9731"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#CD3131"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#800080"
                }
            }
        ]
    },
    {
        "name": "Quiet Light",
        "editorBackground": "#f5f5f5",
        "tokenColors": [
            {
                "scope": [
                    "meta.embedded",
                    "source.groovy.embedded"
                ],
                "settings": {
                    "foreground": "#333333"
                }
            },
            {
                "scope": [
                    "comment",
                    "punctuation.definition.comment"
                ],
                "settings": {
                    "foreground": "#AAAAAA",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "comment.block.preprocessor",
                "settings": {
                    "foreground": "#AAAAAA",
                    "fontStyle": ""
                }
            },
            {
                "scope": [
                    "comment.documentation",
                    "comment.block.documentation",
                    "comment.block.documentation punctuation.definition.comment "
                ],
                "settings": {
                    "foreground": "#448C27"
                }
            },
            {
                "scope": "invalid.illegal",
                "settings": {
                    "foreground": "#660000"
                }
            },
            {
                "scope": "keyword.operator",
                "settings": {
                    "foreground": "#777777"
                }
            },
            {
                "scope": [
                    "keyword",
                    "storage"
                ],
                "settings": {
                    "foreground": "#4B69C6"
                }
            },
            {
                "scope": [
                    "storage.type",
                    "support.type"
                ],
                "settings": {
                    "foreground": "#7A3E9D"
                }
            },
            {
                "scope": [
                    "constant.language",
                    "support.constant",
                    "variable.language"
                ],
                "settings": {
                    "foreground": "#9C5D27"
                }
            },
            {
                "scope": [
                    "variable",
                    "support.variable"
                ],
                "settings": {
                    "foreground": "#7A3E9D"
                }
            },
            {
                "scope": [
                    "entity.name.function",
                    "support.function"
                ],
                "settings": {
                    "foreground": "#AA3731",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": [
                    "entity.name.type",
                    "entity.name.namespace",
                    "entity.name.scope-resolution",
                    "entity.other.inherited-class",
                    "support.class"
                ],
                "settings": {
                    "foreground": "#7A3E9D",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "entity.name.exception",
                "settings": {
                    "foreground": "#660000"
                }
            },
            {
                "scope": "entity.name.section",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": [
                    "constant.numeric",
                    "constant.character",
                    "constant"
                ],
                "settings": {
                    "foreground": "#9C5D27"
                }
            },
            {
                "scope": "string",
                "settings": {
                    "foreground": "#448C27"
                }
            },
            {
                "scope": "constant.character.escape",
                "settings": {
                    "foreground": "#777777"
                }
            },
            {
                "scope": "string.regexp",
                "settings": {
                    "foreground": "#4B69C6"
                }
            },
            {
                "scope": "constant.other.symbol",
                "settings": {
                    "foreground": "#9C5D27"
                }
            },
            {
                "scope": "punctuation",
                "settings": {
                    "foreground": "#777777"
                }
            },
            {
                "scope": [
                    "meta.tag.sgml.doctype",
                    "meta.tag.sgml.doctype string",
                    "meta.tag.sgml.doctype entity.name.tag",
                    "meta.tag.sgml punctuation.definition.tag.html"
                ],
                "settings": {
                    "foreground": "#AAAAAA"
                }
            },
            {
                "scope": [
                    "meta.tag",
                    "punctuation.definition.tag.html",
                    "punctuation.definition.tag.begin.html",
                    "punctuation.definition.tag.end.html"
                ],
                "settings": {
                    "foreground": "#91B3E0"
                }
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#4B69C6"
                }
            },
            {
                "scope": [
                    "meta.tag entity.other.attribute-name",
                    "entity.other.attribute-name.html"
                ],
                "settings": {
                    "foreground": "#8190A0",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    "constant.character.entity",
                    "punctuation.definition.entity"
                ],
                "settings": {
                    "foreground": "#9C5D27"
                }
            },
            {
                "scope": [
                    "meta.selector",
                    "meta.selector entity",
                    "meta.selector entity punctuation",
                    "entity.name.tag.css"
                ],
                "settings": {
                    "foreground": "#7A3E9D"
                }
            },
            {
                "scope": [
                    "meta.property-name",
                    "support.type.property-name"
                ],
                "settings": {
                    "foreground": "#9C5D27"
                }
            },
            {
                "scope": [
                    "meta.property-value",
                    "meta.property-value constant.other",
                    "support.constant.property-value"
                ],
                "settings": {
                    "foreground": "#448C27"
                }
            },
            {
                "scope": "keyword.other.important",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.changed",
                "settings": {
                    "foreground": "#000000"
                }
            },
            {
                "scope": "markup.deleted",
                "settings": {
                    "foreground": "#000000"
                }
            },
            {
                "scope": "markup.italic",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.error",
                "settings": {
                    "foreground": "#660000"
                }
            },
            {
                "scope": "markup.inserted",
                "settings": {
                    "foreground": "#000000"
                }
            },
            {
                "scope": "meta.link",
                "settings": {
                    "foreground": "#4B69C6"
                }
            },
            {
                "scope": [
                    "markup.output",
                    "markup.raw"
                ],
                "settings": {
                    "foreground": "#777777"
                }
            },
            {
                "scope": "markup.prompt",
                "settings": {
                    "foreground": "#777777"
                }
            },
            {
                "scope": "markup.heading",
                "settings": {
                    "foreground": "#AA3731"
                }
            },
            {
                "scope": "markup.bold",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.traceback",
                "settings": {
                    "foreground": "#660000"
                }
            },
            {
                "scope": "markup.underline",
                "settings": {
                    "fontStyle": "underline"
                }
            },
            {
                "scope": "markup.quote",
                "settings": {
                    "foreground": "#7A3E9D"
                }
            },
            {
                "scope": "markup.list",
                "settings": {
                    "foreground": "#4B69C6"
                }
            },
            {
                "scope": [
                    "markup.bold",
                    "markup.italic"
                ],
                "settings": {
                    "foreground": "#448C27"
                }
            },
            {
                "scope": "markup.inline.raw",
                "settings": {
                    "foreground": "#9C5D27",
                    "fontStyle": ""
                }
            },
            {
                "scope": [
                    "meta.diff.range",
                    "meta.diff.index",
                    "meta.separator"
                ],
                "settings": {
                    "foreground": "#434343"
                }
            },
            {
                "scope": "meta.diff.header.from-file",
                "settings": {
                    "foreground": "#434343"
                }
            },
            {
                "scope": "meta.diff.header.to-file",
                "settings": {
                    "foreground": "#434343"
                }
            },
            {
                "scope": [
                    "punctuation.definition.tag.js",
                    "punctuation.definition.tag.begin.js",
                    "punctuation.definition.tag.end.js"
                ],
                "settings": {
                    "foreground": "#91B3E0"
                }
            },
            {
                "scope": "meta.jsx.children.js",
                "settings": {
                    "foreground": "#333333"
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#316BCD"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#CD9731"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#CD3131"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#800080"
                }
            }
        ]
    },
    {
        "name": "Solarized Light",
        "editorBackground": "#fdf6e3",
        "tokenColors": [
            {
                "scope": [
                    "meta.embedded",
                    "source.groovy.embedded"
                ],
                "settings": {
                    "foreground": "#657B83"
                }
            },
            {
                "scope": "comment",
                "settings": {
                    "foreground": "#93A1A1",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "string",
                "settings": {
                    "foreground": "#2AA198"
                }
            },
            {
                "scope": "string.regexp",
                "settings": {
                    "foreground": "#D30102"
                }
            },
            {
                "scope": "constant.numeric",
                "settings": {
                    "foreground": "#D33682"
                }
            },
            {
                "scope": [
                    "variable.language",
                    "variable.other"
                ],
                "settings": {
                    "foreground": "#268BD2"
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": "#859900"
                }
            },
            {
                "scope": "storage",
                "settings": {
                    "foreground": "#073642",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": [
                    "entity.name.class",
                    "entity.name.type",
                    "entity.name.namespace",
                    "entity.name.scope-resolution"
                ],
                "settings": {
                    "foreground": "#268BD2"
                }
            },
            {
                "scope": "entity.name.function",
                "settings": {
                    "foreground": "#268BD2"
                }
            },
            {
                "scope": "punctuation.definition.variable",
                "settings": {
                    "foreground": "#859900"
                }
            },
            {
                "scope": [
                    "punctuation.section.embedded.begin",
                    "punctuation.section.embedded.end"
                ],
                "settings": {
                    "foreground": "#D30102"
                }
            },
            {
                "scope": [
                    "constant.language",
                    "meta.preprocessor"
                ],
                "settings": {
                    "foreground": "#B58900"
                }
            },
            {
                "scope": [
                    "support.function.construct",
                    "keyword.other.new"
                ],
                "settings": {
                    "foreground": "#D30102"
                }
            },
            {
                "scope": [
                    "constant.character",
                    "constant.other"
                ],
                "settings": {
                    "foreground": "#CB4B16"
                }
            },
            {
                "scope": "entity.other.inherited-class",
                "settings": {}
            },
            {
                "scope": "variable.parameter",
                "settings": {}
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#268BD2"
                }
            },
            {
                "scope": [
                    "punctuation.definition.tag.begin",
                    "punctuation.definition.tag.end"
                ],
                "settings": {
                    "foreground": "#93A1A1"
                }
            },
            {
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": "#93A1A1"
                }
            },
            {
                "scope": "support.function",
                "settings": {
                    "foreground": "#268BD2"
                }
            },
            {
                "scope": "punctuation.separator.continuation",
                "settings": {
                    "foreground": "#D30102"
                }
            },
            {
                "scope": [
                    "support.constant",
                    "support.variable"
                ],
                "settings": {}
            },
            {
                "scope": [
                    "support.type",
                    "support.class"
                ],
                "settings": {
                    "foreground": "#859900"
                }
            },
            {
                "scope": "support.type.exception",
                "settings": {
                    "foreground": "#CB4B16"
                }
            },
            {
                "scope": "support.other.variable",
                "settings": {}
            },
            {
                "scope": "invalid",
                "settings": {}
            },
            {
                "scope": [
                    "meta.diff",
                    "meta.diff.header"
                ],
                "settings": {
                    "foreground": "#268BD2",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.deleted",
                "settings": {
                    "foreground": "#DC322F",
                    "fontStyle": ""
                }
            },
            {
                "scope": "markup.changed",
                "settings": {
                    "foreground": "#CB4B16",
                    "fontStyle": ""
                }
            },
            {
                "scope": "markup.inserted",
                "settings": {
                    "foreground": "#219186"
                }
            },
            {
                "scope": "markup.quote",
                "settings": {
                    "foreground": "#859900"
                }
            },
            {
                "scope": "markup.list",
                "settings": {
                    "foreground": "#B58900"
                }
            },
            {
                "scope": [
                    "markup.bold",
                    "markup.italic"
                ],
                "settings": {
                    "foreground": "#D33682"
                }
            },
            {
                "scope": "markup.bold",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.italic",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.inline.raw",
                "settings": {
                    "foreground": "#2AA198",
                    "fontStyle": ""
                }
            },
            {
                "scope": "markup.heading",
                "settings": {
                    "foreground": "#268BD2",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.heading.setext",
                "settings": {
                    "foreground": "#268BD2",
                    "fontStyle": ""
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#316BCD"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#CD9731"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#CD3131"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#800080"
                }
            }
        ]
    },
    {
        "name": "GitHub Light",
        "editorBackground": "#ffffff",
        "tokenColors": [
            {
                "scope": [
                    "comment",
                    "punctuation.definition.comment",
                    "string.comment"
                ],
                "settings": {
                    "foreground": "#6A737D"
                }
            },
            {
                "scope": [
                    "constant",
                    "entity.name.constant",
                    "variable.other.constant",
                    "variable.language"
                ],
                "settings": {
                    "foreground": "#005CC5"
                }
            },
            {
                "scope": [
                    "entity",
                    "entity.name"
                ],
                "settings": {
                    "foreground": "#6F42C1"
                }
            },
            {
                "scope": "variable.parameter.function",
                "settings": {
                    "foreground": "#24292E"
                }
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#22863A"
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": "#D73A49"
                }
            },
            {
                "scope": [
                    "storage",
                    "storage.type"
                ],
                "settings": {
                    "foreground": "#D73A49"
                }
            },
            {
                "scope": [
                    "storage.modifier.package",
                    "storage.modifier.import",
                    "storage.type.java"
                ],
                "settings": {
                    "foreground": "#24292E"
                }
            },
            {
                "scope": [
                    "string",
                    "punctuation.definition.string",
                    "string punctuation.section.embedded source"
                ],
                "settings": {
                    "foreground": "#032F62"
                }
            },
            {
                "scope": "support",
                "settings": {
                    "foreground": "#005CC5"
                }
            },
            {
                "scope": "meta.property-name",
                "settings": {
                    "foreground": "#005CC5"
                }
            },
            {
                "scope": "variable",
                "settings": {
                    "foreground": "#E36209"
                }
            },
            {
                "scope": "variable.other",
                "settings": {
                    "foreground": "#24292E"
                }
            },
            {
                "scope": "invalid.broken",
                "settings": {
                    "foreground": "#B31D28",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "invalid.deprecated",
                "settings": {
                    "foreground": "#B31D28",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "invalid.illegal",
                "settings": {
                    "foreground": "#B31D28",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "invalid.unimplemented",
                "settings": {
                    "foreground": "#B31D28",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "carriage-return",
                "settings": {
                    "foreground": "#FAFBFC",
                    "background": "#D73A49",
                    "fontStyle": "italic underline"
                }
            },
            {
                "scope": "message.error",
                "settings": {
                    "foreground": "#B31D28"
                }
            },
            {
                "scope": "string source",
                "settings": {
                    "foreground": "#24292E"
                }
            },
            {
                "scope": "string variable",
                "settings": {
                    "foreground": "#005CC5"
                }
            },
            {
                "scope": [
                    "source.regexp",
                    "string.regexp"
                ],
                "settings": {
                    "foreground": "#032F62"
                }
            },
            {
                "scope": [
                    "string.regexp.character-class",
                    "string.regexp constant.character.escape",
                    "string.regexp source.ruby.embedded",
                    "string.regexp string.regexp.arbitrary-repitition"
                ],
                "settings": {
                    "foreground": "#032F62"
                }
            },
            {
                "scope": "string.regexp constant.character.escape",
                "settings": {
                    "foreground": "#22863A",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "support.constant",
                "settings": {
                    "foreground": "#005CC5"
                }
            },
            {
                "scope": "support.variable",
                "settings": {
                    "foreground": "#005CC5"
                }
            },
            {
                "scope": "meta.module-reference",
                "settings": {
                    "foreground": "#005CC5"
                }
            },
            {
                "scope": "punctuation.definition.list.begin.markdown",
                "settings": {
                    "foreground": "#E36209"
                }
            },
            {
                "scope": [
                    "markup.heading",
                    "markup.heading entity.name"
                ],
                "settings": {
                    "foreground": "#005CC5",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.quote",
                "settings": {
                    "foreground": "#22863A"
                }
            },
            {
                "scope": "markup.italic",
                "settings": {
                    "foreground": "#24292E",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.bold",
                "settings": {
                    "foreground": "#24292E",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.raw",
                "settings": {
                    "foreground": "#005CC5"
                }
            },
            {
                "scope": [
                    "markup.deleted",
                    "meta.diff.header.from-file",
                    "punctuation.definition.deleted"
                ],
                "settings": {
                    "foreground": "#B31D28",
                    "background": "#FFEEF0"
                }
            },
            {
                "scope": [
                    "markup.inserted",
                    "meta.diff.header.to-file",
                    "punctuation.definition.inserted"
                ],
                "settings": {
                    "foreground": "#22863A",
                    "background": "#F0FFF4"
                }
            },
            {
                "scope": [
                    "markup.changed",
                    "punctuation.definition.changed"
                ],
                "settings": {
                    "foreground": "#E36209",
                    "background": "#FFEBDA"
                }
            },
            {
                "scope": [
                    "markup.ignored",
                    "markup.untracked"
                ],
                "settings": {
                    "foreground": "#F6F8FA",
                    "background": "#005CC5"
                }
            },
            {
                "scope": "meta.diff.range",
                "settings": {
                    "foreground": "#6F42C1",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "meta.diff.header",
                "settings": {
                    "foreground": "#005CC5"
                }
            },
            {
                "scope": "meta.separator",
                "settings": {
                    "foreground": "#005CC5",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "meta.output",
                "settings": {
                    "foreground": "#005CC5"
                }
            },
            {
                "scope": [
                    "brackethighlighter.tag",
                    "brackethighlighter.curly",
                    "brackethighlighter.round",
                    "brackethighlighter.square",
                    "brackethighlighter.angle",
                    "brackethighlighter.quote"
                ],
                "settings": {
                    "foreground": "#586069"
                }
            },
            {
                "scope": "brackethighlighter.unmatched",
                "settings": {
                    "foreground": "#B31D28"
                }
            },
            {
                "scope": [
                    "constant.other.reference.link",
                    "string.other.link"
                ],
                "settings": {
                    "foreground": "#032F62",
                    "fontStyle": "underline"
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#316BCD"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#CD9731"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#CD3131"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#800080"
                }
            }
        ]

    },
    {
        "name": "Abyss",
        "editorBackground": "#000c18",
        "tokenColors": [
            {
                "scope": [
                    "meta.embedded",
                    "source.groovy.embedded"
                ],
                "settings": {
                    "foreground": "#6688CC"
                }
            },
            {
                "scope": "comment",
                "settings": {
                    "foreground": "#384887"
                }
            },
            {
                "scope": "string",
                "settings": {
                    "foreground": "#22AA44"
                }
            },
            {
                "scope": "constant.numeric",
                "settings": {
                    "foreground": "#F280D0"
                }
            },
            {
                "scope": "constant.language",
                "settings": {
                    "foreground": "#F280D0"
                }
            },
            {
                "scope": [
                    "constant.character",
                    "constant.other"
                ],
                "settings": {
                    "foreground": "#F280D0"
                }
            },
            {
                "scope": "variable",
                "settings": {
                    "fontStyle": ""
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": "#225588"
                }
            },
            {
                "scope": "storage",
                "settings": {
                    "foreground": "#225588",
                    "fontStyle": ""
                }
            },
            {
                "scope": "storage.type",
                "settings": {
                    "foreground": "#9966B8",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    "entity.name.class",
                    "entity.name.type",
                    "entity.name.namespace",
                    "entity.name.scope-resolution"
                ],
                "settings": {
                    "foreground": "#FFEEBB",
                    "fontStyle": "underline"
                }
            },
            {
                "scope": "entity.other.inherited-class",
                "settings": {
                    "foreground": "#DDBB88",
                    "fontStyle": "italic underline"
                }
            },
            {
                "scope": "entity.name.function",
                "settings": {
                    "foreground": "#DDBB88",
                    "fontStyle": ""
                }
            },
            {
                "scope": "variable.parameter",
                "settings": {
                    "foreground": "#2277FF",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#225588",
                    "fontStyle": ""
                }
            },
            {
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": "#DDBB88",
                    "fontStyle": ""
                }
            },
            {
                "scope": "support.function",
                "settings": {
                    "foreground": "#9966B8",
                    "fontStyle": ""
                }
            },
            {
                "scope": "support.constant",
                "settings": {
                    "foreground": "#9966B8",
                    "fontStyle": ""
                }
            },
            {
                "scope": [
                    "support.type",
                    "support.class"
                ],
                "settings": {
                    "foreground": "#9966B8",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "support.other.variable",
                "settings": {
                    "fontStyle": ""
                }
            },
            {
                "scope": "invalid",
                "settings": {
                    "foreground": "#F8F8F0",
                    "fontStyle": ""
                }
            },
            {
                "scope": "invalid.deprecated",
                "settings": {
                    "foreground": "#F8F8F0"
                }
            },
            {
                "scope": [
                    "meta.diff",
                    "meta.diff.header"
                ],
                "settings": {
                    "foreground": "#E0EDDD",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.deleted",
                "settings": {
                    "foreground": "#DC322F",
                    "fontStyle": ""
                }
            },
            {
                "scope": "markup.changed",
                "settings": {
                    "foreground": "#CB4B16",
                    "fontStyle": ""
                }
            },
            {
                "scope": "markup.inserted",
                "settings": {
                    "foreground": "#219186"
                }
            },
            {
                "scope": "markup.quote",
                "settings": {
                    "foreground": "#22AA44"
                }
            },
            {
                "scope": [
                    "markup.bold",
                    "markup.italic"
                ],
                "settings": {
                    "foreground": "#22AA44"
                }
            },
            {
                "scope": "markup.bold",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.italic",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.inline.raw",
                "settings": {
                    "foreground": "#9966B8",
                    "fontStyle": ""
                }
            },
            {
                "scope": [
                    "markup.heading",
                    "markup.heading.setext"
                ],
                "settings": {
                    "foreground": "#6688CC",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#6796E6"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#CD9731"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#F44747"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#B267E6"
                }
            }
        ]
    },
    {
        "name": "Dark (Visual Studio)",
        "editorBackground": "#1e1e1e",
        "tokenColors": [
            {
                "scope": [
                    "meta.embedded",
                    "source.groovy.embedded"
                ],
                "settings": {
                    "foreground": "#D4D4D4"
                }
            },
            {
                "scope": "emphasis",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "strong",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "header",
                "settings": {
                    "foreground": "#000080"
                }
            },
            {
                "scope": "comment",
                "settings": {
                    "foreground": "#6A9955"
                }
            },
            {
                "scope": "constant.language",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": [
                    "constant.numeric",
                    "variable.other.enummember",
                    "keyword.operator.plus.exponent",
                    "keyword.operator.minus.exponent"
                ],
                "settings": {
                    "foreground": "#B5CEA8"
                }
            },
            {
                "scope": "constant.regexp",
                "settings": {
                    "foreground": "#646695"
                }
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "entity.name.tag.css",
                "settings": {
                    "foreground": "#D7BA7D"
                }
            },
            {
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": "#9CDCFE"
                }
            },
            {
                "scope": [
                    "entity.other.attribute-name.class.css",
                    "entity.other.attribute-name.class.mixin.css",
                    "entity.other.attribute-name.id.css",
                    "entity.other.attribute-name.parent-selector.css",
                    "entity.other.attribute-name.pseudo-class.css",
                    "entity.other.attribute-name.pseudo-element.css",
                    "source.css.less entity.other.attribute-name.id",
                    "entity.other.attribute-name.attribute.scss",
                    "entity.other.attribute-name.scss"
                ],
                "settings": {
                    "foreground": "#D7BA7D"
                }
            },
            {
                "scope": "invalid",
                "settings": {
                    "foreground": "#F44747"
                }
            },
            {
                "scope": "markup.underline",
                "settings": {
                    "fontStyle": "underline"
                }
            },
            {
                "scope": "markup.bold",
                "settings": {
                    "foreground": "#569CD6",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.heading",
                "settings": {
                    "foreground": "#569CD6",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.italic",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.inserted",
                "settings": {
                    "foreground": "#B5CEA8"
                }
            },
            {
                "scope": "markup.deleted",
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "markup.changed",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "punctuation.definition.quote.begin.markdown",
                "settings": {
                    "foreground": "#6A9955"
                }
            },
            {
                "scope": "punctuation.definition.list.begin.markdown",
                "settings": {
                    "foreground": "#6796E6"
                }
            },
            {
                "scope": "markup.inline.raw",
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "punctuation.definition.tag",
                "settings": {
                    "foreground": "#808080"
                }
            },
            {
                "scope": [
                    "meta.preprocessor",
                    "entity.name.function.preprocessor"
                ],
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "meta.preprocessor.string",
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "meta.preprocessor.numeric",
                "settings": {
                    "foreground": "#B5CEA8"
                }
            },
            {
                "scope": "meta.structure.dictionary.key.python",
                "settings": {
                    "foreground": "#9CDCFE"
                }
            },
            {
                "scope": "meta.diff.header",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "storage",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "storage.type",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": [
                    "storage.modifier",
                    "keyword.operator.noexcept"
                ],
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": [
                    "string",
                    "meta.embedded.assembly"
                ],
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "string.tag",
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "string.value",
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "string.regexp",
                "settings": {
                    "foreground": "#D16969"
                }
            },
            {
                "scope": [
                    "punctuation.definition.template-expression.begin",
                    "punctuation.definition.template-expression.end",
                    "punctuation.section.embedded"
                ],
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": [
                    "meta.template.expression"
                ],
                "settings": {
                    "foreground": "#D4D4D4"
                }
            },
            {
                "scope": [
                    "support.type.vendored.property-name",
                    "support.type.property-name",
                    "variable.css",
                    "variable.scss",
                    "variable.other.less",
                    "source.coffee.embedded"
                ],
                "settings": {
                    "foreground": "#9CDCFE"
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "keyword.control",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "keyword.operator",
                "settings": {
                    "foreground": "#D4D4D4"
                }
            },
            {
                "scope": [
                    "keyword.operator.new",
                    "keyword.operator.expression",
                    "keyword.operator.cast",
                    "keyword.operator.sizeof",
                    "keyword.operator.alignof",
                    "keyword.operator.typeid",
                    "keyword.operator.alignas",
                    "keyword.operator.instanceof",
                    "keyword.operator.logical.python",
                    "keyword.operator.wordlike"
                ],
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "keyword.other.unit",
                "settings": {
                    "foreground": "#B5CEA8"
                }
            },
            {
                "scope": [
                    "punctuation.section.embedded.begin.php",
                    "punctuation.section.embedded.end.php"
                ],
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "support.function.git-rebase",
                "settings": {
                    "foreground": "#9CDCFE"
                }
            },
            {
                "scope": "constant.sha.git-rebase",
                "settings": {
                    "foreground": "#B5CEA8"
                }
            },
            {
                "scope": [
                    "storage.modifier.import.java",
                    "variable.language.wildcard.java",
                    "storage.modifier.package.java"
                ],
                "settings": {
                    "foreground": "#D4D4D4"
                }
            },
            {
                "scope": "variable.language",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#6796E6"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#CD9731"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#F44747"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#B267E6"
                }
            }
        ]
    },
    {
        "name": "Dark+ (default dark)",
        "editorBackground": "#1e1e1e",
        "tokenColors": [
            {
                "scope": [
                    "meta.embedded",
                    "source.groovy.embedded"
                ],
                "settings": {
                    "foreground": "#D4D4D4"
                }
            },
            {
                "scope": "emphasis",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "strong",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "header",
                "settings": {
                    "foreground": "#000080"
                }
            },
            {
                "scope": "comment",
                "settings": {
                    "foreground": "#6A9955"
                }
            },
            {
                "scope": "constant.language",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": [
                    "constant.numeric",
                    "variable.other.enummember",
                    "keyword.operator.plus.exponent",
                    "keyword.operator.minus.exponent"
                ],
                "settings": {
                    "foreground": "#B5CEA8"
                }
            },
            {
                "scope": "constant.regexp",
                "settings": {
                    "foreground": "#646695"
                }
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "entity.name.tag.css",
                "settings": {
                    "foreground": "#D7BA7D"
                }
            },
            {
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": "#9CDCFE"
                }
            },
            {
                "scope": [
                    "entity.other.attribute-name.class.css",
                    "entity.other.attribute-name.class.mixin.css",
                    "entity.other.attribute-name.id.css",
                    "entity.other.attribute-name.parent-selector.css",
                    "entity.other.attribute-name.pseudo-class.css",
                    "entity.other.attribute-name.pseudo-element.css",
                    "source.css.less entity.other.attribute-name.id",
                    "entity.other.attribute-name.attribute.scss",
                    "entity.other.attribute-name.scss"
                ],
                "settings": {
                    "foreground": "#D7BA7D"
                }
            },
            {
                "scope": "invalid",
                "settings": {
                    "foreground": "#F44747"
                }
            },
            {
                "scope": "markup.underline",
                "settings": {
                    "fontStyle": "underline"
                }
            },
            {
                "scope": "markup.bold",
                "settings": {
                    "foreground": "#569CD6",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.heading",
                "settings": {
                    "foreground": "#569CD6",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.italic",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.inserted",
                "settings": {
                    "foreground": "#B5CEA8"
                }
            },
            {
                "scope": "markup.deleted",
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "markup.changed",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "punctuation.definition.quote.begin.markdown",
                "settings": {
                    "foreground": "#6A9955"
                }
            },
            {
                "scope": "punctuation.definition.list.begin.markdown",
                "settings": {
                    "foreground": "#6796E6"
                }
            },
            {
                "scope": "markup.inline.raw",
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "punctuation.definition.tag",
                "settings": {
                    "foreground": "#808080"
                }
            },
            {
                "scope": [
                    "meta.preprocessor",
                    "entity.name.function.preprocessor"
                ],
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "meta.preprocessor.string",
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "meta.preprocessor.numeric",
                "settings": {
                    "foreground": "#B5CEA8"
                }
            },
            {
                "scope": "meta.structure.dictionary.key.python",
                "settings": {
                    "foreground": "#9CDCFE"
                }
            },
            {
                "scope": "meta.diff.header",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "storage",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "storage.type",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": [
                    "storage.modifier",
                    "keyword.operator.noexcept"
                ],
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": [
                    "string",
                    "meta.embedded.assembly"
                ],
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "string.tag",
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "string.value",
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "string.regexp",
                "settings": {
                    "foreground": "#D16969"
                }
            },
            {
                "scope": [
                    "punctuation.definition.template-expression.begin",
                    "punctuation.definition.template-expression.end",
                    "punctuation.section.embedded"
                ],
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": [
                    "meta.template.expression"
                ],
                "settings": {
                    "foreground": "#D4D4D4"
                }
            },
            {
                "scope": [
                    "support.type.vendored.property-name",
                    "support.type.property-name",
                    "variable.css",
                    "variable.scss",
                    "variable.other.less",
                    "source.coffee.embedded"
                ],
                "settings": {
                    "foreground": "#9CDCFE"
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "keyword.control",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "keyword.operator",
                "settings": {
                    "foreground": "#D4D4D4"
                }
            },
            {
                "scope": [
                    "keyword.operator.new",
                    "keyword.operator.expression",
                    "keyword.operator.cast",
                    "keyword.operator.sizeof",
                    "keyword.operator.alignof",
                    "keyword.operator.typeid",
                    "keyword.operator.alignas",
                    "keyword.operator.instanceof",
                    "keyword.operator.logical.python",
                    "keyword.operator.wordlike"
                ],
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "keyword.other.unit",
                "settings": {
                    "foreground": "#B5CEA8"
                }
            },
            {
                "scope": [
                    "punctuation.section.embedded.begin.php",
                    "punctuation.section.embedded.end.php"
                ],
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "support.function.git-rebase",
                "settings": {
                    "foreground": "#9CDCFE"
                }
            },
            {
                "scope": "constant.sha.git-rebase",
                "settings": {
                    "foreground": "#B5CEA8"
                }
            },
            {
                "scope": [
                    "storage.modifier.import.java",
                    "variable.language.wildcard.java",
                    "storage.modifier.package.java"
                ],
                "settings": {
                    "foreground": "#D4D4D4"
                }
            },
            {
                "scope": "variable.language",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": [
                    "entity.name.function",
                    "support.function",
                    "support.constant.handlebars",
                    "source.powershell variable.other.member",
                    "entity.name.operator.custom-literal"
                ],
                "settings": {
                    "foreground": "#DCDCAA"
                }
            },
            {
                "scope": [
                    "meta.return-type",
                    "support.class",
                    "support.type",
                    "entity.name.type",
                    "entity.name.namespace",
                    "entity.other.attribute",
                    "entity.name.scope-resolution",
                    "entity.name.class",
                    "storage.type.numeric.go",
                    "storage.type.byte.go",
                    "storage.type.boolean.go",
                    "storage.type.string.go",
                    "storage.type.uintptr.go",
                    "storage.type.error.go",
                    "storage.type.rune.go",
                    "storage.type.cs",
                    "storage.type.generic.cs",
                    "storage.type.modifier.cs",
                    "storage.type.variable.cs",
                    "storage.type.annotation.java",
                    "storage.type.generic.java",
                    "storage.type.java",
                    "storage.type.object.array.java",
                    "storage.type.primitive.array.java",
                    "storage.type.primitive.java",
                    "storage.type.token.java",
                    "storage.type.groovy",
                    "storage.type.annotation.groovy",
                    "storage.type.parameters.groovy",
                    "storage.type.generic.groovy",
                    "storage.type.object.array.groovy",
                    "storage.type.primitive.array.groovy",
                    "storage.type.primitive.groovy"
                ],
                "settings": {
                    "foreground": "#4EC9B0"
                }
            },
            {
                "scope": [
                    "meta.type.cast.expr",
                    "meta.type.new.expr",
                    "support.constant.math",
                    "support.constant.dom",
                    "support.constant.json",
                    "entity.other.inherited-class"
                ],
                "settings": {
                    "foreground": "#4EC9B0"
                }
            },
            {
                "scope": [
                    "keyword.control",
                    "source.cpp keyword.operator.new",
                    "keyword.operator.delete",
                    "keyword.other.using",
                    "keyword.other.operator",
                    "entity.name.operator"
                ],
                "settings": {
                    "foreground": "#C586C0"
                }
            },
            {
                "scope": [
                    "variable",
                    "meta.definition.variable.name",
                    "support.variable",
                    "entity.name.variable"
                ],
                "settings": {
                    "foreground": "#9CDCFE"
                }
            },
            {
                "scope": [
                    "variable.other.constant",
                    "variable.other.enummember"
                ],
                "settings": {
                    "foreground": "#4FC1FF"
                }
            },
            {
                "scope": [
                    "meta.object-literal.key"
                ],
                "settings": {
                    "foreground": "#9CDCFE"
                }
            },
            {
                "scope": [
                    "support.constant.property-value",
                    "support.constant.font-name",
                    "support.constant.media-type",
                    "support.constant.media",
                    "constant.other.color.rgb-value",
                    "constant.other.rgb-value",
                    "support.constant.color"
                ],
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": [
                    "punctuation.definition.group.regexp",
                    "punctuation.definition.group.assertion.regexp",
                    "punctuation.definition.character-class.regexp",
                    "punctuation.character.set.begin.regexp",
                    "punctuation.character.set.end.regexp",
                    "keyword.operator.negation.regexp",
                    "support.other.parenthesis.regexp"
                ],
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": [
                    "constant.character.character-class.regexp",
                    "constant.other.character-class.set.regexp",
                    "constant.other.character-class.regexp",
                    "constant.character.set.regexp"
                ],
                "settings": {
                    "foreground": "#D16969"
                }
            },
            {
                "scope": [
                    "keyword.operator.or.regexp",
                    "keyword.control.anchor.regexp"
                ],
                "settings": {
                    "foreground": "#DCDCAA"
                }
            },
            {
                "scope": "keyword.operator.quantifier.regexp",
                "settings": {
                    "foreground": "#D7BA7D"
                }
            },
            {
                "scope": "constant.character",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "constant.character.escape",
                "settings": {
                    "foreground": "#D7BA7D"
                }
            },
            {
                "scope": "entity.name.label",
                "settings": {
                    "foreground": "#C8C8C8"
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#6796E6"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#CD9731"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#F44747"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#B267E6"
                }
            }
        ]
    },
    {
        "name": "Kimbie Dark",
        "editorBackground": "#221a0f",
        "tokenColors": [
            {
                "scope": [
                    "meta.embedded",
                    "source.groovy.embedded"
                ],
                "settings": {
                    "foreground": "#D3AF86"
                }
            },
            {
                "scope": "variable.parameter.function",
                "settings": {
                    "foreground": "#D3AF86"
                }
            },
            {
                "scope": [
                    "comment",
                    "punctuation.definition.comment"
                ],
                "settings": {
                    "foreground": "#A57A4C"
                }
            },
            {
                "scope": [
                    "punctuation.definition.string",
                    "punctuation.definition.variable",
                    "punctuation.definition.string",
                    "punctuation.definition.parameters",
                    "punctuation.definition.string",
                    "punctuation.definition.array"
                ],
                "settings": {
                    "foreground": "#D3AF86"
                }
            },
            {
                "scope": "none",
                "settings": {
                    "foreground": "#D3AF86"
                }
            },
            {
                "scope": "keyword.operator",
                "settings": {
                    "foreground": "#D3AF86"
                }
            },
            {
                "scope": [
                    "keyword",
                    "keyword.control",
                    "keyword.operator.new.cpp",
                    "keyword.operator.delete.cpp",
                    "keyword.other.using",
                    "keyword.other.operator"
                ],
                "settings": {
                    "foreground": "#98676A"
                }
            },
            {
                "scope": "variable",
                "settings": {
                    "foreground": "#DC3958"
                }
            },
            {
                "scope": [
                    "entity.name.function",
                    "meta.require",
                    "support.function.any-method"
                ],
                "settings": {
                    "foreground": "#8AB1B0"
                }
            },
            {
                "scope": [
                    "support.class",
                    "entity.name.class",
                    "entity.name.type",
                    "entity.name.namespace",
                    "entity.name.scope-resolution"
                ],
                "settings": {
                    "foreground": "#F06431"
                }
            },
            {
                "scope": "keyword.other.special-method",
                "settings": {
                    "foreground": "#8AB1B0"
                }
            },
            {
                "scope": "storage",
                "settings": {
                    "foreground": "#98676A"
                }
            },
            {
                "scope": "support.function",
                "settings": {
                    "foreground": "#7E602C"
                }
            },
            {
                "scope": [
                    "string",
                    "constant.other.symbol",
                    "entity.other.inherited-class"
                ],
                "settings": {
                    "foreground": "#889B4A"
                }
            },
            {
                "scope": "constant.numeric",
                "settings": {
                    "foreground": "#F79A32"
                }
            },
            {
                "scope": "none",
                "settings": {
                    "foreground": "#F79A32"
                }
            },
            {
                "scope": "none",
                "settings": {
                    "foreground": "#F79A32"
                }
            },
            {
                "scope": "constant",
                "settings": {
                    "foreground": "#F79A32"
                }
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#DC3958"
                }
            },
            {
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": "#F79A32"
                }
            },
            {
                "scope": [
                    "entity.other.attribute-name.id",
                    "punctuation.definition.entity"
                ],
                "settings": {
                    "foreground": "#8AB1B0"
                }
            },
            {
                "scope": "meta.selector",
                "settings": {
                    "foreground": "#98676A"
                }
            },
            {
                "scope": "none",
                "settings": {
                    "foreground": "#F79A32"
                }
            },
            {
                "scope": [
                    "markup.heading",
                    "markup.heading.setext",
                    "punctuation.definition.heading",
                    "entity.name.section"
                ],
                "settings": {
                    "foreground": "#8AB1B0",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "keyword.other.unit",
                "settings": {
                    "foreground": "#F79A32"
                }
            },
            {
                "scope": [
                    "markup.bold",
                    "punctuation.definition.bold"
                ],
                "settings": {
                    "foreground": "#F06431",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": [
                    "markup.italic",
                    "punctuation.definition.italic"
                ],
                "settings": {
                    "foreground": "#98676A",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.inline.raw",
                "settings": {
                    "foreground": "#889B4A"
                }
            },
            {
                "scope": "string.other.link",
                "settings": {
                    "foreground": "#DC3958"
                }
            },
            {
                "scope": "meta.link",
                "settings": {
                    "foreground": "#F79A32"
                }
            },
            {
                "scope": "markup.list",
                "settings": {
                    "foreground": "#DC3958"
                }
            },
            {
                "scope": "markup.quote",
                "settings": {
                    "foreground": "#F79A32"
                }
            },
            {
                "scope": "meta.separator",
                "settings": {
                    "foreground": "#D3AF86"
                }
            },
            {
                "scope": "markup.inserted",
                "settings": {
                    "foreground": "#889B4A"
                }
            },
            {
                "scope": "markup.deleted",
                "settings": {
                    "foreground": "#DC3958"
                }
            },
            {
                "scope": "markup.changed",
                "settings": {
                    "foreground": "#98676A"
                }
            },
            {
                "scope": "constant.other.color",
                "settings": {
                    "foreground": "#7E602C"
                }
            },
            {
                "scope": "string.regexp",
                "settings": {
                    "foreground": "#7E602C"
                }
            },
            {
                "scope": "constant.character.escape",
                "settings": {
                    "foreground": "#7E602C"
                }
            },
            {
                "scope": [
                    "punctuation.section.embedded",
                    "variable.interpolation"
                ],
                "settings": {
                    "foreground": "#088649"
                }
            },
            {
                "scope": "invalid.illegal",
                "settings": {
                    "foreground": "#DC3958"
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#6796E6"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#CD9731"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#F44747"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#B267E6"
                }
            }
        ]
    },
    {
        "name": "Monokai",
        "editorBackground": "#272822",
        "tokenColors": [
            {
                "scope": [
                    "meta.embedded",
                    "source.groovy.embedded"
                ],
                "settings": {
                    "foreground": "#F8F8F2"
                }
            },
            {
                "scope": "comment",
                "settings": {
                    "foreground": "#88846F"
                }
            },
            {
                "scope": "string",
                "settings": {
                    "foreground": "#E6DB74"
                }
            },
            {
                "scope": [
                    "punctuation.definition.template-expression",
                    "punctuation.section.embedded"
                ],
                "settings": {
                    "foreground": "#F92672"
                }
            },
            {
                "scope": [
                    "meta.template.expression"
                ],
                "settings": {
                    "foreground": "#F8F8F2"
                }
            },
            {
                "scope": "constant.numeric",
                "settings": {
                    "foreground": "#AE81FF"
                }
            },
            {
                "scope": "constant.language",
                "settings": {
                    "foreground": "#AE81FF"
                }
            },
            {
                "scope": "constant.character, constant.other",
                "settings": {
                    "foreground": "#AE81FF"
                }
            },
            {
                "scope": "variable",
                "settings": {
                    "foreground": "#F8F8F2",
                    "fontStyle": ""
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": "#F92672"
                }
            },
            {
                "scope": "storage",
                "settings": {
                    "foreground": "#F92672",
                    "fontStyle": ""
                }
            },
            {
                "scope": "storage.type",
                "settings": {
                    "foreground": "#66D9EF",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "entity.name.type, entity.name.class, entity.name.namespace, entity.name.scope-resolution",
                "settings": {
                    "foreground": "#A6E22E",
                    "fontStyle": "underline"
                }
            },
            {
                "scope": "entity.other.inherited-class",
                "settings": {
                    "foreground": "#A6E22E",
                    "fontStyle": "italic underline"
                }
            },
            {
                "scope": "entity.name.function",
                "settings": {
                    "foreground": "#A6E22E",
                    "fontStyle": ""
                }
            },
            {
                "scope": "variable.parameter",
                "settings": {
                    "foreground": "#FD971F",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#F92672",
                    "fontStyle": ""
                }
            },
            {
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": "#A6E22E",
                    "fontStyle": ""
                }
            },
            {
                "scope": "support.function",
                "settings": {
                    "foreground": "#66D9EF",
                    "fontStyle": ""
                }
            },
            {
                "scope": "support.constant",
                "settings": {
                    "foreground": "#66D9EF",
                    "fontStyle": ""
                }
            },
            {
                "scope": "support.type, support.class",
                "settings": {
                    "foreground": "#66D9EF",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "support.other.variable",
                "settings": {
                    "fontStyle": ""
                }
            },
            {
                "scope": "invalid",
                "settings": {
                    "foreground": "#F8F8F0",
                    "fontStyle": ""
                }
            },
            {
                "scope": "invalid.deprecated",
                "settings": {
                    "foreground": "#F8F8F0"
                }
            },
            {
                "scope": "meta.structure.dictionary.json string.quoted.double.json",
                "settings": {
                    "foreground": "#CFCFC2"
                }
            },
            {
                "scope": "meta.diff, meta.diff.header",
                "settings": {
                    "foreground": "#75715E"
                }
            },
            {
                "scope": "markup.deleted",
                "settings": {
                    "foreground": "#F92672"
                }
            },
            {
                "scope": "markup.inserted",
                "settings": {
                    "foreground": "#A6E22E"
                }
            },
            {
                "scope": "markup.changed",
                "settings": {
                    "foreground": "#E6DB74"
                }
            },
            {
                "scope": "constant.numeric.line-number.find-in-files - match",
                "settings": {
                    "foreground": "#AE81FFA0"
                }
            },
            {
                "scope": "entity.name.filename.find-in-files",
                "settings": {
                    "foreground": "#E6DB74"
                }
            },
            {
                "scope": "markup.quote",
                "settings": {
                    "foreground": "#F92672"
                }
            },
            {
                "scope": "markup.list",
                "settings": {
                    "foreground": "#E6DB74"
                }
            },
            {
                "scope": "markup.bold, markup.italic",
                "settings": {
                    "foreground": "#66D9EF"
                }
            },
            {
                "scope": "markup.inline.raw",
                "settings": {
                    "foreground": "#FD971F",
                    "fontStyle": ""
                }
            },
            {
                "scope": "markup.heading",
                "settings": {
                    "foreground": "#A6E22E"
                }
            },
            {
                "scope": "markup.heading.setext",
                "settings": {
                    "foreground": "#A6E22E",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.heading.markdown",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.quote.markdown",
                "settings": {
                    "foreground": "#75715E",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.bold.markdown",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "string.other.link.title.markdown,string.other.link.description.markdown",
                "settings": {
                    "foreground": "#AE81FF"
                }
            },
            {
                "scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
                "settings": {
                    "foreground": "#E6DB74"
                }
            },
            {
                "scope": "markup.italic.markdown",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.list.unnumbered.markdown, markup.list.numbered.markdown",
                "settings": {
                    "foreground": "#F8F8F2"
                }
            },
            {
                "scope": [
                    "punctuation.definition.list.begin.markdown"
                ],
                "settings": {
                    "foreground": "#A6E22E"
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#6796E6"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#CD9731"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#F44747"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#B267E6"
                }
            },
            {
                "scope": "variable.language",
                "settings": {
                    "foreground": "#FD971F"
                }
            }
        ]
    },
    {
        "name": "Monokai Dimmed",
        "editorBackground": "#1e1e1e",
        "tokenColors": [
            {
                "scope": [
                    "meta.embedded",
                    "source.groovy.embedded"
                ],
                "settings": {
                    "foreground": "#C5C8C6"
                }
            },
            {
                "scope": "comment",
                "settings": {
                    "foreground": "#9A9B99",
                    "fontStyle": ""
                }
            },
            {
                "scope": "string",
                "settings": {
                    "foreground": "#9AA83A",
                    "fontStyle": ""
                }
            },
            {
                "scope": "string source",
                "settings": {
                    "foreground": "#D08442",
                    "fontStyle": ""
                }
            },
            {
                "scope": "constant.numeric",
                "settings": {
                    "foreground": "#6089B4",
                    "fontStyle": ""
                }
            },
            {
                "scope": "constant.language",
                "settings": {
                    "foreground": "#408080",
                    "fontStyle": ""
                }
            },
            {
                "scope": "constant.character, constant.other",
                "settings": {
                    "foreground": "#8080FF",
                    "fontStyle": ""
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": "#6089B4",
                    "fontStyle": ""
                }
            },
            {
                "scope": "support",
                "settings": {
                    "foreground": "#C7444A",
                    "fontStyle": ""
                }
            },
            {
                "scope": "storage",
                "settings": {
                    "foreground": "#9872A2",
                    "fontStyle": ""
                }
            },
            {
                "scope": "entity.name.class, entity.name.type, entity.name.namespace, entity.name.scope-resolution",
                "settings": {
                    "foreground": "#9B0000",
                    "fontStyle": ""
                }
            },
            {
                "scope": "entity.other.inherited-class",
                "settings": {
                    "foreground": "#C7444A",
                    "fontStyle": ""
                }
            },
            {
                "scope": "entity.name.function",
                "settings": {
                    "foreground": "#CE6700",
                    "fontStyle": ""
                }
            },
            {
                "scope": "variable.parameter",
                "settings": {
                    "foreground": "#6089B4",
                    "fontStyle": ""
                }
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#9872A2",
                    "fontStyle": ""
                }
            },
            {
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": "#9872A2",
                    "fontStyle": ""
                }
            },
            {
                "scope": "support.function",
                "settings": {
                    "foreground": "#9872A2",
                    "fontStyle": ""
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": "#676867",
                    "fontStyle": ""
                }
            },
            {
                "scope": "variable.other, variable.js, punctuation.separator.variable",
                "settings": {
                    "foreground": "#6089B4",
                    "fontStyle": ""
                }
            },
            {
                "scope": "punctuation.section.embedded -(source string source punctuation.section.embedded), meta.brace.erb.html",
                "settings": {
                    "foreground": "#008200",
                    "fontStyle": ""
                }
            },
            {
                "scope": "invalid",
                "settings": {
                    "foreground": "#FF0B00",
                    "fontStyle": ""
                }
            },
            {
                "scope": "variable.other.php, variable.other.normal",
                "settings": {
                    "foreground": "#6089B4",
                    "fontStyle": ""
                }
            },
            {
                "scope": "meta.function-call.object",
                "settings": {
                    "foreground": "#9872A2",
                    "fontStyle": ""
                }
            },
            {
                "scope": "variable.other.property",
                "settings": {
                    "foreground": "#9872A2",
                    "fontStyle": ""
                }
            },
            {
                "scope": [
                    "keyword.control",
                    "keyword.operator.new.cpp",
                    "keyword.operator.delete.cpp",
                    "keyword.other.using",
                    "keyword.other.operator"
                ],
                "settings": {
                    "foreground": "#9872A2",
                    "fontStyle": ""
                }
            },
            {
                "scope": "meta.tag",
                "settings": {
                    "foreground": "#D0B344",
                    "fontStyle": ""
                }
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#6089B4",
                    "fontStyle": ""
                }
            },
            {
                "scope": "meta.doctype, meta.tag.sgml-declaration.doctype, meta.tag.sgml.doctype",
                "settings": {
                    "foreground": "#9AA83A",
                    "fontStyle": ""
                }
            },
            {
                "scope": "meta.tag.inline source, text.html.php.source",
                "settings": {
                    "foreground": "#9AA83A",
                    "fontStyle": ""
                }
            },
            {
                "scope": "meta.tag.other, entity.name.tag.style, entity.name.tag.script, meta.tag.block.script, source.js.embedded punctuation.definition.tag.html, source.css.embedded punctuation.definition.tag.html",
                "settings": {
                    "foreground": "#9872A2",
                    "fontStyle": ""
                }
            },
            {
                "scope": "entity.other.attribute-name, meta.tag punctuation.definition.string",
                "settings": {
                    "foreground": "#D0B344",
                    "fontStyle": ""
                }
            },
            {
                "scope": "meta.tag string -source -punctuation, text source text meta.tag string -punctuation",
                "settings": {
                    "foreground": "#6089B4",
                    "fontStyle": ""
                }
            },
            {
                "scope": "punctuation.section.embedded -(source string source punctuation.section.embedded), meta.brace.erb.html",
                "settings": {
                    "foreground": "#D0B344",
                    "fontStyle": ""
                }
            },
            {
                "scope": "meta.toc-list.id",
                "settings": {
                    "foreground": "#9AA83A"
                }
            },
            {
                "scope": "string.quoted.double.html, punctuation.definition.string.begin.html, punctuation.definition.string.end.html",
                "settings": {
                    "foreground": "#9AA83A",
                    "fontStyle": ""
                }
            },
            {
                "scope": "punctuation.definition.tag.html, punctuation.definition.tag.begin, punctuation.definition.tag.end",
                "settings": {
                    "foreground": "#6089B4",
                    "fontStyle": ""
                }
            },
            {
                "scope": "meta.selector.css entity.other.attribute-name.id",
                "settings": {
                    "foreground": "#9872A2",
                    "fontStyle": ""
                }
            },
            {
                "scope": "support.type.property-name.css",
                "settings": {
                    "foreground": "#676867",
                    "fontStyle": ""
                }
            },
            {
                "scope": "meta.property-group support.constant.property-value.css, meta.property-value support.constant.property-value.css",
                "settings": {
                    "foreground": "#C7444A",
                    "fontStyle": ""
                }
            },
            {
                "scope": "variable.language.js",
                "settings": {
                    "foreground": "#CC555A"
                }
            },
            {
                "scope": [
                    "punctuation.definition.template-expression",
                    "punctuation.section.embedded.coffee"
                ],
                "settings": {
                    "foreground": "#D08442"
                }
            },
            {
                "scope": [
                    "meta.template.expression"
                ],
                "settings": {
                    "foreground": "#C5C8C6"
                }
            },
            {
                "scope": "meta.function-call.object.php",
                "settings": {
                    "foreground": "#D0B344",
                    "fontStyle": ""
                }
            },
            {
                "scope": "punctuation.definition.string.end.php, punctuation.definition.string.begin.php",
                "settings": {
                    "foreground": "#9AA83A"
                }
            },
            {
                "scope": "source.php.embedded.line.html",
                "settings": {
                    "foreground": "#676867"
                }
            },
            {
                "scope": "punctuation.section.embedded.begin.php, punctuation.section.embedded.end.php",
                "settings": {
                    "foreground": "#D08442",
                    "fontStyle": ""
                }
            },
            {
                "scope": "constant.other.symbol.ruby",
                "settings": {
                    "foreground": "#9AA83A",
                    "fontStyle": ""
                }
            },
            {
                "scope": "variable.language.ruby",
                "settings": {
                    "foreground": "#D0B344",
                    "fontStyle": ""
                }
            },
            {
                "scope": "keyword.other.special-method.ruby",
                "settings": {
                    "foreground": "#D9B700",
                    "fontStyle": ""
                }
            },
            {
                "scope": [
                    "punctuation.section.embedded.begin.ruby",
                    "punctuation.section.embedded.end.ruby"
                ],
                "settings": {
                    "foreground": "#D08442"
                }
            },
            {
                "scope": "keyword.other.DML.sql",
                "settings": {
                    "foreground": "#D0B344",
                    "fontStyle": ""
                }
            },
            {
                "scope": "meta.diff, meta.diff.header",
                "settings": {
                    "foreground": "#E0EDDD",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.deleted",
                "settings": {
                    "foreground": "#DC322F",
                    "fontStyle": ""
                }
            },
            {
                "scope": "markup.changed",
                "settings": {
                    "foreground": "#CB4B16",
                    "fontStyle": ""
                }
            },
            {
                "scope": "markup.inserted",
                "settings": {
                    "foreground": "#219186"
                }
            },
            {
                "scope": "markup.quote",
                "settings": {
                    "foreground": "#9872A2"
                }
            },
            {
                "scope": "markup.list",
                "settings": {
                    "foreground": "#9AA83A"
                }
            },
            {
                "scope": "markup.bold, markup.italic",
                "settings": {
                    "foreground": "#6089B4"
                }
            },
            {
                "scope": "markup.inline.raw",
                "settings": {
                    "foreground": "#FF0080",
                    "fontStyle": ""
                }
            },
            {
                "scope": "markup.heading",
                "settings": {
                    "foreground": "#D0B344"
                }
            },
            {
                "scope": "markup.heading.setext",
                "settings": {
                    "foreground": "#D0B344",
                    "fontStyle": ""
                }
            },
            {
                "scope": "markup.heading.markdown",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.quote.markdown",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.bold.markdown",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "string.other.link.title.markdown,string.other.link.description.markdown",
                "settings": {
                    "foreground": "#AE81FF"
                }
            },
            {
                "scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
                "settings": {}
            },
            {
                "scope": "markup.italic.markdown",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.list.unnumbered.markdown, markup.list.numbered.markdown",
                "settings": {}
            },
            {
                "scope": [
                    "punctuation.definition.list.begin.markdown"
                ],
                "settings": {}
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#6796E6"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#CD9731"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#F44747"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#B267E6"
                }
            },
            {
                "scope": "variable.language",
                "settings": {
                    "foreground": "#C7444A"
                }
            }
        ]
    },
    {
        "name": "Red",
        "editorBackground": "#390000",
        "tokenColors": [
            {
                "scope": [
                    "meta.embedded",
                    "source.groovy.embedded"
                ],
                "settings": {
                    "foreground": "#F8F8F8"
                }
            },
            {
                "scope": "comment",
                "settings": {
                    "foreground": "#E7C0C0",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "constant",
                "settings": {
                    "foreground": "#994646",
                    "fontStyle": ""
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": "#F12727",
                    "fontStyle": ""
                }
            },
            {
                "scope": "entity",
                "settings": {
                    "foreground": "#FEC758",
                    "fontStyle": ""
                }
            },
            {
                "scope": "storage",
                "settings": {
                    "foreground": "#FF6262",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "string",
                "settings": {
                    "foreground": "#CD8D8D",
                    "fontStyle": ""
                }
            },
            {
                "scope": "support",
                "settings": {
                    "foreground": "#9DF39F",
                    "fontStyle": ""
                }
            },
            {
                "scope": "variable",
                "settings": {
                    "foreground": "#FB9A4B",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "invalid",
                "settings": {
                    "foreground": "#FFFFFF"
                }
            },
            {
                "scope": "entity.other.inherited-class",
                "settings": {
                    "foreground": "#AA5507",
                    "fontStyle": "underline"
                }
            },
            {
                "scope": "constant.character",
                "settings": {
                    "foreground": "#EC0D1E"
                }
            },
            {
                "scope": [
                    "string constant",
                    "constant.character.escape"
                ],
                "settings": {
                    "foreground": "#FFE862",
                    "fontStyle": ""
                }
            },
            {
                "scope": "string.regexp",
                "settings": {
                    "foreground": "#FFB454"
                }
            },
            {
                "scope": "string variable",
                "settings": {
                    "foreground": "#EDEF7D"
                }
            },
            {
                "scope": "support.function",
                "settings": {
                    "foreground": "#FFB454",
                    "fontStyle": ""
                }
            },
            {
                "scope": [
                    "support.constant",
                    "support.variable"
                ],
                "settings": {
                    "foreground": "#EB939A",
                    "fontStyle": ""
                }
            },
            {
                "scope": [
                    "declaration.sgml.html declaration.doctype",
                    "declaration.sgml.html declaration.doctype entity",
                    "declaration.sgml.html declaration.doctype string",
                    "declaration.xml-processing",
                    "declaration.xml-processing entity",
                    "declaration.xml-processing string"
                ],
                "settings": {
                    "foreground": "#73817D",
                    "fontStyle": ""
                }
            },
            {
                "scope": [
                    "declaration.tag",
                    "declaration.tag entity",
                    "meta.tag",
                    "meta.tag entity"
                ],
                "settings": {
                    "foreground": "#EC0D1E",
                    "fontStyle": ""
                }
            },
            {
                "scope": "meta.selector.css entity.name.tag",
                "settings": {
                    "foreground": "#AA5507",
                    "fontStyle": ""
                }
            },
            {
                "scope": "meta.selector.css entity.other.attribute-name.id",
                "settings": {
                    "foreground": "#FEC758"
                }
            },
            {
                "scope": "meta.selector.css entity.other.attribute-name.class",
                "settings": {
                    "foreground": "#41A83E",
                    "fontStyle": ""
                }
            },
            {
                "scope": "support.type.property-name.css",
                "settings": {
                    "foreground": "#96DD3B",
                    "fontStyle": ""
                }
            },
            {
                "scope": [
                    "meta.property-group support.constant.property-value.css",
                    "meta.property-value support.constant.property-value.css"
                ],
                "settings": {
                    "foreground": "#FFE862",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    "meta.property-value support.constant.named-color.css",
                    "meta.property-value constant"
                ],
                "settings": {
                    "foreground": "#FFE862",
                    "fontStyle": ""
                }
            },
            {
                "scope": "meta.preprocessor.at-rule keyword.control.at-rule",
                "settings": {
                    "foreground": "#FD6209"
                }
            },
            {
                "scope": "meta.constructor.argument.css",
                "settings": {
                    "foreground": "#EC9799",
                    "fontStyle": ""
                }
            },
            {
                "scope": [
                    "meta.diff",
                    "meta.diff.header"
                ],
                "settings": {
                    "foreground": "#F8F8F8",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.deleted",
                "settings": {
                    "foreground": "#EC9799"
                }
            },
            {
                "scope": "markup.changed",
                "settings": {
                    "foreground": "#F8F8F8"
                }
            },
            {
                "scope": "markup.inserted",
                "settings": {
                    "foreground": "#41A83E"
                }
            },
            {
                "scope": "markup.quote",
                "settings": {
                    "foreground": "#F12727"
                }
            },
            {
                "scope": "markup.list",
                "settings": {
                    "foreground": "#FF6262"
                }
            },
            {
                "scope": [
                    "markup.bold",
                    "markup.italic"
                ],
                "settings": {
                    "foreground": "#FB9A4B"
                }
            },
            {
                "scope": "markup.bold",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.italic",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.inline.raw",
                "settings": {
                    "foreground": "#CD8D8D",
                    "fontStyle": ""
                }
            },
            {
                "scope": [
                    "markup.heading",
                    "markup.heading.setext",
                    "punctuation.definition.heading",
                    "entity.name.section"
                ],
                "settings": {
                    "foreground": "#FEC758",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": [
                    "punctuation.definition.template-expression.begin",
                    "punctuation.definition.template-expression.end",
                    "punctuation.section.embedded",
                    ".format.placeholder"
                ],
                "settings": {
                    "foreground": "#EC0D1E"
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#6796E6"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#CD9731"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#F44747"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#B267E6"
                }
            }
        ]
    },
    {
        "name": "Solarized Dark",
        "editorBackground": "#002b36",
        "tokenColors": [
            {
                "scope": [
                    "meta.embedded",
                    "source.groovy.embedded"
                ],
                "settings": {
                    "foreground": "#93A1A1"
                }
            },
            {
                "scope": "comment",
                "settings": {
                    "foreground": "#657B83",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "string",
                "settings": {
                    "foreground": "#2AA198"
                }
            },
            {
                "scope": "string.regexp",
                "settings": {
                    "foreground": "#D30102"
                }
            },
            {
                "scope": "constant.numeric",
                "settings": {
                    "foreground": "#D33682"
                }
            },
            {
                "scope": [
                    "variable.language",
                    "variable.other"
                ],
                "settings": {
                    "foreground": "#268BD2"
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": "#859900"
                }
            },
            {
                "scope": "storage",
                "settings": {
                    "foreground": "#93A1A1",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": [
                    "entity.name.class",
                    "entity.name.type",
                    "entity.name.namespace",
                    "entity.name.scope-resolution"
                ],
                "settings": {
                    "foreground": "#CB4B16",
                    "fontStyle": ""
                }
            },
            {
                "scope": "entity.name.function",
                "settings": {
                    "foreground": "#268BD2"
                }
            },
            {
                "scope": "punctuation.definition.variable",
                "settings": {
                    "foreground": "#859900"
                }
            },
            {
                "scope": [
                    "punctuation.section.embedded.begin",
                    "punctuation.section.embedded.end"
                ],
                "settings": {
                    "foreground": "#D30102"
                }
            },
            {
                "scope": [
                    "constant.language",
                    "meta.preprocessor"
                ],
                "settings": {
                    "foreground": "#B58900"
                }
            },
            {
                "scope": [
                    "support.function.construct",
                    "keyword.other.new"
                ],
                "settings": {
                    "foreground": "#CB4B16"
                }
            },
            {
                "scope": [
                    "constant.character",
                    "constant.other"
                ],
                "settings": {
                    "foreground": "#CB4B16"
                }
            },
            {
                "scope": "entity.other.inherited-class",
                "settings": {
                    "foreground": "#6C71C4"
                }
            },
            {
                "scope": "variable.parameter",
                "settings": {}
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#268BD2"
                }
            },
            {
                "scope": "punctuation.definition.tag",
                "settings": {
                    "foreground": "#657B83"
                }
            },
            {
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": "#93A1A1"
                }
            },
            {
                "scope": "support.function",
                "settings": {
                    "foreground": "#268BD2"
                }
            },
            {
                "scope": "punctuation.separator.continuation",
                "settings": {
                    "foreground": "#D30102"
                }
            },
            {
                "scope": "support.constant",
                "settings": {}
            },
            {
                "scope": [
                    "support.type",
                    "support.class"
                ],
                "settings": {
                    "foreground": "#859900"
                }
            },
            {
                "scope": "support.type.exception",
                "settings": {
                    "foreground": "#CB4B16"
                }
            },
            {
                "scope": "support.other.variable",
                "settings": {}
            },
            {
                "scope": "invalid",
                "settings": {}
            },
            {
                "scope": [
                    "meta.diff",
                    "meta.diff.header"
                ],
                "settings": {
                    "foreground": "#E0EDDD",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.deleted",
                "settings": {
                    "foreground": "#DC322F",
                    "fontStyle": ""
                }
            },
            {
                "scope": "markup.changed",
                "settings": {
                    "foreground": "#CB4B16",
                    "fontStyle": ""
                }
            },
            {
                "scope": "markup.inserted",
                "settings": {
                    "foreground": "#219186"
                }
            },
            {
                "scope": "markup.quote",
                "settings": {
                    "foreground": "#859900"
                }
            },
            {
                "scope": "markup.list",
                "settings": {
                    "foreground": "#B58900"
                }
            },
            {
                "scope": [
                    "markup.bold",
                    "markup.italic"
                ],
                "settings": {
                    "foreground": "#D33682"
                }
            },
            {
                "scope": "markup.bold",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.italic",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.inline.raw",
                "settings": {
                    "foreground": "#2AA198",
                    "fontStyle": ""
                }
            },
            {
                "scope": "markup.heading",
                "settings": {
                    "foreground": "#268BD2",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.heading.setext",
                "settings": {
                    "foreground": "#268BD2",
                    "fontStyle": ""
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#6796E6"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#CD9731"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#F44747"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#B267E6"
                }
            }
        ]
    },
    {
        "name": "Tomorrow Night Blue",
        "editorBackground": "#002451",
        "tokenColors": [
            {
                "scope": [
                    "meta.embedded",
                    "source.groovy.embedded"
                ],
                "settings": {
                    "foreground": "#FFFFFF",
                    "background": "#002451"
                }
            },
            {
                "scope": "comment",
                "settings": {
                    "foreground": "#7285B7"
                }
            },
            {
                "scope": "keyword.operator.class, keyword.operator, constant.other, source.php.embedded.line",
                "settings": {
                    "foreground": "#FFFFFF",
                    "fontStyle": ""
                }
            },
            {
                "scope": "variable, support.other.variable, string.other.link, string.regexp, entity.name.tag, entity.other.attribute-name, meta.tag, declaration.tag, markup.deleted.git_gutter",
                "settings": {
                    "foreground": "#FF9DA4"
                }
            },
            {
                "scope": "constant.numeric, constant.language, support.constant, constant.character, variable.parameter, punctuation.section.embedded, keyword.other.unit",
                "settings": {
                    "foreground": "#FFC58F",
                    "fontStyle": ""
                }
            },
            {
                "scope": "entity.name.class, entity.name.type, entity.name.namespace, entity.name.scope-resolution, support.type, support.class",
                "settings": {
                    "foreground": "#FFEEAD",
                    "fontStyle": ""
                }
            },
            {
                "scope": "string, constant.other.symbol, entity.other.inherited-class, markup.heading, markup.inserted.git_gutter",
                "settings": {
                    "foreground": "#D1F1A9",
                    "fontStyle": ""
                }
            },
            {
                "scope": "keyword.operator, constant.other.color",
                "settings": {
                    "foreground": "#99FFFF"
                }
            },
            {
                "scope": "entity.name.function, meta.function-call, support.function, keyword.other.special-method, meta.block-level, markup.changed.git_gutter",
                "settings": {
                    "foreground": "#BBDAFF",
                    "fontStyle": ""
                }
            },
            {
                "scope": "keyword, storage, storage.type, entity.name.tag.css",
                "settings": {
                    "foreground": "#EBBBFF",
                    "fontStyle": ""
                }
            },
            {
                "scope": "invalid",
                "settings": {
                    "foreground": "#FFFFFF",
                    "background": "#F99DA5",
                    "fontStyle": ""
                }
            },
            {
                "scope": "meta.separator",
                "settings": {
                    "foreground": "#FFFFFF",
                    "background": "#BBDAFE"
                }
            },
            {
                "scope": "invalid.deprecated",
                "settings": {
                    "foreground": "#FFFFFF",
                    "background": "#EBBBFF",
                    "fontStyle": ""
                }
            },
            {
                "scope": "markup.inserted.diff, markup.deleted.diff, meta.diff.header.to-file, meta.diff.header.from-file",
                "settings": {
                    "foreground": "#FFFFFF"
                }
            },
            {
                "scope": "markup.inserted.diff, meta.diff.header.to-file",
                "settings": {
                    "foreground": "#718C00"
                }
            },
            {
                "scope": "markup.deleted.diff, meta.diff.header.from-file",
                "settings": {
                    "foreground": "#C82829"
                }
            },
            {
                "scope": "meta.diff.header.from-file, meta.diff.header.to-file",
                "settings": {
                    "foreground": "#FFFFFF",
                    "background": "#4271AE"
                }
            },
            {
                "scope": "meta.diff.range",
                "settings": {
                    "foreground": "#3E999F",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.quote",
                "settings": {
                    "foreground": "#FFC58F"
                }
            },
            {
                "scope": "markup.list",
                "settings": {
                    "foreground": "#BBDAFF"
                }
            },
            {
                "scope": "markup.bold, markup.italic",
                "settings": {
                    "foreground": "#FFC58F"
                }
            },
            {
                "scope": "markup.bold",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.italic",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.inline.raw",
                "settings": {
                    "foreground": "#FF9DA4",
                    "fontStyle": ""
                }
            },
            {
                "scope": "markup.heading",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#6796E6"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#CD9731"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#F44747"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#B267E6"
                }
            }
        ]
    },
    ,
    {
        "name": "GitHub Dark",
        "editorBackground": "#24292e",
        "tokenColors": [
            {
                "scope": [
                    "comment",
                    "punctuation.definition.comment",
                    "string.comment"
                ],
                "settings": {
                    "foreground": "#6A737D"
                }
            },
            {
                "scope": [
                    "constant",
                    "entity.name.constant",
                    "variable.other.constant",
                    "variable.language"
                ],
                "settings": {
                    "foreground": "#79B8FF"
                }
            },
            {
                "scope": [
                    "entity",
                    "entity.name"
                ],
                "settings": {
                    "foreground": "#B392F0"
                }
            },
            {
                "scope": "variable.parameter.function",
                "settings": {
                    "foreground": "#E1E4E8"
                }
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#85E89D"
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": "#F97583"
                }
            },
            {
                "scope": [
                    "storage",
                    "storage.type"
                ],
                "settings": {
                    "foreground": "#F97583"
                }
            },
            {
                "scope": [
                    "storage.modifier.package",
                    "storage.modifier.import",
                    "storage.type.java"
                ],
                "settings": {
                    "foreground": "#E1E4E8"
                }
            },
            {
                "scope": [
                    "string",
                    "punctuation.definition.string",
                    "string punctuation.section.embedded source"
                ],
                "settings": {
                    "foreground": "#9ECBFF"
                }
            },
            {
                "scope": "support",
                "settings": {
                    "foreground": "#79B8FF"
                }
            },
            {
                "scope": "meta.property-name",
                "settings": {
                    "foreground": "#79B8FF"
                }
            },
            {
                "scope": "variable",
                "settings": {
                    "foreground": "#FFAB70"
                }
            },
            {
                "scope": "variable.other",
                "settings": {
                    "foreground": "#E1E4E8"
                }
            },
            {
                "scope": "invalid.broken",
                "settings": {
                    "foreground": "#FDAEB7",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "invalid.deprecated",
                "settings": {
                    "foreground": "#FDAEB7",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "invalid.illegal",
                "settings": {
                    "foreground": "#FDAEB7",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "invalid.unimplemented",
                "settings": {
                    "foreground": "#FDAEB7",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "carriage-return",
                "settings": {
                    "foreground": "#24292E",
                    "background": "#F97583",
                    "fontStyle": "italic underline"
                }
            },
            {
                "scope": "message.error",
                "settings": {
                    "foreground": "#FDAEB7"
                }
            },
            {
                "scope": "string source",
                "settings": {
                    "foreground": "#E1E4E8"
                }
            },
            {
                "scope": "string variable",
                "settings": {
                    "foreground": "#79B8FF"
                }
            },
            {
                "scope": [
                    "source.regexp",
                    "string.regexp"
                ],
                "settings": {
                    "foreground": "#DBEDFF"
                }
            },
            {
                "scope": [
                    "string.regexp.character-class",
                    "string.regexp constant.character.escape",
                    "string.regexp source.ruby.embedded",
                    "string.regexp string.regexp.arbitrary-repitition"
                ],
                "settings": {
                    "foreground": "#DBEDFF"
                }
            },
            {
                "scope": "string.regexp constant.character.escape",
                "settings": {
                    "foreground": "#85E89D",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "support.constant",
                "settings": {
                    "foreground": "#79B8FF"
                }
            },
            {
                "scope": "support.variable",
                "settings": {
                    "foreground": "#79B8FF"
                }
            },
            {
                "scope": "meta.module-reference",
                "settings": {
                    "foreground": "#79B8FF"
                }
            },
            {
                "scope": "punctuation.definition.list.begin.markdown",
                "settings": {
                    "foreground": "#FFAB70"
                }
            },
            {
                "scope": [
                    "markup.heading",
                    "markup.heading entity.name"
                ],
                "settings": {
                    "foreground": "#79B8FF",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.quote",
                "settings": {
                    "foreground": "#85E89D"
                }
            },
            {
                "scope": "markup.italic",
                "settings": {
                    "foreground": "#E1E4E8",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.bold",
                "settings": {
                    "foreground": "#E1E4E8",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.raw",
                "settings": {
                    "foreground": "#79B8FF"
                }
            },
            {
                "scope": [
                    "markup.deleted",
                    "meta.diff.header.from-file",
                    "punctuation.definition.deleted"
                ],
                "settings": {
                    "foreground": "#FDAEB7",
                    "background": "#86181D"
                }
            },
            {
                "scope": [
                    "markup.inserted",
                    "meta.diff.header.to-file",
                    "punctuation.definition.inserted"
                ],
                "settings": {
                    "foreground": "#85E89D",
                    "background": "#144620"
                }
            },
            {
                "scope": [
                    "markup.changed",
                    "punctuation.definition.changed"
                ],
                "settings": {
                    "foreground": "#FFAB70",
                    "background": "#C24E00"
                }
            },
            {
                "scope": [
                    "markup.ignored",
                    "markup.untracked"
                ],
                "settings": {
                    "foreground": "#2F363D",
                    "background": "#79B8FF"
                }
            },
            {
                "scope": "meta.diff.range",
                "settings": {
                    "foreground": "#B392F0",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "meta.diff.header",
                "settings": {
                    "foreground": "#79B8FF"
                }
            },
            {
                "scope": "meta.separator",
                "settings": {
                    "foreground": "#79B8FF",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "meta.output",
                "settings": {
                    "foreground": "#79B8FF"
                }
            },
            {
                "scope": [
                    "brackethighlighter.tag",
                    "brackethighlighter.curly",
                    "brackethighlighter.round",
                    "brackethighlighter.square",
                    "brackethighlighter.angle",
                    "brackethighlighter.quote"
                ],
                "settings": {
                    "foreground": "#D1D5DA"
                }
            },
            {
                "scope": "brackethighlighter.unmatched",
                "settings": {
                    "foreground": "#FDAEB7"
                }
            },
            {
                "scope": [
                    "constant.other.reference.link",
                    "string.other.link"
                ],
                "settings": {
                    "foreground": "#DBEDFF",
                    "fontStyle": "underline"
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#6796E6"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#CD9731"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#F44747"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#B267E6"
                }
            }
        ]
    },
    {
        "name": "One Dark Pro",
        "editorBackground": "#282c34",
        "tokenColors": [
            {
                "scope": "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "variable.other.generic-type.haskell",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "storage.type.haskell",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "support.variable.magic.python",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "variable.parameter.function.language.special.self.python",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "storage.modifier.lifetime.rust",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "support.function.std.rust",
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": "entity.name.lifetime.rust",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "variable.language.rust",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "support.constant.edge",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "constant.other.character-class.regexp",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "keyword.operator.quantifier.regexp",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "punctuation.definition.string.begin,punctuation.definition.string.end",
                "settings": {
                    "foreground": "#98C379"
                }
            },
            {
                "scope": "variable.parameter.function",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "comment markup.link",
                "settings": {
                    "foreground": "#5C6370"
                }
            },
            {
                "scope": "markup.changed.diff",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": "markup.inserted.diff",
                "settings": {
                    "foreground": "#98C379"
                }
            },
            {
                "scope": "markup.deleted.diff",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "meta.function.c,meta.function.cpp",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "punctuation.separator.key-value",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "keyword.operator.expression.import",
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": "support.constant.math",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "support.constant.property.math",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "variable.other.constant",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": [
                    "storage.type.annotation.java",
                    "storage.type.object.array.java"
                ],
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "source.java",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "meta.method.java",
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "keyword.operator.instanceof.java",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "meta.definition.variable.name.java",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "keyword.operator.logical",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "keyword.operator.bitwise",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "keyword.operator.channel",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "support.constant.property-value.scss,support.constant.property-value.css",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "punctuation.separator.list.comma.css",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "support.constant.color.w3c-standard-color-name.css",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "support.type.vendored.property-name.css",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "support.module.node,support.type.object.module,support.module.node",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "entity.name.type.module",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "support.constant.json",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": [
                    "keyword.operator.expression.instanceof",
                    "keyword.operator.new",
                    "keyword.operator.ternary",
                    "keyword.operator.optional",
                    "keyword.operator.expression.keyof"
                ],
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "support.type.object.console",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "support.variable.property.process",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "entity.name.function,support.function.console",
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": "keyword.operator.misc.rust",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "keyword.operator.sigil.rust",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "keyword.operator.delete",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "support.type.object.dom",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "support.variable.dom,support.variable.property.dom",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "punctuation.separator.delimiter",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "punctuation.separator.c,punctuation.separator.cpp",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "variable.parameter.function.language.python",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "support.type.python",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "keyword.operator.logical.python",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "variable.parameter.function.python",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "meta.function-call.generic.python",
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": "constant.character.format.placeholder.other.python",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "keyword.operator",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "keyword.operator.assignment.compound",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "entity.name.namespace",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "variable",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "variable.c",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "variable.language",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "token.variable.parameter.java",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "import.storage.java",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "token.package.keyword",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "token.package",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": [
                    "entity.name.function",
                    "meta.require",
                    "support.function.any-method",
                    "variable.function"
                ],
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": "entity.name.type.namespace",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "support.class, entity.name.type.class",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "entity.name.class.identifier.namespace.type",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": [
                    "entity.name.class",
                    "variable.other.class.js",
                    "variable.other.class.ts"
                ],
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "variable.other.class.php",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "entity.name.type",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "keyword.control",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "control.elements, keyword.operator.less",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "keyword.other.special-method",
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": "storage",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "token.storage",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "token.storage.type.java",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "support.function",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "support.type.property-name",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "support.constant.property-value",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "support.constant.font-name",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "meta.tag",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "string",
                "settings": {
                    "foreground": "#98C379"
                }
            },
            {
                "scope": "entity.other.inherited-class",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "constant.other.symbol",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "constant.numeric",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "constant",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "punctuation.definition.constant",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "entity.other.attribute-name.id",
                "settings": {
                    "foreground": "#61AFEF",
                    "fontStyle": "normal"
                }
            },
            {
                "scope": "entity.other.attribute-name.class.css",
                "settings": {
                    "foreground": "#D19A66",
                    "fontStyle": "normal"
                }
            },
            {
                "scope": "meta.selector",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "markup.heading",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "markup.heading punctuation.definition.heading, entity.name.section",
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": "keyword.other.unit",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "markup.bold,todo.bold",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "punctuation.definition.bold",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "markup.italic, punctuation.definition.italic,todo.emphasis",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "emphasis md",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "entity.name.section.markdown",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "punctuation.definition.heading.markdown",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "punctuation.definition.list.begin.markdown",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "markup.heading.setext",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "punctuation.definition.bold.markdown",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "markup.inline.raw.markdown",
                "settings": {
                    "foreground": "#98C379"
                }
            },
            {
                "scope": "markup.inline.raw.string.markdown",
                "settings": {
                    "foreground": "#98C379"
                }
            },
            {
                "scope": "punctuation.definition.list.markdown",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": [
                    "punctuation.definition.string.begin.markdown",
                    "punctuation.definition.string.end.markdown",
                    "punctuation.definition.metadata.markdown"
                ],
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": [
                    "beginning.punctuation.definition.list.markdown"
                ],
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "punctuation.definition.metadata.markdown",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "string.other.link.title.markdown,string.other.link.description.markdown",
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": "string.regexp",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "constant.character.escape",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "punctuation.section.embedded, variable.interpolation",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "punctuation.section.embedded.begin,punctuation.section.embedded.end",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "invalid.illegal",
                "settings": {
                    "foreground": "#FFFFFF"
                }
            },
            {
                "scope": "invalid.illegal.bad-ampersand.html",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "invalid.broken",
                "settings": {
                    "foreground": "#FFFFFF"
                }
            },
            {
                "scope": "invalid.deprecated",
                "settings": {
                    "foreground": "#FFFFFF"
                }
            },
            {
                "scope": "invalid.unimplemented",
                "settings": {
                    "foreground": "#FFFFFF"
                }
            },
            {
                "scope": "source.json meta.structure.dictionary.json > string.quoted.json",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
                "settings": {
                    "foreground": "#98C379"
                }
            },
            {
                "scope": "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "support.type.property-name.json",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "support.type.property-name.json punctuation",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "keyword.operator.error-control.php",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "keyword.operator.type.php",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "punctuation.section.array.begin.php",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "punctuation.section.array.end.php",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "invalid.illegal.non-null-typehinted.php",
                "settings": {
                    "foreground": "#F44747"
                }
            },
            {
                "scope": "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "support.constant.core.rust",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "entity.name.goto-label.php,support.other.php",
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "keyword.operator.regexp.php",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "keyword.operator.comparison.php",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": "meta.function.decorator.python",
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": "support.token.decorator.python,meta.function.decorator.identifier.python",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "function.parameter",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "function.brace",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "function.parameter.ruby, function.parameter.cs",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "constant.language.symbol.ruby",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "rgb-value",
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": "inline-color-decoration rgb-value",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "less rgb-value",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "selector.sass",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "block.scope.end,block.scope.begin",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "storage.type.cs",
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": "entity.name.variable.local.cs",
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#F44747"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": [
                    "punctuation.definition.template-expression.begin",
                    "punctuation.definition.template-expression.end",
                    "punctuation.section.embedded"
                ],
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": [
                    "meta.template.expression"
                ],
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": [
                    "keyword.operator.module"
                ],
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": [
                    "support.type.type.flowtype"
                ],
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": [
                    "support.type.primitive"
                ],
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": [
                    "meta.property.object"
                ],
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": [
                    "variable.parameter.function.js"
                ],
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": [
                    "keyword.other.template.begin"
                ],
                "settings": {
                    "foreground": "#98C379"
                }
            },
            {
                "scope": [
                    "keyword.other.template.end"
                ],
                "settings": {
                    "foreground": "#98C379"
                }
            },
            {
                "scope": [
                    "keyword.other.substitution.begin"
                ],
                "settings": {
                    "foreground": "#98C379"
                }
            },
            {
                "scope": [
                    "keyword.other.substitution.end"
                ],
                "settings": {
                    "foreground": "#98C379"
                }
            },
            {
                "scope": [
                    "keyword.operator.assignment"
                ],
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": [
                    "keyword.operator.assignment.go",
                    "keyword.operator.address.go"
                ],
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": [
                    "entity.name.package.go"
                ],
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": [
                    "support.type.prelude.elm"
                ],
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": [
                    "support.constant.elm"
                ],
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": [
                    "punctuation.quasi.element"
                ],
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": [
                    "constant.character.entity"
                ],
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": [
                    "entity.other.attribute-name.pseudo-element",
                    "entity.other.attribute-name.pseudo-class"
                ],
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": [
                    "entity.global.clojure"
                ],
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": [
                    "meta.symbol.clojure"
                ],
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": [
                    "constant.keyword.clojure"
                ],
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": [
                    "meta.arguments.coffee",
                    "variable.parameter.function.coffee"
                ],
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": [
                    "source.ini"
                ],
                "settings": {
                    "foreground": "#98C379"
                }
            },
            {
                "scope": [
                    "meta.scope.prerequisites.makefile"
                ],
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": [
                    "source.makefile"
                ],
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": [
                    "storage.modifier.import.groovy"
                ],
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": [
                    "meta.method.groovy"
                ],
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": [
                    "meta.definition.variable.name.groovy"
                ],
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": [
                    "meta.definition.class.inherited.classes.groovy"
                ],
                "settings": {
                    "foreground": "#98C379"
                }
            },
            {
                "scope": [
                    "support.variable.semantic.hlsl"
                ],
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": [
                    "support.type.texture.hlsl",
                    "support.type.sampler.hlsl",
                    "support.type.object.hlsl",
                    "support.type.object.rw.hlsl",
                    "support.type.fx.hlsl",
                    "support.type.object.hlsl"
                ],
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": [
                    "text.variable",
                    "text.bracketed"
                ],
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": [
                    "support.type.swift",
                    "support.type.vb.asp"
                ],
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": [
                    "entity.name.function.xi"
                ],
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": [
                    "entity.name.class.xi"
                ],
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": [
                    "constant.character.character-class.regexp.xi"
                ],
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": [
                    "constant.regexp.xi"
                ],
                "settings": {
                    "foreground": "#C678DD"
                }
            },
            {
                "scope": [
                    "keyword.control.xi"
                ],
                "settings": {
                    "foreground": "#56B6C2"
                }
            },
            {
                "scope": [
                    "invalid.xi"
                ],
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": [
                    "beginning.punctuation.definition.quote.markdown.xi"
                ],
                "settings": {
                    "foreground": "#98C379"
                }
            },
            {
                "scope": [
                    "beginning.punctuation.definition.list.markdown.xi"
                ],
                "settings": {
                    "foreground": "#7F848E"
                }
            },
            {
                "scope": [
                    "constant.character.xi"
                ],
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": [
                    "accent.xi"
                ],
                "settings": {
                    "foreground": "#61AFEF"
                }
            },
            {
                "scope": [
                    "wikiword.xi"
                ],
                "settings": {
                    "foreground": "#D19A66"
                }
            },
            {
                "scope": [
                    "constant.other.color.rgb-value.xi"
                ],
                "settings": {
                    "foreground": "#FFFFFF"
                }
            },
            {
                "scope": [
                    "punctuation.definition.tag.xi"
                ],
                "settings": {
                    "foreground": "#5C6370"
                }
            },
            {
                "scope": [
                    "entity.name.label.cs",
                    "entity.name.scope-resolution.function.call",
                    "entity.name.scope-resolution.function.definition"
                ],
                "settings": {
                    "foreground": "#E5C07B"
                }
            },
            {
                "scope": [
                    "entity.name.label.cs",
                    "markup.heading.setext.1.markdown",
                    "markup.heading.setext.2.markdown"
                ],
                "settings": {
                    "foreground": "#E06C75"
                }
            },
            {
                "scope": [
                    " meta.brace.square"
                ],
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "comment, punctuation.definition.comment",
                "settings": {
                    "foreground": "#7F848E",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.quote.markdown",
                "settings": {
                    "foreground": "#5C6370"
                }
            },
            {
                "scope": "punctuation.definition.block.sequence.item.yaml",
                "settings": {
                    "foreground": "#ABB2BF"
                }
            },
            {
                "scope": "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "comment.line.double-slash,comment.block.documentation",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "keyword.control.import.python,keyword.control.flow.python",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.italic.markdown",
                "settings": {
                    "fontStyle": "italic"
                }
            }
        ]
    },
    {
        "name": "Default High Contrast",
        "editorBackground": "#000000",
        "tokenColors": [
            {
                "scope": [
                    "meta.embedded",
                    "source.groovy.embedded"
                ],
                "settings": {
                    "foreground": "#FFFFFF",
                    "background": "#000000"
                }
            },
            {
                "scope": "emphasis",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "strong",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "meta.diff.header",
                "settings": {
                    "foreground": "#000080"
                }
            },
            {
                "scope": "comment",
                "settings": {
                    "foreground": "#7CA668"
                }
            },
            {
                "scope": "constant.language",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": [
                    "constant.numeric",
                    "constant.other.color.rgb-value",
                    "constant.other.rgb-value",
                    "support.constant.color"
                ],
                "settings": {
                    "foreground": "#B5CEA8"
                }
            },
            {
                "scope": "constant.regexp",
                "settings": {
                    "foreground": "#B46695"
                }
            },
            {
                "scope": "constant.character",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "entity.name.tag.css",
                "settings": {
                    "foreground": "#D7BA7D"
                }
            },
            {
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": "#9CDCFE"
                }
            },
            {
                "scope": [
                    "entity.other.attribute-name.class.css",
                    "entity.other.attribute-name.class.mixin.css",
                    "entity.other.attribute-name.id.css",
                    "entity.other.attribute-name.parent-selector.css",
                    "entity.other.attribute-name.pseudo-class.css",
                    "entity.other.attribute-name.pseudo-element.css",
                    "source.css.less entity.other.attribute-name.id",
                    "entity.other.attribute-name.attribute.scss",
                    "entity.other.attribute-name.scss"
                ],
                "settings": {
                    "foreground": "#D7BA7D"
                }
            },
            {
                "scope": "invalid",
                "settings": {
                    "foreground": "#F44747"
                }
            },
            {
                "scope": "markup.underline",
                "settings": {
                    "fontStyle": "underline"
                }
            },
            {
                "scope": "markup.bold",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.heading",
                "settings": {
                    "foreground": "#6796E6",
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.italic",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.inserted",
                "settings": {
                    "foreground": "#B5CEA8"
                }
            },
            {
                "scope": "markup.deleted",
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "markup.changed",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": [
                    "punctuation.definition.tag"
                ],
                "settings": {
                    "foreground": "#808080"
                }
            },
            {
                "scope": "meta.preprocessor",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "meta.preprocessor.string",
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "meta.preprocessor.numeric",
                "settings": {
                    "foreground": "#B5CEA8"
                }
            },
            {
                "scope": "meta.structure.dictionary.key.python",
                "settings": {
                    "foreground": "#9CDCFE"
                }
            },
            {
                "scope": "storage",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "storage.type",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "storage.modifier",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "string",
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "string.tag",
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "string.value",
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "string.regexp",
                "settings": {
                    "foreground": "#D16969"
                }
            },
            {
                "scope": [
                    "punctuation.definition.template-expression.begin",
                    "punctuation.definition.template-expression.end",
                    "punctuation.section.embedded"
                ],
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": [
                    "meta.template.expression"
                ],
                "settings": {
                    "foreground": "#FFFFFF"
                }
            },
            {
                "scope": [
                    "support.type.vendored.property-name",
                    "support.type.property-name",
                    "variable.css",
                    "variable.scss",
                    "variable.other.less",
                    "source.coffee.embedded"
                ],
                "settings": {
                    "foreground": "#D4D4D4"
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "keyword.control",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "keyword.operator",
                "settings": {
                    "foreground": "#D4D4D4"
                }
            },
            {
                "scope": [
                    "keyword.operator.new",
                    "keyword.operator.expression",
                    "keyword.operator.cast",
                    "keyword.operator.sizeof",
                    "keyword.operator.logical.python"
                ],
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": "keyword.other.unit",
                "settings": {
                    "foreground": "#B5CEA8"
                }
            },
            {
                "scope": "support.function.git-rebase",
                "settings": {
                    "foreground": "#D4D4D4"
                }
            },
            {
                "scope": "constant.sha.git-rebase",
                "settings": {
                    "foreground": "#B5CEA8"
                }
            },
            {
                "scope": [
                    "storage.modifier.import.java",
                    "variable.language.wildcard.java",
                    "storage.modifier.package.java"
                ],
                "settings": {
                    "foreground": "#D4D4D4"
                }
            },
            {
                "scope": "variable.language.this",
                "settings": {
                    "foreground": "#569CD6"
                }
            },
            {
                "scope": [
                    "entity.name.function",
                    "support.function",
                    "support.constant.handlebars",
                    "source.powershell variable.other.member"
                ],
                "settings": {
                    "foreground": "#DCDCAA"
                }
            },
            {
                "scope": [
                    "meta.return-type",
                    "support.class",
                    "support.type",
                    "entity.name.type",
                    "entity.name.namespace",
                    "entity.name.scope-resolution",
                    "entity.name.class",
                    "storage.type.cs",
                    "storage.type.generic.cs",
                    "storage.type.modifier.cs",
                    "storage.type.variable.cs",
                    "storage.type.annotation.java",
                    "storage.type.generic.java",
                    "storage.type.java",
                    "storage.type.object.array.java",
                    "storage.type.primitive.array.java",
                    "storage.type.primitive.java",
                    "storage.type.token.java",
                    "storage.type.groovy",
                    "storage.type.annotation.groovy",
                    "storage.type.parameters.groovy",
                    "storage.type.generic.groovy",
                    "storage.type.object.array.groovy",
                    "storage.type.primitive.array.groovy",
                    "storage.type.primitive.groovy"
                ],
                "settings": {
                    "foreground": "#4EC9B0"
                }
            },
            {
                "scope": [
                    "meta.type.cast.expr",
                    "meta.type.new.expr",
                    "support.constant.math",
                    "support.constant.dom",
                    "support.constant.json",
                    "entity.other.inherited-class"
                ],
                "settings": {
                    "foreground": "#4EC9B0"
                }
            },
            {
                "scope": [
                    "keyword.control",
                    "source.cpp keyword.operator.new",
                    "source.cpp keyword.operator.delete",
                    "keyword.other.using",
                    "keyword.other.operator"
                ],
                "settings": {
                    "foreground": "#C586C0"
                }
            },
            {
                "scope": [
                    "variable",
                    "meta.definition.variable.name",
                    "support.variable"
                ],
                "settings": {
                    "foreground": "#9CDCFE"
                }
            },
            {
                "scope": [
                    "meta.object-literal.key"
                ],
                "settings": {
                    "foreground": "#9CDCFE"
                }
            },
            {
                "scope": [
                    "support.constant.property-value",
                    "support.constant.font-name",
                    "support.constant.media-type",
                    "support.constant.media",
                    "constant.other.color.rgb-value",
                    "constant.other.rgb-value",
                    "support.constant.color"
                ],
                "settings": {
                    "foreground": "#CE9178"
                }
            },
            {
                "scope": "meta.resultLinePrefix.contextLinePrefix.search",
                "settings": {
                    "foreground": "#CBEDCB"
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": "#6796E6"
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": "#008000"
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": "#FF0000"
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": "#B267E6"
                }
            }
        ]
    }
];