# User Guide

This page is primarially for end users.  Developers looking to contribute to the project should also check out the readme file in the [repository]((https://github.com/scottmwyant/gcode)).

## About

[G-Code](https://en.wikipedia.org/wiki/G-code) is used to program all sorts of CNC equipment, from production metal cutting tools to 3D printers, to routers and more.  This extension aims to bring full support for the G-Code language to the Visual Studio Code editor.

# Features

**Syntax Colorization**

G-Code provides an original grammar so your code can be tokenized and styled. 

[ insert images here ]

**Adaptive Syntax Colorization**

The G-code extension is opinionated about how the code is colorized.  We acknowledge that most CAD / CAM systems represent the X, Y, and Z-axis with red, green, and blue respectively.  We want that same pattern to show up in the code.  Adaptive syntax colorization allows the primary axes to receive red/green/blue colorization in all of the themes that ship with VS Code and even a few third party themes.

This feature gives users the freedom to use their own theme and always see X in red, Y in green, and Z in blue.

1. Set your theme
    
    <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>p</kbd> `Preferences: Color Theme`

2. Update G-Code colorization
    
    <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>p</kbd> `G-Code: Adapt to Current Theme`

**Show Definition on Hover**

One of the most challenging aspects of this language is that is has so many 'dialects'. A given code can have different meaning on different controllers, and not all controllers even support  the same lexicon.  The G-Code extension provides a mechanism for you to define the codes that are relavent to your machine, then automatically have those definitions appear in a tool-tip when you hover over a section of code.  Default definitions are provided for some codes.  The list of default definitions will likely be expanded over time.

Code definitions can be provided in two ways:

- In vscode settings - Settings in VS Code are applied by reading a series of configuration files.  Read up if you're not familiar with configuring VS Code.  See [VS Code Docs: lsUser and Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings).

- In comments ("in-line definitions") - Quick and dirty compared to using VS Code config files.  They also provide very granular control over the definitions.  Note that a definition given in a comment will only apply to that file.  You should be providing definitions in VS Code config files for codes that appear in multiple files.

**Toggle Comment Command**

**Auto Line Numbering Commands**

# Extension Settings

This extension contributes the following settings:

* `gcode.definitions`

    Definitions for G and M codes - This key is where you can provide definitions for all of your controller's G & M codes.  We also support inline definitions which means you can give meaning to variables with a comment in your code and see that comment when you hover over the variable anywhere in the file.

# Release Notes

Users appreciate release notes as you update your extension.

## 0.1.0 ~ COMING SOON ~

Initial release.
