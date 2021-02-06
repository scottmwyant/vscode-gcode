<br/><p align="center"><img src="https://user-images.githubusercontent.com/29161635/93551441-de870a00-f93b-11ea-82a3-48c360d2f732.png" alt="icon" width="200px"></p><br/>

# [G-Code for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=vscode-gcode.gcode)

**The premier Visual Studio Code extension for G-Code**

<br>

<!--Badges from https://shields.io-->
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/vscode-gcode.gcode) ![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/vscode-gcode.gcode?color=%23f5f5f5&logo=installs) ![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/vscode-gcode.gcode)

## ✨ Features

### Adaptive Syntax Highlighting

**<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> `>G-Code: Adapt to current theme`**

<p align="center"><img src="https://user-images.githubusercontent.com/29161635/96535493-f49c2900-125f-11eb-9e03-b395d231b82d.gif" alt="icon" height="400px" width="500px"></p>

CAD/CAM packages typically show the X-axis in red, the Y-axis in green, and the Z-Axis in blue. The G-Code extension follows that pattern.  The adaptive syntax feature allows you to choose any of the supproted themes and get that familiar colorization.  G-Code supports all of the themes that ship with VS Code, plus the [GitHub theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme) and [OneDark-Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme).

- When VS Code starts and the extension activates, it will check the active theme and if the extension's syntax highlighting isn't already tailored to that theme, you will be prompted to allow the extension to rewrite the files that style the code.

- Should you miss the prompt, you can use the `G-Code: Adapt to current theme` command to force the extension to adapt to the theme you're using (as long as it's supported).


### On-Hover Definitions

<p align="center"><img src="https://user-images.githubusercontent.com/29161635/98761008-7cc6a780-23a2-11eb-819c-2f8287e03320.gif" alt="icon" height="400px" width="500px"></p>

You no longer need to memorize dozens of obscure G and M codes!  The G-Code extension includes a mechanism for you to *provide your own definitions* for any number of codes.  Definitions can even be provided *inline* with the code.

#### Using VS Code settings

Share definitions across multiple programs using VS Code's settings files.  Take a look at [VS Code Docs - User and Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings) if you're not familiar VS Code configuration.

You need to add a `gcode.definitions` key to your settings.json file (user settings, workspace settings, or both).  Here's an example of what it might look like:

```json
"gcode.definitions": {
    "G90": "Positioning, absolute (modal)",
    "G91": "Positioning, relative (modal)",
    "M8": "Coolant On, External to Spindle",
    "M9": "Coolant Off",
    "M51": "Coolant On, Internal to Spindle",
}
```

#### Using inline definitions

An inline definition is a comment in your code that matches the following format.  An inline definition has a `code` and a `meaning` seperated by `:` or `=`.  There may be whitespace on either side of the seperator.  The text on the right side of the seperator will show up as hover text in that file.  See some examples of inline definitions below.  

Note that after you add inline definitions to a file, they won't show up in a hover until the file is saved.  This prevents the extension from needing to continuously scan your file for definitions.

Examples of inline definitions:

```
(G4:DWELL)
(G4: THIS IS A DWELL)
(G4 = DWELL, USE P TO SPECIFY TIME)
```

#### A word on leading zeros

When providing definitions, regardless of which method you use, don't use leading zeros. Provide a definition for `G1` not `G01`.  When you hover over a code like `G01` the extension ignores the leading zero and returns a definition for `G1`.

### Line Numbering

**<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> `>G-Code: Line Numbers (Add/Update)`**

**<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> `>G-Code: Line Numbers (Remove)`**

<p align="center"><img src="https://user-images.githubusercontent.com/29161635/99023619-f392aa80-2532-11eb-8328-2f594652a3c4.gif" alt="icon" height="400px" width="500px"></p>

Addding, updating, or removing line numbers are not tasks you should ever need to do manually.  A robust G-Code editor should make this easy as possible so you can focus on more important things.  The G-Code extension provides commands to carry out these tasks on the active file.  Don't forget that you can map commands to a keyboard shortcut of your choice.  See [Key Bindings for Visual Studio Code](https://code.visualstudio.com/docs/getstarted/keybindings).

### Toggle Comments

**<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> `>G-Code: Toggle Comment`**

<p align="center"><img src="https://user-images.githubusercontent.com/29161635/99023050-cf829980-2531-11eb-92be-b4516f3b4e95.gif" alt="icon" height="400px" width="500px"></p>

VS Code ships with the ability to toggle comments.  The built-in feature works by modifying one or more characters at the beginning of each selected line.  Since it only affects the beginning of the line, it doesn't work for G-Code comments that need to be (in parentheses).  The G-Code extension provides a command that will toggle parentheses at the start and end of each selected line.  

## 📓 Release Notes

Documentation pertaining to a specific release can be found under [releases](https://github.com/scottmwyant/vscode-gcode/releases), or in the project's [changelog](./CHANGELOG.md).

## 💻 Developers

### VS Code Token Styles

Early on I realized I needed a way to see how each VS Code theme styles the various language tokens.  My approach was to get data for each theme by using the `Developer: Generate Color Theme From Current Settings` command then use that data to render HTML.  Since that work may be intersting outside of this project, I chose to save it in [this gist](https://gist.github.com/scottmwyant/2dc64ff4315ba9e2c374fb329b399820).

### Automated Deployment

Maintainers, here's how to publish the extension to the marketplace:

 1. Put the new version number in [package.json](./package.json).  The version number must be higher than the version shown in the [marketplace](https://marketplace.visualstudio.com/items?itemName=vscode-gcode.gcode).  Reference [semver.org](https://semver.org/).
 2. Create an entry in the [changelog](./changelog.md).  Reference [keepachangelog.com](https://keepachangelog.com/en/1.0.0/).
 3. Push a new tag with the version number. The tag must start with a 'v', like this: `v1.2.3`.

As long as these requirements are met, the CD workflow should go smoothly.  A release will be created, and the new version of the extension will be published to the marketplace (see [./github/workflows](./.github/workflows)).
