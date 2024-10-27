import * as vscode from 'vscode';

// 创建树形项目类
class MyTreeItem extends vscode.TreeItem {
    constructor(label: string) {
        super(label);
        this.command = {
            command: 'extension.showMessage',
            title: '标题'
        };
    }
}

// 注册视图
export function registerMyView(context: vscode.ExtensionContext) {
    const treeDataProvider = new class implements vscode.TreeDataProvider<MyTreeItem> {
        getTreeItem(element: MyTreeItem): vscode.TreeItem {
            return element;
        }

        getChildren(): MyTreeItem[] {
            return [
                new MyTreeItem('Menu 1', {
                    command: 'extension.showMessage',
                    title: 'Show Message for Menu 1'
                }),
                new MyTreeItem('Menu 2', {
                    command: 'extension.showMessage',
                    title: 'Show Message for Menu 2'
                }),
                new MyTreeItem('Menu 3', {
                    command: 'extension.showMessage',
                    title: 'Show Message for Menu 3'
                })
            ];
        }
    };

    vscode.window.createTreeView('myExtension.myView', { treeDataProvider });
}
