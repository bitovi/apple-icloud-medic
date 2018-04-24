import DefineMap from 'can-define/map/map';
import moment from 'moment';

/**
 * @module DatePicker VM
 * @parent DatePicker
 *
 * DatePicker View Model
 */
export default DefineMap.extend('DatePicker', {
  /**
   * @prop startDate
   *
   */
  startDate: {
    Type: moment,
  },
  /**
   * @prop endDate
   *
   */
  endDate: {
    Type: moment
  },
  /**
   * @prop focusedInput
   *
   */
  focusedInput: {
    default() {
      return this.startDate;
    }
  },
  // passed from parent
  onDatesChange: { type: 'any' },
  /**
   * @method handleDatesChange
   *
   * updates the start and end dates when selected
   *
   */
  handleDatesChange({ startDate, endDate }) {
    this.startDate = startDate;
    this.endDate = endDate;
    if (typeof this.onDatesChange === 'function') {
      this.onDatesChange({ startDate, endDate });
    }
  },
  /**
   * @method handleDatesChange
   *
   * updates the focused input.
   * Note: If this is not set, the calendar will not open
   *
   */
  handleFocusChange(focusedInput) {
    this.focusedInput = focusedInput;
  }
});
