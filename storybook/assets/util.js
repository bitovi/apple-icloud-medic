import path from 'path';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Case from 'case';
import { Site as BaseSite } from '../../public/semantic-ui';

// some of these were taken directly from markdown parser source code
const REG_LEADING_DOT_SLASH = /^[\.\/]+/g;

// Strips everything after the last dot
function stripExtension (f) {
  return f.split('.').slice(0, -1).join('.');
}

// Takes a file path and makes a friendly title out of the file name
function makeTitleFromPath (f) {
  return Case.title( stripExtension(path.basename(f)).split('.').join(' ') );
}

// Takes a path like .././foo/bar/baz/bing.js and returns foo/bar/baz
function getScopeFromPath (f) {
  return path.dirname( stripExtension(f).replace(REG_LEADING_DOT_SLASH, '') );
}

// Create a mock app to provide context to elements
const makeAppComponent = (VM) => {
  if (typeof VM !== 'function') {
    VM = DefineMap.extend(VM);
  }
  return class MockApp extends Component {
    static ViewModel = VM

    static childContextTypes = {
      appState: PropTypes.object
    }

    getChildContext() {
      return { appState: this.viewModel };
    }

    render() {
      return this.props.children;
    }
  }
};

// extend the base Site component with custom styles for storybook
const Site = styled(BaseSite)`
  padding: 1em 1.5em;
  line-height: 1.5;

  pre code {
    display: block;
    padding: 1em;
    line-height: 1.3;
    background-color: #f9f9f9;
    border: 1px solid #eee;
  }

  // special wrapper for inline code blocks
  strong strong {
    font-family: monospace;
    font-weight: normal;
    padding: .05em .2em;
    margin-left: .1em;
    margin-right: .1em;
    background-color: #f9f9f9;
    border: 1px solid #eee;
  }

  blockquote {
    margin: .5em 0 1em;
    padding: .5em 1em;
    background-color: #FFF8DC;
    border-left: 2px solid #ffeb8e;
  }
`;

export {
  makeTitleFromPath,
  getScopeFromPath,
  makeAppComponent,
  Site
};
