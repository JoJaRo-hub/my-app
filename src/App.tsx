import MonacoEditor from "@monaco-editor/react";

interface CodeEditorProps {
  initialValue: string;
  //onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue
  //initialValue
}) => {
  const onEditorDidMount = (getValue: () => string,monacoEditor:any) => {
    monacoEditor.onDidChangeModelContent(() => {
      console.log(getValue())
    });
  };

  return(
    <MonacoEditor
      //editorDidMount={onEditorDidMount}
      value={initialValue}
      theme="vs-dark"
      language="javascript"
      height="500px"
      options={{
        wordWrap: "on",
        //navigacija s lijeve strane
        minimap: { enabled: false },
        //za nekoristene importe
        showUnused: false,
        //miče prazninu desno od broja reda
        folding: false,
        //
        lineNumbersMinChars: 3,
        fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  )
};

export default CodeEditor;
