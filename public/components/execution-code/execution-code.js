import React from 'react';
import PropTypes from 'prop-types';
import DataProvider from '@public/components/data-provider/data-provider';
import Executions from '@public/models/executions';

/**
 * @module ExecutionCode
 * @parent components
 *
 * Displays the code executed for a workflow
 */
const ExecutionCode = () => {
  return <div> Content coming soon! </div>;
};

ExecutionCode.propTypes = { execution: PropTypes.object };

export default DataProvider(ExecutionCode, Executions, 'execution');
