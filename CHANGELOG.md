# Change Log

All notable changes will be documented in this file.

Contributors: This document uses style guidelines from [Keep A Changelog](http://keepachangelog.com/).

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