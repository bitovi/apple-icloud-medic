import React from 'react';
import styled from 'styled-components';
import { darken, saturate } from 'polished';
import variables from '@public/semantic-ui/variables';
import { Button } from '@public/semantic-ui/index';
import { Card } from './Card';

const Overlay = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  &&&& {
    position: absolute;
    z-index: 1;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background-color: rgba(0, 0, 0, .6);
    opacity: 0;
    transition: opacity .2s linear;
    border-radius: inherit !important;

    &:hover {
      opacity: 1;
    }

    .button {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
`;

/**
 * Creates a stylized semantic-ui Card Component with a custom color.
 * Pass a color using the `bgColor` property.
 *
 * Semantic-ui passes any unrecognized props to the underlyingd
 * DOM element. This is unfortunate for the case of camelCased
 * props as react will complain about unrecognized DOM attributes.
 *
 * The following is a technique for allowing custom props on
 * styled components while also preventing those props from being
 * rendered on the underlying DOM element.
 *
 * @param  {Object} ({ bgColor, detailUrl, ...restProps })
 * @return {StyledComponent}
 */
const StyledCard = styled(({ bgColor, detailUrl, children, ...props }) => ( // eslint-disable-line no-unused-vars
  <Card {...props}>
    {children}
    {detailUrl ?
      <Overlay>
        <Button as="a" href={detailUrl} color="teal">View details</Button>
      </Overlay>
      : null}
  </Card>
)).attrs({
  saturated: (props) => saturate(0.1, props.bgColor)
})`
  &&&&& {
    background-color: ${props => props.bgColor};
    border: 1px solid ${props => darken(0.1, props.saturated)};
    color: white;

    > .header {
      color: inherit;
      font-size: ${variables.card.headerFontSize};
      padding: 1em ${variables.card.contentPadding};
      background-color: ${props => darken(0.07, props.saturated)};
      border-bottom: 1px solid ${props => darken(0.1, props.saturated)};
      a {
        color: inherit;
      }
    }

    .description {
      font-size: 1.2rem;
    }

    // <Label.Group />
    .ui.labels:not(:first-child) {
      margin-top: ${variables.card.contentPadding};
    }

    // <Label />
    .ui.label {
      color: ${props => props.bgColor};
      &.circular {
        margin: 0 .5em;
      }
    }

    .extra {
      background: #fff;
      color: #555;
      // covers up the card border
      margin: 0 -1px -1px -1px;
      max-width: none;
      line-height: 1.7;
      padding-top: .5rem;
      padding-bottom: .5rem;
      .label {
        margin: 0;
      }
    }
  }
`;

export { StyledCard };
