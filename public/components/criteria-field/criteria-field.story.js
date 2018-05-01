import React from 'react';
import { storiesOf } from '@storybook/react';
import CriteriaField from './criteria-field';

storiesOf('Components', module)
  .addWithChapters('CriteriaField', {
    chapters: [{
      sections: [{
        title: 'Each criterion must be complete before it shows up in the value',
        sectionFn: () => {
          const handleChange = (val) => {
            document.getElementById('selectedValue').innerHTML = JSON.stringify(val, null, '  ');
          };
          return <div>
            <CriteriaField onChange={handleChange} />
            <h4>Result:</h4>
            <pre id="selectedValue"></pre>
          </div>;
        }
      }]
    }]
  });
