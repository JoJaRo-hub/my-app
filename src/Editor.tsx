import React, { useRef } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { registerGherkinLanguage } from './gherkinLanguage';

function App() {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
  };

  const handleEditorWillUnmount = () => {
    editorRef.current?.dispose();
  };
  const value = `@BDD @UI

Feature: LoginPage

Scenario: LoginPage

Given I am on "Login" page
When I click "Login" button
Then I should see "Home" page
`

  function showRows() {
    if(editorRef.current)
    {
      let content = editorRef.current.getValue();
      let arrayOfRows=content.split("\n");
      console.log(arrayOfRows);
    }
    
  }

  function showValue() {
    if(editorRef.current)
    {console.log(editorRef.current.getValue());}
  }
  
  const handleExecute = () => {
    const model = editorRef.current?.getModel();
    if (model) {
      const code = model.getValue();
      console.log('Executing code:', code);
    }
  };

  return (
    <div className="App">
      <div className="Controls">
        <button onClick={handleExecute}>Execute</button>
        <button onClick={showValue}>Show value</button>
        <button onClick={showRows}>Show rows</button>
        </div>
        <div className="Editor">
        <MonacoEditor
            language="gherkin"
            theme="vs-dark"
            options={{
              value: value,
              language: "gherkin",
              wordWrap: "on",
              minimap: { enabled: false },
              showUnused: false,
              folding: false,
              lineNumbersMinChars: 3,
              fontSize: 16,
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
            editorDidMount={handleEditorDidMount}
            editorWillUnmount={handleEditorWillUnmount}
            wordBasedSuggestions={true}
          />
        </div>
    </div>
  );
}

function MonacoEditor(props: {
    language: string;
  theme: string;
  wordBasedSuggestions: boolean;
    options: monaco.editor.IStandaloneEditorConstructionOptions;
    editorDidMount: (editor: monaco.editor.IStandaloneCodeEditor) => void;
  editorWillUnmount: () => void;
  
}) {
  const { language, theme, options, editorDidMount, editorWillUnmount, wordBasedSuggestions } = props;
  const editorRef = useRef<HTMLDivElement>(null);

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorDidMount(editor);
  };

  const handleEditorWillUnmount = () => {
    editorWillUnmount();
  };

  

  React.useEffect(() => {
    if (editorRef.current) {
      monaco.editor.defineTheme('myTheme', {
        base: 'vs-dark',
          inherit: true,
          colors: {},
        rules: [
          { token: 'comment', foreground: '808080' },
          { token: 'tags', foreground: '569cd6' },
          { token: 'keyword', foreground: 'c586c0' },
          { token: 'string', foreground: 'ce9178' },
          { token: 'number', foreground: 'b5cea8' },
          { token: 'delimiter', foreground: 'd4d4d4' },
          { token: 'delimiter.table', foreground: 'd4d4d4' },
          { token: 'identifier', foreground: 'dcdcaa' },
          { token: 'brackets', foreground: 'd4d4d4' },
        ],
      });
      monaco.editor.setTheme('myTheme');

      registerGherkinLanguage(monaco);

      const editor = monaco.editor.create(editorRef.current, {
        language,
        theme,
        ...options,
      });

      editor.onDidDispose(() => {
        handleEditorWillUnmount();
      });

      handleEditorDidMount(editor);
    }
  },
    [editorRef, handleEditorDidMount, handleEditorWillUnmount, language, options, theme]);

    return <div ref={editorRef}
        //style={{ width: '100%', height: '200px' }}
    />;
}

export default App;
