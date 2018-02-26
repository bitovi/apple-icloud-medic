import React from 'react';
import PropTypes from 'prop-types';
import EditForm from '@public/components/edit-form/edit-form';
import { Message } from '@public/semantic-ui/index';
import RulesModel from '@public/models/rules';

/**
 * @module NewRule
 * @parent components
 *
 * NewRule Description
 */
const NewRule = ({ projectId, successCallback }) => {
  if (!projectId) {
    return <Message error>No projectId defined</Message>;
  }

  const formDef = {
    'title': { required: true },
    'description': { required: true },
    'projectId': { value: projectId, disabled: true }
  };

  return (
    <EditForm
      ItemType={RulesModel}
      formDef={formDef}
      successCallback={successCallback}
    />
  );
};

NewRule.propTypes = {
  projectId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  successCallback: PropTypes.func
};

export default NewRule;
