import * as vscode from 'vscode';
// import { analyzeText } from '../utils/apiClient';

export class CodeHoverProvider implements vscode.HoverProvider {
    async provideHover(document: vscode.TextDocument, position: vscode.Position): Promise<vscode.Hover | null> {
        const range = document.getWordRangeAtPosition(position, /["'`][^"'`]*["'`]/);
        if (range) {
            const text = document.getText(range);
            // TODO: 如果有api请求
            // const analysisResult = await analyzeText(text);
            // return new vscode.Hover(`Analysis result: **${analysisResult}**`);

            // 去掉引号
            const extractedText = text.substring(1, text.length - 1);

            // 右下角弹窗显示文本内容
            // vscode.window.showInformationMessage(`hover的文字是: ${extractedText}`);
            return new vscode.Hover(`取到的字符串: **${extractedText}**`);
        }
        return null;
    }
}
