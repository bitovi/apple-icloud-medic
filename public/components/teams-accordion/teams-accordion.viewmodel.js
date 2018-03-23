import DefineMap from 'can-define/map/map';
import Teams from '@public/models/teams';

/**
 * @module TeamAccordion VM
 * @parent TeamAccordion
 *
 * TeamAccordion View Model
 */
export default DefineMap.extend('TeamAccordion', {
  /**
   * @prop teams
   *
   * All teams associated with the user.
   */
  teams: {
    Type: Teams.List
  },
  /**
   * @prop activeIndex
   *
   * The index for the active accordion section.
   */
  activeIndex: {
    type: 'number',
    default: -1
  },
  /**
   * @method handleClick
   *
   * Updates the active index to the clicked index.
   */
  handleClick(e, props) {
    this.activeIndex === props.index ?
      this.activeIndex = -1 :
      this.activeIndex = props.index;
  },
  /**
   * @method editTeamFn
   *
   * Method used to edit team. It is passed in from the parent component.
   */
  editTeamFn: {
    type: 'any'
  }
});
