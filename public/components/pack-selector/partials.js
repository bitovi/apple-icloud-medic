import React from 'react';
import styled from 'styled-components';
import { Segment, Grid } from '@public/semantic-ui/index';
import { getInverseLuminance, getDarkenedBorder, getDarkenedBg } from '@public/util/style-helpers';

const PackBlock = styled(({ bgColor, ...props }) => ( // eslint-disable-line no-unused-vars
  <Segment {...props} />
))`
&&& {
  cursor: pointer;
  background-color: ${props => props.selected ? getDarkenedBg(props.bgColor) : props.bgColor};
  border-color: ${props => getDarkenedBorder(props.bgColor)};
  color: ${props => getInverseLuminance(props.bgColor)};
  opacity: ${props => props.selected ? 1 : .7};

  &:hover {
    background-color: ${props => getDarkenedBg(props.bgColor)};
  }

  // shows a border when selected
  &:after {
    content: ' ';
    display: block;
    position: absolute;
    top: -6px;
    right: -6px;
    bottom: -6px;
    left: -6px;
    border-radius: inherit;
    border: 2px solid ${props => props.selected ? '#333' : 'transparent'};
  }
}
`;

const EnablerColumn = styled(Grid.Column)`
&&& {
  > button {
    // used match the segment styles
    padding: calc(1em + 1px) 1em;
    line-height: inherit;
  }
}
`;

export { PackBlock, EnablerColumn };
