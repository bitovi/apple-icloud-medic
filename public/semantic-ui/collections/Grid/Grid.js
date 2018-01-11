// import styled from 'styled-components';
// import { darken, desaturate } from 'polished';
import { Grid as SemanticGrid } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

// <Grid>
const Grid = SemanticGrid;

Grid.Row = SemanticGrid.Row;

Grid.Column = SemanticGrid.Column;

// Needed for correct output in storybooks, dev tools, etc
Grid.Row.displayName = 'Grid.Row';
Grid.Column.displayName = 'Grid.Column';

export { Grid };
