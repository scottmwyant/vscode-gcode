# Change Log

All notable changes will be documented in this file.

Contributors: This document uses style guidelines from [Keep A Changelog](http://keepachangelog.com/).

## [v0.2.1] - 2021-07-25

### Changed

- More consistent colorization.  Comments and variables are tokenized before generic alpha-numeric addresses.

## [v0.2.0] - 2021-05-09

### Added

- The `G-Code: Show the dictionary` command has been added.  This command opens a webview that shows all the 'words' in the dictionary and their definitions.  The webview is a static html page, the same kind of window used to preview a markdown file.  In the future we may consider denoting the source of the definition as well (config file vs inline). 

### Changed

- The active document is now being scanned for inline comments on file save event in addition to the activation event that was used initially.  In the future, the listener for the document activation event may be removed, but that remains unchanged for now.

## [v0.1.3] - 2021-02-06

### Changed

- Add `.ssb` and `.lib` to the list of file extensions that activate the extension.

- Apply XYZ colors to ABC, IJK, and UVW addresses, remove keyword theme color from being applied to code dealing with sub-routines.

- Update inline definitions on save, rather than on document activate.

## [v0.1.2] - 2021-02-03

### Changed

- The syntax colorization that ships with the extension is now set to match VS Code's default theme.  Previously, the extension installed with the (unreasonable) expectation that the 'One Dark Pro' theme was being used.

- Fixed a bug that would prevent a negative value with no number left of the decimal from being recognized as an axis address.  Now, words like `X-.3536` won't be overlooked.

- The documentation provided with the extension, README.md, references a command `G-Code: Adapt to Current Theme`. The functionality described in the readme was intact but under a command with a different name. The command was renamed to match the documentation. 

## [v0.1.1] - 2020-11-13

### Chagned

The list of file extensions should have been expanded before the last release.  See complete list of supported file extensions in package.json at the root of the repository.

## [v0.1.0] - 2020-11-13

Merge dev branch into master.  This is the initial release.  Previous version numbers were simply used to test the GitHub Actions continuous deployment workflow.  Since this is the intial release, I won't go into much detail here, I'll just list the featuers and put the details the project's README.

#### Added

- Adaptive Syntax Highlighting
- Show Definition On Hover
- Line Numbering Commands
- Toggle Comment Command

### Changed

- The CD workflow has been merged into the dev branch.  The workflow is now triggered by new tag being pushed.  The release created by the workflow will be published (no longer be left as a draft).

- Updated package.json.  The extension is now flagged as a "preview".  I don't intend to keep this flag for long.  Added keys to quiet complaints from `npm` and `vsce`.

## [v0.0.3] - 2020-11-06

### Changed

- CI workflow will now publish to the marketplace.

## [v0.0.2] - 2020-11-04

### Changed

- CI workflow is now triggered by a push to the `CI` branch.  This is for testing the publishing workflow.

## [v0.0.1] - 2020-11-04

### Added

- GitHub actions workflow to automate publishing to the marketplace.