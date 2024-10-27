import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import { loader } from "@monaco-editor/react";

loader.init().then((monaco) => {
  monaco.editor.defineTheme("modernTheme", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6A9955", fontStyle: "italic" },
      { token: "keyword", foreground: "569CD6" },
      { token: "string", foreground: "CE9178" },
    ],
    colors: {
      "editor.background": "#1E1E1E",
      "editor.foreground": "#D4D4D4",
      "editorLineNumber.foreground": "#858585",
      "editor.lineHighlightBackground": "#2F3139",
    },
  });
});

const calculateHeight = (code) => {
  const lineCount = code.split("\n").length;
  const baseHeight = Math.max(lineCount * 24, 100);
  return `${baseHeight}px`;
};
const calculateHeightSolutionCode = (code) => {
  const lineCount = code.split("\n").length;
  const baseHeight = Math.max(lineCount * 24, 100);
  return `${baseHeight}px`;
};

export default function CodeEditorEjercisios({
  initialCode = "",
  solutionCode = "",
  readOnly = false,
}) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [showSolution, setShowSolution] = useState(false);

  const executeCode = async () => {
    const pistonRequest = {
      language: "java",
      version: "15.0.2",
      files: [
        {
          name: "Main.java",
          content: code,
        },
      ],
    };

    try {
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pistonRequest),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.run && data.run.output) {
        setOutput(data.run.output);
      } else if (data.message) {
        setOutput(`Error: ${data.message}`);
      } else {
        setOutput("Error desconocido al ejecutar el código.");
      }
    } catch (error) {
      console.error("Error ejecutando el código:", error);
      setOutput(`Error al intentar ejecutar el código: ${error.message}`);
    }
  };

  return (
    <div className="rounded-lg overflow-hidden">
      <div className="rounded-lg overflow-hidden border border-gray-700">
        <MonacoEditor
          language="java"
          value={code}
          onChange={(value) => setCode(value)}
          theme="modernTheme"
          style={{ border: "none" }}
          options={{
            fontFamily: "'Fira Code', monospace",
            fontSize: 14,
            lineHeight: 24,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            folding: true,
            lineNumbers: "on",
            renderLineHighlight: "all",
            readOnly: readOnly,
            wordWrap: "on",
            autoIndent: "full",
            formatOnPaste: true,
            formatOnType: true,
            suggestOnTriggerCharacters: true,
            tabSize: 2,
            cursorBlinking: "smooth",
            cursorSmoothCaretAnimation: true,
            smoothScrolling: true,
            automaticLayout: true,
          }}
          height={calculateHeight(initialCode)}
        />
      </div>

      {/* Aquí están los botones alineados a la izquierda */}
      <div className="flex justify-end space-x-4 mt-4">
        <button
          onClick={executeCode}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ejecutar código
        </button>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          {showSolution ? "Ocultar solución" : "Mostrar solución"}
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Resultado:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md whitespace-pre-wrap">
          {output}
        </pre>
      </div>

      {showSolution && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Solución:</h3>
          <div className="rounded-lg overflow-hidden border border-gray-700">
            <MonacoEditor
              language="java"
              value={solutionCode}
              theme="vs-dark"
              options={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 14,
                lineHeight: 24,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                folding: true,
                lineNumbers: "on",
                renderLineHighlight: "all",
                readOnly: true,
                wordWrap: "on",
                autoIndent: "full",
                formatOnPaste: true,
                formatOnType: true,
                suggestOnTriggerCharacters: true,
                tabSize: 2,
                cursorBlinking: "smooth",
                cursorSmoothCaretAnimation: true,
                smoothScrolling: true,
                automaticLayout: true,
              }}
              height={calculateHeightSolutionCode(solutionCode)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
