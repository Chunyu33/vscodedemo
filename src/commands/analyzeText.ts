import * as vscode from 'vscode';
// import { analyzeText } from '../utils/apiClient';

export const analyzeTextCommand = async () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        // 获取当前选中的文本  并弹出
        const text = editor.document.getText(editor.selection);
        // const analysisResult = await analyzeText(text);
        const analysisResult = text;
        vscode.window.showInformationMessage(`选中的文本: ${analysisResult}`);
    }
};
