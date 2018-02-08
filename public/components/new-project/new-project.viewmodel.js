import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';
import Projects from '@public/models/projects';

const debug = makeDebug('medic:components:new-project');
const DEFAULT_ERROR = { message: '' };

/**
 * @module NewProject VM
 * @parent NewProject
 *
 * NewProject View Model
 */
export default DefineMap.extend('NewProject', {
  /**
   * @prop
   *
   * Input value for the project name.
   */
  projectName: {
    type: 'string',
    default: ''
  },
  /**
   * @prop
   *
   * Input value for the project description.
   */
  projectDescription: {
    type: 'string',
    default: ''
  },
  /**
   * @prop
   *
   * Input value for the project category.
   */
  projectCategory: {
    type: 'string',
    default: ''
  },
  /**
   * @prop
   *
   * The ID for the newly created project
   */
  newProjectId: {
    type: 'number'
  },
  /**
   * @prop
   *
   * An error object for any input/save errors
   */
  error: {
    type: 'any',
    default: DEFAULT_ERROR
  },
  /**
   * @method
   *
   * Updates VM properties when form is updated.
   */
  handleChange({ target }) {
    this[target.id] = target.value;
  },
  /**
   * @method
   *
   * Save new project.
   */
  handleSave() {
    const project = new Projects({
      title: this.projectName || null,
      description: this.projectDescription || null,
      categories: [{ title: this.projectCategory || null }]
    });

    project.save().then(instance => {
      //TODO: redirect + display message
      debug(`${instance.title} has been successfully saved`);
      this.newProjectId = instance.id;
      this.resetProps();
    }).catch(err => this.error = err);
  },
  /**
   * @method
   *
   * Handles cancel button click.
   */
  handleCancel() {
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
    this.error = DEFAULT_ERROR;
  }
});
