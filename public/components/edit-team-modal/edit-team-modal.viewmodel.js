import DefineMap from 'can-define/map/map';
import TeamsModel from '@public/models/teams';

/**
 * @module EditTeamModal VM
 * @parent EditTeamModal
 *
 * EditTeamModal View Model
 */
export default DefineMap.extend('EditTeamModal', {
  /**
   * @prop isNew
   *
   * True if editing a new team, false if editing an existing team
   */
  isNew: {
    type: 'boolean',
    default: false
  },
  /**
   * @prop floatedButton
   *
   * Float button to right or left
   */
  floatedButton: {
    type: 'string',
  },
  /**
   * @prop formDef
   *
   * Defines the form requirements.
   * codeNames cannot be changed once created.
   */
  formDef: {
    get() {
      if (this.team) {
        return {
          'codeName': {
            value: this.team.codeName,
            disabled: !this.isNew,
            required: this.isNew
          },
          groupId: {
            value: this.team.groupId,
            required: this.isNew
          },
          name: {
            value: this.team.name,
            required: this.isNew
          }
        };
      }
    }
  },
  /**
   * @prop team
   *
   * The team passed from the parent component to be editted
   * or the new team being created.
   */
  team: {
    Type: TeamsModel,
    default: () => ({})
  },
  /**
   * @method handleSuccess
   *
   * Success callback that is passed inot the form that sets the successMessage, status.
   * Toggles the modal and resets data after delay.
   */
  handleSuccess(team) {
    //TODO: should be handled in a global messaging component
    this.successMessage = `The ${team.name} team was successfully saved.`;
    this.status = 'success';
    setTimeout(() => { //TODO: remove once global messaging component handles displaying success/error messages
      this.toggleModal();
      this.resetModalData();
    }, 1000);
  },
  /**
   * @method
   *
   * Resets success and status messages.
   */
  resetModalData() {
    this.status = '';
    this.successMessage = '';
  },
  /**
   * @method
   *
   * Handles cancel state by toggling modal and resetting data.
   */
  handleCancel() {
    this.toggleModal();
    this.resetModalData();
  },
  /**
   * @method
   *
   * Toggles modal open/close prop.
   */
  toggleModal() {
    this.open = !this.open;
  },
  /**
   * @prop
   *
   * Boolean value that represents the open state of the modal.
   */
  open: {
    type: 'boolean'
  },
  /**
   * @method
   *
   * Handles when trigger button is clicked and toggles modal.
   */
  handleClick() {
    this.toggleModal();
  },
  /**
   * @prop
   *
   * Status of the form. "error" or "success"
   */
  status: 'string',
  /**
   * @prop
   *
   * A "renderable thing" (string, React element, etc) to render for the success message
   */
  successMessage: 'any'
});
