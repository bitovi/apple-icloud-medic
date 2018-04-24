import React from 'react';
import { Segment } from '@public/semantic-ui/index';
import PropTypes from 'prop-types';
import DataProvider from '@public/components/data-provider/data-provider';
import Executions from '@public/models/executions';

/**
 * @module ExecutionDetail
 * @parent components
 *
 * ExecutionDetail Description
 */
const ExecutionDetail = ({ execution }) => {
  const props = ['trigger','name','action','workflow','rule', /*'project','team',*/'startTime','endTime','duration','status'];

  return (
    <Segment>
      {
        props.map(prop => { // eslint-disable-line react/prop-types
          return <div key={prop}><strong>{prop}</strong> :{' '}
            { execution[prop] && typeof execution[prop] === 'object' ?
              execution[prop].name || execution[prop].codeName || execution[prop].toString() || 'no data' :
              execution[prop] || 'no data'
            }
          </div>;
        })
      }
    </Segment>
  );
};

ExecutionDetail.propTypes = { execution: PropTypes.object };

export default DataProvider(ExecutionDetail, Executions, 'execution');
