import React from 'react';
import route from 'can-route-pushstate';
import { Container } from '@public/semantic-ui/index';
import ExecutionDetails from '@public/components/execution-details/';

const ExecutionPage = () => {
  return (
    <Container fluid>
      <h1>Execution</h1>
      <ExecutionDetails executionId={route.data.executionId} />
    </Container>
  );
};

export default ExecutionPage;

