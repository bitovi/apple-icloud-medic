import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './date-picker.viewmodel.js';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { ComponentWrapper } from './partials';

/**
 * @module DatePicker
 * @parent components
 *
 * DatePicker Description
 */
class DatePicker extends Component {
  /**
   * @method render
   * @returns template
   */
  render() {
    const { startDate, endDate, focusedInput, handleFocusChange, handleDatesChange } = this.viewModel;
    return (
      <ComponentWrapper>
        <DateRangePicker
          startDate={startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={handleDatesChange} // PropTypes.func.isRequired,
          focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={handleFocusChange} // PropTypes.func.isRequired,
          isOutsideRange={() => false}
        />
      </ComponentWrapper>
    );
  }
}

DatePicker.ViewModel = ViewModel;

export default DatePicker;
