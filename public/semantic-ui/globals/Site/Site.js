/**
 * This component is intended to provide high-level globals, styles,
 * extensions, et al to be used when rendering the app or any of its
 * individual components. This should be used to wrap around demo pages,
 * stories, and any other top-level "render" functions.
 *
 * NOTE: stories are automatically wrapped by this component.
 */

//!steal-remove-start
/* use this to show observation logs */
// import canDebug from 'can-debug';
// can.queues.log('flush');

// Fixutures must be imported early, before any models (connections)!
import '@public/models/fixtures/fixtures';
//!steal-remove-end

import styled from 'styled-components';
import 'semantic-ui-less/semantic.less';
import '@public/util/canjs-extensions';

// <Site></Site>
const Site = styled.div.attrs({
  role: 'application'
})`
  &&& {

  }
`;

export { Site };
