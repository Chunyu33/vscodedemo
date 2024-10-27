import * as vscode from 'vscode';
import { analyzeTextCommand } from './analyzeText';

export function registerCommands(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        // 注册命令
        vscode.commands.registerCommand('extension.analyzeText', analyzeTextCommand)
    );
}
