import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export function registerGherkinLanguage(monacoInstance: typeof monaco) {
  // Define the Gherkin language
  monacoInstance.languages.register({ id: 'gherkin' });

  // Register a tokens provider for the Gherkin language
  monacoInstance.languages.setMonarchTokensProvider('gherkin', {
    tokenizer: {
      root: [
        [/Feature:|Scenario:/, 'tag'],
        [/Given|When|Then|And|But/, 'keyword'],
        [/'(?:[^'\\]|\\.)*'/, 'string'],
        [/(\d+)/, 'number'],
        [/\|/, 'delimiter.table'],
        [/[^|]+/, 'identifier'],
        [/#.*$/, 'comment'],
      ],
    },
  });

  // Register a completion item provider for the Gherkin language
  monacoInstance.languages.registerCompletionItemProvider('gherkin', {
    provideCompletionItems: () => {
      const suggestions: monaco.languages.CompletionItem[] = [
        {
          label: 'Feature',
          kind: monacoInstance.languages.CompletionItemKind.Keyword,
          insertText: 'Feature: ',
          range: Document.getWordRangeAtPosition
        },
        {
          label: 'Scenario',
          kind: monacoInstance.languages.CompletionItemKind.Keyword,
          insertText: 'Scenario: ',
        },
        {
          label: 'Given',
          kind: monacoInstance.languages.CompletionItemKind.Keyword,
          insertText: 'Given ',
        },
        {
          label: 'When',
          kind: monacoInstance.languages.CompletionItemKind.Keyword,
          insertText: 'When ',
        },
        {
          label: 'Then',
          kind: monacoInstance.languages.CompletionItemKind.Keyword,
          insertText: 'Then ',
        },
        {
          label: 'And',
          kind: monacoInstance.languages.CompletionItemKind.Keyword,
          insertText: 'And ',
        },
        {
          label: 'But',
          kind: monacoInstance.languages.CompletionItemKind.Keyword,
          insertText: 'But ',
        },
        {
          label: 'Examples',
          kind: monacoInstance.languages.CompletionItemKind.Keyword,
          insertText: 'Examples:\n|  |\n',
        },
      ];

      return { suggestions };
    },
  });

  // Define the theme for the Gherkin language
  monacoInstance.editor.defineTheme('myTheme', {
    base: 'vs-dark',
    inherit: true,
    colors: {},
    rules: [
      { token: 'comment', foreground: '808080' },
      { token: 'tag', foreground: '569cd6' },
      { token: 'keyword', foreground: 'c586c0' },
      { token: 'string', foreground: 'ce9178' },
      { token: 'number', foreground: 'b5cea8' },
      { token: 'delimiter', foreground: 'd4d4d4' },
      { token: 'delimiter.table', foreground: 'd4d4d4' },
      { token: 'identifier', foreground: 'dcdcaa' },
      { token: 'brackets', foreground: 'd4d4d4' },
    ],
  });

  // Set the theme for the editor
  monacoInstance.editor.setTheme('myTheme');
}
