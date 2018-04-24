import React from 'react';
import JSONViewer from '@public/components/json-viewer/json-viewer';
import PropTypes from 'prop-types';
import DataProvider from '@public/components/data-provider/data-provider';
import Executions from '@public/models/executions';

/**
 * @module ExecutionData
 * @parent components
 *
 * ExecutionData Description
 */
const ExecutionData = ({ execution }) => {
  return <JSONViewer src={execution.serialize()} collapsed={1} />;
};

ExecutionData.propTypes = { execution: PropTypes.object };

export default DataProvider(ExecutionData, Executions, 'execution');
