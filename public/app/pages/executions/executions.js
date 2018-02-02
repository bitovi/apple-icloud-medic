import React from 'react';
import { Container } from '@public/semantic-ui/index';
import ExecutionsTable from '@public/components/executions-table/';

export default () =>
  <Container fluid>
    <h1>Executions</h1>
    <ExecutionsTable />
  </Container>;
