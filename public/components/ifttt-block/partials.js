import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Accordion } from '@public/semantic-ui/index';
import { getDarkenedBg, getDarkenedBorder, getInverseLuminance } from '@public/util/style-helpers';

const ComponentWrapper = styled(({ bgColor, ...props }) => ( // eslint-disable-line no-unused-vars
  <div {...props} />
))`
  color: ${props => getInverseLuminance(props.bgColor)};
  background-color: ${props => props.bgColor};
  border: 1px solid ${props => getDarkenedBorder(props.bgColor)};
  border-radius: .3em;
  margin-bottom: 1.5rem;
`;

ComponentWrapper.propTypes = {
  bgColor: PropTypes.string.isRequired
};

const BlockHeader = styled(({ type, bgColor, children, ...props }) => ( // eslint-disable-line no-unused-vars
  <header {...props}>
    <strong>{type}</strong>
    <div>{children}</div>
  </header>
))`
  display: flex;
  align-items: center;
  background-color: ${props => getDarkenedBg(props.bgColor)};
  border-bottom: 1px solid ${props => getDarkenedBorder(props.bgColor)};
  border-top-left-radius: inherit;

  &:last-child {
    border-bottom-left-radius: inherit;
  }

  > strong {
    background #3a3a3a;
    color: white;
    flex-grow: 0;
    font-size: 2em;
    padding: 1rem 2.5rem;
    margin: -1px 0 -1px -1px;
    border: 1px solid rgba(0, 0, 0, .3);
    border-radius: inherit;
  }

  > div {
    flex-grow: 1;
    padding: 1rem 1.5rem;
  }
`;

BlockHeader.propTypes = {
  type: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.object
};

const BlockAccordion = styled(({ bgColor, ...props }) => ( // eslint-disable-line no-unused-vars
  <Accordion {...props} />
))`
  &&& {
    > .title {
      color: inherit;
      font-weight: bold;
      padding: .8rem 1.5rem;
      border-top: 1px solid ${props => getDarkenedBorder(props.bgColor)};
      &:first-child {
        border-top: 0 none;
      }
      .label {
        margin-left: .5em;
      }
    }

    > .content {
      padding: 1.5rem !important;
      background-color: ${props => getDarkenedBg(props.bgColor)};
      box-shadow: inset 0 0 2em rgba(0, 0, 0, .15);
    }
  }
`;

BlockAccordion.propTypes = {
  bgColor: PropTypes.string.isRequired
};

export { ComponentWrapper, BlockHeader, BlockAccordion };
