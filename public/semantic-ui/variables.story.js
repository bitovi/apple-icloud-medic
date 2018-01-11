import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { darken } from 'polished';
import variables from './variables';

const REG_COLOR = /^(#[A-Fa-f\d]{3,8}|rgba?\(|hsla?\()/;

const ColorBlock = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-right: .5em;
  border: 1px solid ${props => darken(0.3, props.color)};
  background-color: ${props => props.color}
`;

const storyScope = storiesOf('Semantic UI/Variables', module);

storyScope.addWithChapters('1. Overview', {
  chapters: [{
    title: 'Usage',
    info: `
      Style variables are defined inside of semantic-ui files using LESS syntax. These variables
      are loosely parsed and exported for use in JavaScript. Simply import the **variables**
      file and reference variables like this:

      ~~~js
      import style from 'styled-components';
      import variables from '@public/semantic-ui/variables';

      const Item = styled.div\`
        border: 1px solid \${variables.primaryColor};
      \`;
      ~~~
    `
  }, {
    title: 'Adding new variables',
    info: `
      Most variables will (*and should*) be defined to supersede semantic-ui variables.
      To see a list of available variables, please browse through the
      [defualt theme](https://github.com/Semantic-Org/Semantic-UI-LESS/tree/master/themes/default)
      in the semantic-ui-less repository.

      **To define new vaiables, follow these steps**

      1. Find the variable you want to override in the default semantic-ui theme
      1. Add the variable to the **[element].variables** file inside the **semantic-ui** folder.
         If the file does not yet exist, please create it.
    `
  }]
});

Object.keys(variables).forEach(type => {
  const vars = variables[type];
  storyScope.add(type, () => (
    <div>
      <h1>{type}</h1>
      <table><tbody>
        {(() => Object.keys(vars).map((varName, i) => {
          const val = vars[varName];
          let display;

          if (REG_COLOR.test(val)) {
            display = <span><ColorBlock color={val} /><i>{val}</i></span>;
          } else {
            display = <i>{val}</i>;
          }
          return (
            <tr key={'row-' + i}>
              <td><b><code>{varName}</code></b></td>
              <td>{display}</td>
            </tr>
          );
        }))()}
      </tbody></table>
    </div>
  ));
});
