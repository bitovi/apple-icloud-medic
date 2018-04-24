import styled from 'styled-components';

const BLUE = '#3C69AC';
const GRAY = '#e0e1e2';
const WHITE = '#fff';

const ComponentWrapper = styled('span')`
  &&&& {
    .DateRangePickerInput, .DateInput_input, .DateInput {
      background: ${GRAY};
      border-radius: 3px;
      border: none;
      margin-right: .25em;
    }

    .DateInput_input {
      font-size: inherit;
      line-height: inherit;
      font-family: inherit;
      padding: .54em .54em .53em;
    }

    .DateInput_input__focused {
      border-bottom: 2px solid ${BLUE};
    }

    .CalendarDay__highlighted_calendar:hover,
    .CalendarDay:hover,
    .CalendarDay__hover,
    .CalendarDay__highlighted_calendar:hover,
    .CalendarDay__selected_span,
    .CalendarDay__selected,
    .CalendarDay__highlighted_calendar:active {
      background: ${BLUE};
      border: 1px solid ${BLUE};
      color: ${WHITE};
    }

    .CalendarDay__hovered_span:hover, .CalendarDay__hovered_span {
      background: ${GRAY};
      border: 1px solid ${GRAY};
      color: ${WHITE};
    }
  }
`;

export { ComponentWrapper };
