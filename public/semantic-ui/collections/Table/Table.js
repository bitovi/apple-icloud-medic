import styled from 'styled-components';
import { darken, desaturate } from 'polished';
import { Table as SemanticTable } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

// <Table />
const Table = styled(SemanticTable)`
  &&& {

  }
`;

Table.Header = styled(SemanticTable.Header)`
  &&& {

  }
`;

Table.HeaderCell = styled(SemanticTable.HeaderCell)`
  &&& {

  }
`;

Table.Body = styled(SemanticTable.Body)`
  &&& {

  }
`;

Table.Footer = styled(SemanticTable.Footer)`
  &&& {

  }
`;

Table.Row = styled(SemanticTable.Row)`
  &&& {

  }
`;

Table.Cell = styled(SemanticTable.Cell)`
  &&& {

  }
`;

// Needed for correct output in storybooks, dev tools, etc
Table.Header.displayName = 'Table.Header';
Table.HeaderCell.displayName = 'Table.HeaderCell';
Table.Body.displayName = 'Table.Body';
Table.Footer.displayName = 'Table.Footer';
Table.Row.displayName = 'Table.Row';
Table.Cell.displayName = 'Table.Cell';

export { Table };
