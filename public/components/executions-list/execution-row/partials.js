import React from 'react';
import styled from 'styled-components';
import { Table } from '@public/semantic-ui/index';
import { darken } from 'polished';
import PropTypes from 'prop-types';

const ModalLabel = styled.span`
  cursor: pointer;
  .icon {
    opacity: .3;
    transform: scaleX(-1); // flip horizontal
    margin-left: .2em;
  }
  :hover .icon {
    opacity: 1;
  }
`;

const NestableRow = styled(({ visible, depth, ...restProps }) => { // eslint-disable-line no-unused-vars
  return <Table.Row {...restProps} />;
})`
tr&&&&& {
  display: ${props => props.visible === false ? 'none' : 'table-row'};

  > td:first-child {
    border-left: ${props => `${props.depth * 3}px solid #345`};
  }

  > td {
    background-color: ${props => props.depth > 0 ? darken(.05 * props.depth, '#F7F7F7') : null};
  }

  td {
    border: none;
    padding: .75em
  }
}
`;

const LoadingStateComponent = ({ Loader, visible, depth }) =>
  <NestableRow visible={visible} depth={depth}>
    <Table.Cell colSpan='7'>{Loader}</Table.Cell>
  </NestableRow>;

LoadingStateComponent.propTypes = {
  Loader: PropTypes.object,
  visible: PropTypes.bool,
  depth: PropTypes.number,
};

const ErrorStateComponent = ({ Message, visible, depth }) =>
  <NestableRow visible={visible} depth={depth}>
    <Table.Cell colSpan='7'>{Message}</Table.Cell>
  </NestableRow>;

ErrorStateComponent.propTypes = {
  Message: PropTypes.object,
  visible: PropTypes.bool,
  depth: PropTypes.number,
};

const NoDataStateComponent = ({ Message, visible, depth }) =>
  <NestableRow visible={visible} depth={depth}>
    <Table.Cell colSpan='7'>{Message}</Table.Cell>
  </NestableRow>;

NoDataStateComponent.propTypes = {
  Message: PropTypes.object,
  visible: PropTypes.bool,
  depth: PropTypes.number,
};

export {
  NestableRow,
  ModalLabel,
  LoadingStateComponent,
  ErrorStateComponent,
  NoDataStateComponent
};
