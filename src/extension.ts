import * as vscode from 'vscode';
import { CodeHoverProvider } from './providers/hoverProvider';
// 注册其他命令
import { registerCommands } from './commands';
import { registerShowMessageCommand } from './commands/showMessage';
import { registerMyView } from './views/myView';

export function activate(context: vscode.ExtensionContext) {
	// 注册悬停提供器
	console.log('激活 activated');

	// context.subscriptions.push(provider);
	// 注册 Hover 提供器
	// context.subscriptions.push(
	// 	vscode.languages.registerHoverProvider({ scheme: 'file', language: '*' }, new CodeHoverProvider())
	// );

	const hoverProvider = new CodeHoverProvider();
	// 限定文件类型生效
	context.subscriptions.push(
		vscode.languages.registerHoverProvider('javascript', hoverProvider),
		vscode.languages.registerHoverProvider('typescript', hoverProvider),
		vscode.languages.registerHoverProvider('vue', hoverProvider),
		vscode.languages.registerHoverProvider('javascriptreact', hoverProvider),
		vscode.languages.registerHoverProvider('html', hoverProvider),
	);
	console.log('Hover provider registered');
	// 注册命令
	registerCommands(context);
	registerShowMessageCommand(context);

	// 注册视图
	registerMyView(context);
}

export function deactivate() { }
