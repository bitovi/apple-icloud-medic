import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Container } from '../../index';

const Demo = styled.div`
  > div {
    background-color: #fee;
    border: 1px solid #c99;
    margin-bottom: 1em;
  }
`;

storiesOf('Styled Components/Layout', module)
  .addWithChapters('Container', {
    info: `
      A container is an element designed to contain page elements to a
      reasonable maximum width based on the size of a user's screen. Aside
      from **width**, there are no other visible styles on containers.

      [Read more here](https://react.semantic-ui.com/elements/container)

      **Note:** the red color is for visual aid only
    `,
    chapters: [{
      sections: [{
        sectionFn: () => (
          <Demo>
            <Container>
              This is inside a container
            </Container>
            <div>
              This is **not** inside a container
            </div>
          </Demo>
        )
      }]
    }]
  });
