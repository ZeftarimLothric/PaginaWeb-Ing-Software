import React, { useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";
import * as monaco from "monaco-editor";

const SimpleEditor = () => {
  useEffect(() => {
    const javaCompletionProvider = {
      provideCompletionItems: () => {
        return {
          suggestions: [
            {
              label: "System.out.println",
              kind: monaco.languages.CompletionItemKind.Method,
              insertText: "System.out.println(${1:});",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: "Print to console",
            },
          ],
        };
      },
    };

    monaco.languages.registerCompletionItemProvider(
      "java",
      javaCompletionProvider
    );
  }, []);

  return (
    <MonacoEditor
      language="java"
      height="300px"
      options={{
        suggestOnTriggerCharacters: true,
        quickSuggestions: { other: true, comments: false, strings: true },
      }}
    />
  );
};

export default SimpleEditor;
