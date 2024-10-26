// CodeEditor.jsx
import React, { useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";

const CodeEditor = ({ initialCode = false }) => {
  const [code, setCode] = useState(initialCode);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  return (
    <MonacoEditor
      height="100%"
      language="java"
      value={code}
      onChange={(value) => setCode(value)}
      theme="vs-dark"
      options={{
        selectOnLineNumbers: true,
        readOnly: false,
        scrollBeyondLastLine: false,
        scrollbar: {
          vertical: "hidden",
          horizontal: "hidden",
        },
        wordWrap: "on", // Ajuste de texto
        minimap: { enabled: false }, // Deshabilitar minimapa
      }}
    />
  );
};

export default CodeEditor;
