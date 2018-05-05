import React from 'react';
import PropTypes from 'prop-types';
import { EditForm$Model } from '@public/components/edit-form/edit-form';
import ProjectsModel from '@public/models/projects';

/**
 * @module NewProject
 * @parent components
 *
 * NewProject Description
 */
const NewProject = ({ teamId, successCallback }) => {
  const formDef = {
    'teamId': { value: teamId, disabled: true },
    'title': { required: true },
    'description': { required: true }
  };

  return (
    <EditForm$Model
      ItemType={ProjectsModel}
      formDef={formDef}
      successCallback={successCallback}
    />
  );
};

NewProject.propTypes = {
  teamId: PropTypes.number,
  successCallback: PropTypes.func
};

export default NewProject;
