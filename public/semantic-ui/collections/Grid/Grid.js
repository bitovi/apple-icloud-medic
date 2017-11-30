import styled from 'styled-components';
import { darken, desaturate } from 'polished';
import { Grid as SemanticGrid } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

// <Grid>
const Grid = styled(SemanticGrid)`
  &&& {

  }
`;

Grid.Row = styled(SemanticGrid.Row)`
  &&& {

  }
`;

Grid.Column = styled(SemanticGrid.Column)`
  &&& {

  }
`;

// Needed for correct output in storybooks, dev tools, etc
Grid.Row.displayName = 'Grid.Row';
Grid.Column.displayName = 'Grid.Column';

export { Grid };
