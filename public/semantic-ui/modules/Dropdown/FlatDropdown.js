import { Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';
import { adjustHue, saturate } from 'polished';
import variables from '@public/semantic-ui/variables';

// <FlatDropdown options={options}/>
const startColor = '#46824C';
const numOptions = 20;
const children = [];

for(var i = 0; i < numOptions; i++) {
  const offset = 360/numOptions * i;
  const color = adjustHue(offset, startColor);
  // .item:nth-child(20n + 4)
  children.push(`.item:nth-child(${numOptions}n + ${i}) {
    background-color: ${color};
    border-top: 1px solid #000;
    &:first-child {
      border-top-width: 0;
    }
    &:hover {
      background-color: ${saturate(.3, color)};
    }
  }`);
}

const FlatDropdown = styled(Dropdown).attrs({
  fontSize: props => {
    const val = variables[`${props.size}Size`];
    return val ? `${val}rem` : 'inherit';
  }
})`
  &&&& {
    border-radius: 0;
    font-size: ${props => props.fontSize};

    .menu {
      border-radius: 0;
      font-size: inherit;
      width: 160%;

      > .item {
        color: white;
        font-size: inherit;
      }

      ${children.join('\n')}
    }
  }
`;

export { FlatDropdown };
