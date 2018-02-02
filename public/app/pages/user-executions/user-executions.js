import React from 'react';
import { Container } from '@public/semantic-ui/index';
import UserExecutionsList from '@public/components/user-executions-list/';

export default () =>
  <Container fluid>
    <h1>User Executions</h1>
    <UserExecutionsList />
  </Container>;
