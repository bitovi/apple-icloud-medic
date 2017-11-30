import React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider, Grid } from '../../index';

storiesOf('Styled Components/Layout', module)
  .addWithChapters('Divider', {
    chapters: [{
      info: `
        A divider visually separates content. Think of it like an advanced &lt;hr /&gt; element.

        [Read more here](https://react.semantic-ui.com/elements/divider)
      `,
      sections: [{
        title: 'Basic divider',
        sectionFn: () => <div>Before<Divider />After</div>
      }, {
        title: 'Horizontal with "Or" text',
        sectionFn: () => (
          <div>
            Above
            <Divider horizontal>Or</Divider>
            Below
          </div>
        )
      }, {
        title: 'Vertical with "Or" text',
        info: `Vertical dividers can only be used inside of a grid
          and _must_ be enclosed in a &lt;Divider.Column&gt;`,
        sectionFn: () => (
          <Grid columns={2} padded textAlign='center'>
            <Grid.Column>
              Column 1
            </Grid.Column>
            <Divider.Column>
              <Divider vertical>Or</Divider>
            </Divider.Column>
            <Grid.Column>
              Column 2
            </Grid.Column>
          </Grid>
        )
      }]
    }]
  });
