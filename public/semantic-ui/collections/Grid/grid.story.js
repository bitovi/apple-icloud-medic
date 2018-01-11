import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from './Grid';

storiesOf('Semantic UI/Collections', module)
  .addWithChapters('Grid', {
    chapters: [{
      info: 'Grids are flex containers with an optional 16 subdivision',
      sections: [{
        title: 'Default behavior',
        info: 'Note: Colors added for visual que only',
        sectionFn: () => (
          <Grid>
            <Grid.Row>
              <Grid.Column width={5} color={'red'}>
                Column
              </Grid.Column>
              <Grid.Column width={3} color={'olive'}>
                Column
              </Grid.Column>
              <Grid.Column width={8} color={'blue'}>
                Column
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={2} color={'red'}>
                Column
              </Grid.Column>
              <Grid.Column width={7} color={'olive'}>
                Column
              </Grid.Column>
              <Grid.Column width={7} color={'blue'}>
                Column
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )
      }]
    }]
  });
