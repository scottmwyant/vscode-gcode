import * as vscode from 'vscode';
import { addLineNumbers, removeLineNumbers } from './lineNumbers';
import { toggleComment } from './toggleComment';

// Create an array where each item  is a function that returns 'void'.
// Since these functions will be registered as commands, the names of the
// functions must match what is defined in the project's package.json.
export const commands: (() => void)[] = [addLineNumbers, removeLineNumbers, toggleComment];
