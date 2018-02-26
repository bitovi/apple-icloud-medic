import React from 'react';
import PropTypes from 'prop-types';
import { ComponentWrapper, BlockHeader, BlockAccordion } from './partials';

/**
 * @module IFTTTBlock
 * @parent components
 *
 * Displays a styled accordion with a header for use in ifttt views
 */
const IFTTTBlock = ({ type, bgColor, header, panels }) => {
  panels = panels.map((panel, i) => {
    const key = panel.key || `panel-${i}`;
    return {
      title: Object.assign(
        { key: `${key}-title` },
        typeof panel.title === 'string' ? { content: panel.title } : panel.title
      ),
      content: Object.assign(
        { key: `${key}-content` },
        typeof panel.content === 'string' ? { content: panel.content } : panel.content
      )
    };
  });

  return (
    <ComponentWrapper bgColor={bgColor}>
      <BlockHeader type={type} bgColor={bgColor}>
        {header}
      </BlockHeader>
      {panels && panels.length ?
        <BlockAccordion panels={panels} exclusive={false} bgColor={bgColor} fluid />
        : null}
    </ComponentWrapper>
  );
};

/**
 * @memberof module:IFTTTBlock
 */
IFTTTBlock.propTypes = {
  /**
   * The type of block (eg. "if" "then" "foo")
   */
  type: PropTypes.string.isRequired,
  /**
   * The background color for the block.
   */
  bgColor: PropTypes.string.isRequired,
  /**
   * The header text.
   */
  header: PropTypes.any.isRequired,
  /**
   * The panels array, each with a title and content property
   */
  panels: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  })
};

export default IFTTTBlock;
