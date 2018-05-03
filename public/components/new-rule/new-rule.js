import React from 'react';
import PropTypes from 'prop-types';
import route from 'can-route-pushstate';
import EditForm from '@public/components/edit-form/edit-form';
import CriteriaField from '@public/components/criteria-field/criteria-field';
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
    'name': { required: true },
    'description': { required: true },
    'projectId': { value: projectId, disabled: true },
    'pack': { disabled: true, value: route.data.teamName },
    'enabled': { value: true },
    'criteria': { Field: CriteriaField }
  };

  return (
    <EditForm
      ItemType={RulesModel}
      formDef={formDef}
      successCallback={successCallback}
    />
  );
};

/**
 * @memberof module:NewRule
 */
NewRule.propTypes = {
  /**
   * The projectId for the new rule
   */
  projectId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  /**
   * The callback function for successful creation.
   */
  successCallback: PropTypes.func
};

export default NewRule;
