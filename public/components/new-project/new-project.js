import React from 'react';
import PropTypes from 'prop-types';
import EditForm from '@public/components/edit-form/edit-form';
import ProjectsModel from '@public/models/projects';

/**
 * @module NewProject
 * @parent components
 *
 * NewProject Description
 */
const NewProject = ({ successCallback }) => {
  const formDef = {
    'title': { required: true },
    'description': { required: true }
  };

  return (
    <EditForm
      ItemType={ProjectsModel}
      formDef={formDef}
      successCallback={successCallback}
    />
  );
};

NewProject.propTypes = {
  successCallback: PropTypes.func
};

export default NewProject;
