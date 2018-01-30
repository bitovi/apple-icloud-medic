import { FlatDropdown} from './FlatDropdown';
import styled from 'styled-components';
import { adjustHue, saturate } from 'polished';
import variables from '@public/semantic-ui/variables';

const startColor = '#4156A6';
const numOptions = 12;
const children = [];

for(var i = 0; i < numOptions; i++) {
  const offset = 360/numOptions * i;
  const color = adjustHue(offset, startColor);

  children.push(`.item:nth-child(${numOptions}n + ${i}) {
    background-color: ${color};
    border-color: rgba(255, 255, 255, .3);
    &:first-child {
      border-top-width: 0;
    }
    &:hover {
      background-color: ${saturate(.2, color)};
    }
  }`);
}

const FlatDropdownRainbow = styled(FlatDropdown).attrs({
  fontSize: props => {
    const val = variables[`${props.size}Size`];
    return val ? `${val}rem` : 'inherit';
  }
})`
  &&&.dropdown {
    .menu {
      > .item {
        color: white;
        font-size: inherit;
      }
      ${children.join('\n')}
    }
  }
`;

export { FlatDropdownRainbow };
