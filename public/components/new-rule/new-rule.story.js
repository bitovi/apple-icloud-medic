import React from 'react';
import { storiesOf } from '@storybook/react';
import NewRule from './new-rule';

storiesOf('Components', module)
  .addWithChapters('NewRule', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => {
          const callback = (data) => {
            document.getElementById('output').innerHTML = JSON.stringify(data.serialize(), null, ' ');
          };
          return <div>
            <NewRule projectId={104} successCallback={callback} />
            <pre id="output"></pre>
          </div>;
        }
      }]
    }]
  });
