import * as vscode from 'vscode';

// 注册命令的函数
export function registerShowMessageCommand(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('extension.showMessage', () => {
        vscode.window.showInformationMessage('你好!');
    });

    context.subscriptions.push(disposable);
}
