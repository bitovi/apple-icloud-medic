import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/';

import ExecutionsTable from '~/components/executions-table/';

export default () =>
  <div className="executions-page">
    <h1>Executions</h1>
    <ExecutionsTable />
  </div>
