import styled from 'styled-components';
import { darken, desaturate } from 'polished';
import vars from './_variables';
import SemanticGrid from 'semantic-ui-react/grid';
import 'semantic-ui-css/components/grid.css';

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

export { Grid };
