import onMount from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import prettier from "prettier";
import parser from "prettier/parser-babel";
import React, { useState, useRef } from "react";

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const editorRef = useRef<any>();

  const getValue = () => {
    return editorRef.current.getValue();
  };

  const onEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    editor.onDidChangeModelContent(() => {
      onChange(getValue());
    });
    // const model = monaco.editor.getModel();
    // if (model) {
    //   model.updateOptions({ tabSize: 4 })
    // };
    //monaco.editor.getModel().updateOptions({ tabSize: 4 });
    }

    const onFormatClick = () => {
      const unformatted = editorRef.current.getModel().getValue();
      const formatted = prettier.format(unformatted, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true
      })
      editorRef.current.setValue(formatted);
    };

    return (
      <div>
        <button onClick={onFormatClick}>Format</button>
        <Editor
          value={initialValue}
          theme="vs-dark"
          language="javascript"
          height="500px"
          options={{
            wordWrap: "on",
            minimap: { enabled: false },
            showUnused: false,
            folding: false,
            lineNumbersMinChars: 3,
            fontSize: 16,
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
          onMount={onEditorDidMount}
        />
      </div>
    );
  };

export default CodeEditor;
