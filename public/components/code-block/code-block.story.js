import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeBlock from './code-block';
import 'codemirror/mode/htmlembedded/htmlembedded';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/python/python';

storiesOf('Components', module)
  .addWithChapters('Code Block', {
    chapters: [{
      info: `
      Code block uses CodeMirror and CodeMirror-React2 modules. \n

      CodeMirror expects the initial value to be a string or  a document object form: \n
      http://codemirror.net/doc/manual.html#api_doc

      CodeMirror supports many language modes, but you must import the mode manually at the top of the component: \n
      ~~~js
      import 'codemirror/mode/python/python';
      ~~~

      Relevant Links: \n
      CodeMirror: http://codemirror.net/ \n
      React CodeMirror Wrapper: https://github.com/scniro/react-codemirror2
      `,
      sections: [{
        title: 'JavaScript, read only',
        sectionFn: () => (
          <CodeBlock options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true,
            readOnly: true
          }} content='function pad(v) { return ("0" + v).substr(-2); }'
          />
        )
      },
      {
        title: 'JavaScript, read/write',
        sectionFn: () => (
          <CodeBlock options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true,
          }}
          content='function pad(v) { return ("0" + v).substr(-2); }'
          handleOnChange={(editor, data, value) => {
            alert(value);
          }}/>
        )
      },
      {
        title: 'YAML, read only',
        sectionFn: () => (
          <CodeBlock options={{
            mode: 'yaml',
            theme: 'material',
            lineNumbers: true,
            readOnly: true
          }}
          content='twobytwotable: [ ["a1", "a2"], ["b1", "b2"] ]'/>
        )
      },
      {
        title: 'shell, read only',
        sectionFn: () => (
          <CodeBlock options={{
            mode: 'shell',
            theme: 'material',
            lineNumbers: true,
            readOnly: true
          }}
          content='cat post-list.csv | split -l 30 - --filter="/jq -R . | jq --slurp -c ." | xargs -d "\n" -I % sh -c'/>
        )
      },
      {
        title: 'Python, read only',
        sectionFn: () => (
          <CodeBlock options={{
            mode: 'python',
            theme: 'material',
            lineNumbers: true,
            readOnly: true
          }}
          content='f = lambda x: [[y for j, y in enumerate(set(x)) if (i >> j) & 1] for i in range(2**len(set(x)))]'/>
        )
      }]
    }]
  });
