import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

export default function ContentSectionEjercisios({
  initialCode = "",
  solutionCode = "",
}) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [showSolution, setShowSolution] = useState(false);

  const executeCode = async () => {
    const pistonRequest = {
      language: "java",
      version: "latest",
      files: [{ name: "Main.java", content: code }],
    };

    try {
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pistonRequest),
      });

      const data = await response.json();

      if (data.run && data.run.output) {
        setOutput(data.run.output);
      } else {
        setOutput("Error al ejecutar el código.");
      }
    } catch (error) {
      console.error("Error ejecutando el código:", error);
      setOutput("Hubo un error al intentar ejecutar el código.");
    }
  };

  return (
    <div className="rounded-lg overflow-hidden border border-gray-700 p-4">
      <MonacoEditor
        language="java"
        value={code}
        onChange={(value) => setCode(value)}
        theme="modernTheme"
        options={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          folding: true,
          lineNumbers: "on",
          renderLineHighlight: "all",
          wordWrap: "on",
        }}
        height="300px"
      />
      <div className="flex space-x-4 mt-4">
        <button onClick={executeCode} className="btn btn-primary">
          Ejecutar código
        </button>
        <button
          onClick={() => setShowSolution(true)}
          className="btn btn-secondary"
        >
          Mostrar solución
        </button>
      </div>
      <div className="mt-4">
        <h3>Resultado:</h3>
        <pre>{output}</pre>
      </div>
      {showSolution && (
        <div className="mt-4">
          <h3>Solución:</h3>
          <MonacoEditor
            language="java"
            value={solutionCode}
            theme="modernTheme"
            options={{ readOnly: true }}
            height="200px"
          />
        </div>
      )}
    </div>
  );
}
