import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export function registerGherkinLanguage(monacoInstance: typeof monaco) {
  // Define the Gherkin language
  monacoInstance.languages.register({ id: 'gherkin' });

  // Register a tokens provider for the Gherkin language
  monacoInstance.languages.setMonarchTokensProvider('gherkin', {
    tokenizer: {
      root: [
        [/Feature|Scenario|Given|When|Then|And|But/, 'keyword'],
        [/'(?:[^'\\]|\\.)*'/, 'string'],
        [/(\d+)/, 'number'],
        [/\|/, 'delimiter.table'],
        [/[^|]+/, 'identifier'],
        [/#.*$/, 'comment'],
        [/@(?:[^'\\]|\\.)*/, 'tags'],
      ],
    },
  });

  //Register a completion item provider for the Gherkin language
  // monacoInstance.languages.registerCompletionItemProvider('gherkin', {
  //   provideCompletionItems: () => {
  //     const suggestions: monaco.languages.CompletionItem[] = [
  //       {
  //         label: 'Feature',
  //         kind: monacoInstance.languages.CompletionItemKind.Keyword,
  //         insertText: 'Feature: ',
  //         range: {
  //           insert: {
  //             startLineNumber: 1,
  //             startColumn: 5,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           },
  //           replace: {
  //             startLineNumber: 1,
  //             startColumn: 1,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           }
  //         }
  //       },
  //       {
  //         label: 'Scenario',
  //         kind: monacoInstance.languages.CompletionItemKind.Keyword,
  //         insertText: 'Scenario: ',
  //         range: {
  //           insert: {
  //             startLineNumber: 1,
  //             startColumn: 5,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           },
  //           replace: {
  //             startLineNumber: 1,
  //             startColumn: 1,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           }
  //         }
  //       },
  //       {
  //         label: 'Given',
  //         kind: monacoInstance.languages.CompletionItemKind.Keyword,
  //         insertText: 'Given ',
  //         range: {
  //           insert: {
  //             startLineNumber: 1,
  //             startColumn: 5,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           },
  //           replace: {
  //             startLineNumber: 1,
  //             startColumn: 1,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           }
  //         }
  //       },
  //       {
  //         label: 'When',
  //         kind: monacoInstance.languages.CompletionItemKind.Keyword,
  //         insertText: 'When ',
  //         range: {
  //           insert: {
  //             startLineNumber: 1,
  //             startColumn: 5,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           },
  //           replace: {
  //             startLineNumber: 1,
  //             startColumn: 1,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           }
  //         }
  //       },
  //       {
  //         label: 'Then',
  //         kind: monacoInstance.languages.CompletionItemKind.Keyword,
  //         insertText: 'Then ',
  //         range: {
  //           insert: {
  //             startLineNumber: 1,
  //             startColumn: 5,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           },
  //           replace: {
  //             startLineNumber: 1,
  //             startColumn: 1,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           }
  //         }
  //       },
  //       {
  //         label: 'And',
  //         kind: monacoInstance.languages.CompletionItemKind.Keyword,
  //         insertText: 'And ',
  //         range: {
  //           insert: {
  //             startLineNumber: 1,
  //             startColumn: 5,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           },
  //           replace: {
  //             startLineNumber: 1,
  //             startColumn: 1,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           }
  //         }
  //       },
  //       {
  //         label: 'But',
  //         kind: monacoInstance.languages.CompletionItemKind.Keyword,
  //         insertText: 'But ',
  //         range: {
  //           insert: {
  //             startLineNumber: 1,
  //             startColumn: 5,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           },
  //           replace: {
  //             startLineNumber: 1,
  //             startColumn: 1,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           }
  //         }
  //       },
  //       {
  //         label: 'Examples',
  //         kind: monacoInstance.languages.CompletionItemKind.Keyword,
  //         insertText: 'Examples:\n|  |\n',
  //         range: {
  //           insert: {
  //             startLineNumber: 1,
  //             startColumn: 5,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           },
  //           replace: {
  //             startLineNumber: 1,
  //             startColumn: 1,
  //             endLineNumber: 1,
  //             endColumn: 10
  //           }
  //         }
  //       },
  //     ];
  //     return { suggestions };
  //   },
  // });

  // const completionProvider = {
  //   provideCompletionItems: function (model: monaco.editor.ITextModel, position: monaco.Position) {
  //     const suggestions = [
  //       {
  //         label: 'Given',
  //         kind: monaco.languages.CompletionItemKind.Keyword,
  //         insertText: 'Given ',
  //         detail: 'Start a new step with Given keyword',
  //       },
  //       {
  //         label: 'When',
  //         kind: monaco.languages.CompletionItemKind.Keyword,
  //         insertText: 'When ',
  //         detail: 'Start a new step with When keyword',
  //       },
  //       {
  //         label: 'Then',
  //         kind: monaco.languages.CompletionItemKind.Keyword,
  //         insertText: 'Then ',
  //         detail: 'Start a new step with Then keyword',
  //       },
  //     ];
  
  //     return {
  //       suggestions: suggestions.map((suggestion) => {
  //         return {
  //           ...suggestion,
  //           range: new monaco.Range(position.lineNumber, position.column - 1, position.lineNumber, position.column),
  //         };
  //       }),
  //     };
  //   },
  // };
  
  // monaco.languages.registerCompletionItemProvider('gherkin', completionProvider);
  
// class MyCompletionItemProvider implements monaco.languages.CompletionItemProvider {
//   provideCompletionItems(
//     model: monaco.editor.ITextModel,
//     position: monaco.Position,
//     context: monaco.languages.CompletionContext,
//     token: monaco.CancellationToken
//   ): monaco.languages.ProviderResult<monaco.languages.CompletionList> {
//     const lineUntilPosition = model.getValueInRange({
//       startLineNumber: 1,
//       startColumn: 1,
//       endLineNumber: position.lineNumber,
//       endColumn: position.column
//     });

//     // Use a regular expression to determine if the current line contains the keyword "Given".
//     const givenMatch = /Given\s+/.exec(lineUntilPosition);

//     // If the current line contains the "Given" keyword, provide an array of completion items.
//     if (givenMatch) {
//       return {
//         suggestions: [
//           {
//             label: 'I am on the homepage',
//             insertText: 'Given I am on the homepage',
//             kind: monaco.languages.CompletionItemKind.Keyword,
//             range: new monaco.Range(position.lineNumber, position.column - 1, position.lineNumber, position.column),
//           },
//           {
//             label: 'I click the button',
//             insertText: 'Given I click the button',
//             kind: monaco.languages.CompletionItemKind.Keyword,
//             range: new monaco.Range(position.lineNumber, position.column - 1, position.lineNumber, position.column),
//           }
//         ],
//         incomplete: false
//       };
//     }

//     // If the current line does not contain the "Given" keyword, return an empty array.
//     return {
//       suggestions: [],
//       incomplete: false
//     };
//   }
// }

// monaco.languages.registerCompletionItemProvider('gherkin', new MyCompletionItemProvider());
  
  
  monaco.languages.register({ id: 'gherkin' });

monaco.languages.registerDocumentFormattingEditProvider('gherkin', {
  provideDocumentFormattingEdits: function (model, options, token) {
    // Define the formatter rules here
    const regex = /^(Given|When|Then|And|But)(.*)$/gm;
    const indent = '  ';

    const text = model.getValue();
    const matches = text.match(regex);

    if (!matches) {
      return [];
    }
    interface Edit {
      propertyName: string;
      propertyValue: any;
    }
    const edits:any = [];
    let lastMatchLine = 0;
    matches.forEach(match => {
      const matchIndex = text.indexOf(match, lastMatchLine);
      const matchLine = model.getPositionAt(matchIndex).lineNumber;
      const prevLineText = model.getLineContent(matchLine - 1);

      if (prevLineText.trim() === '') {
        // If previous line is empty, skip formatting
        return;
      }

      const indentLevel = prevLineText.split(indent).length - 1;
      const newLine = indent.repeat(indentLevel) + match.trim() + '\n';

      const startPosition = new monaco.Position(matchLine, 1);
      const endPosition = new monaco.Position(matchLine, match.length + 1);

      edits.push({
        range: new monaco.Range(1, 1,1, 1),
        text: newLine,
      });

      lastMatchLine = matchLine;
    });

    return edits;
  },
});

  
  monaco.languages.setLanguageConfiguration('gherkin', {
    autoClosingPairs: [
      { open: '(', close: ')' },
      { open: '"', close: '"', notIn: ['string'] },
      { open: '|', close: '|', notIn: ['string'] },
      { open: "'", close: "'", notIn: ['string'] },
    ],
    brackets: [['(', ')']],
    surroundingPairs: [
      { open: '(', close: ')' },
      { open: '"', close: '"' },
    ],
  });

  // Define the theme for the Gherkin language
  monacoInstance.editor.defineTheme('myTheme', {
    base: 'vs-dark',
    inherit: true,
    colors: {},
    rules: [
      { token: 'comment', foreground: '808080' },
      { token: 'tag', foreground: '569cd6' },
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

  // Set the theme for the editor
  monacoInstance.editor.setTheme('myTheme');
}
