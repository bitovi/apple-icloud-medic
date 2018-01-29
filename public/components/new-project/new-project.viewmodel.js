/* global debug */
import DefineMap from 'can-define/map/map';
import Projects from '@public/models/projects';

/**
 * @module NewProject VM
 * @parent NewProject
 *
 * NewProject View Model
 */
export default DefineMap.extend('NewProject', {
  /**
   * @method
   *
   * Updates VM properties when form is updated.
   */
  handleChange(e, prop) {
    this[prop] = e.target.value;
  },
  /**
   * @method
   *
   * Save new project.
   */
  handleSave(e) {
    e.preventDefault();
    const project = new Projects({
      categories: [this.projectCategory],
      title: this.projectName,
      description: this.projectDescription
    });

    project.save().then(function(instance){ //TODO: redirect + display message
      debug(`${instance.title} has been successfully saved`);
    });
  },
  /**
   * @method
   *
   * Handles cancel button click.
   */
  handleCancel(e) {
    e.preventDefault();
    this.resetProps();
  },
  /**
   * @method
   *
   * Reset new project form fields to empty strings.
   */
  resetProps() {
    this.projectCategory = '';
    this.projectDescription = '';
    this.projectName = '';
  },
  /**
   * @prop
   *
   * Input value for the project name.
   */
  projectName: {
    type: 'string'
  },
  /**
   * @prop
   *
   * Input value for the project description.
   */
  projectDescription: {
    type: 'string'
  },
  /**
   * @prop
   *
   * Input value for the project category.
   */
  projectCategory: {
    type: 'string'
  }
});
