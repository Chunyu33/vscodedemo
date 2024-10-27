"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode6 = __toESM(require("vscode"));

// src/providers/hoverProvider.ts
var vscode = __toESM(require("vscode"));
var CodeHoverProvider = class {
  async provideHover(document, position) {
    const range = document.getWordRangeAtPosition(position, /["'`][^"'`]*["'`]/);
    if (range) {
      const text = document.getText(range);
      const extractedText = text.substring(1, text.length - 1);
      return new vscode.Hover(`\u53D6\u5230\u7684\u5B57\u7B26\u4E32: **${extractedText}**`);
    }
    return null;
  }
};

// src/commands/index.ts
var vscode3 = __toESM(require("vscode"));

// src/commands/analyzeText.ts
var vscode2 = __toESM(require("vscode"));
var analyzeTextCommand = async () => {
  const editor = vscode2.window.activeTextEditor;
  if (editor) {
    const text = editor.document.getText(editor.selection);
    const analysisResult = text;
    vscode2.window.showInformationMessage(`\u9009\u4E2D\u7684\u6587\u672C: ${analysisResult}`);
  }
};

// src/commands/index.ts
function registerCommands(context) {
  context.subscriptions.push(
    // 注册命令
    vscode3.commands.registerCommand("extension.analyzeText", analyzeTextCommand)
  );
}

// src/commands/showMessage.ts
var vscode4 = __toESM(require("vscode"));
function registerShowMessageCommand(context) {
  const disposable = vscode4.commands.registerCommand("extension.showMessage", () => {
    vscode4.window.showInformationMessage("\u4F60\u597D!");
  });
  context.subscriptions.push(disposable);
}

// src/views/myView.ts
var vscode5 = __toESM(require("vscode"));
var MyTreeItem = class extends vscode5.TreeItem {
  constructor(label) {
    super(label);
    this.command = {
      command: "extension.showMessage",
      title: "\u6807\u9898"
    };
  }
};
function registerMyView(context) {
  const treeDataProvider = new class {
    getTreeItem(element) {
      return element;
    }
    getChildren() {
      return [
        new MyTreeItem("Menu 1", {
          command: "extension.showMessage",
          title: "Show Message for Menu 1"
        }),
        new MyTreeItem("Menu 2", {
          command: "extension.showMessage",
          title: "Show Message for Menu 2"
        }),
        new MyTreeItem("Menu 3", {
          command: "extension.showMessage",
          title: "Show Message for Menu 3"
        })
      ];
    }
  }();
  vscode5.window.createTreeView("myExtension.myView", { treeDataProvider });
}

// src/extension.ts
function activate(context) {
  console.log("\u6FC0\u6D3B activated");
  const hoverProvider = new CodeHoverProvider();
  context.subscriptions.push(
    vscode6.languages.registerHoverProvider("javascript", hoverProvider),
    vscode6.languages.registerHoverProvider("typescript", hoverProvider),
    vscode6.languages.registerHoverProvider("vue", hoverProvider),
    vscode6.languages.registerHoverProvider("jsx", hoverProvider),
    vscode6.languages.registerHoverProvider("html", hoverProvider)
  );
  console.log("Hover provider registered");
  registerCommands(context);
  registerShowMessageCommand(context);
  registerMyView(context);
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map
