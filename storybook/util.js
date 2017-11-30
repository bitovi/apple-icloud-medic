import path from 'path';
import Component from 'react-view-model/component';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Case from 'case';
import { Site } from '../public/semantic-ui';

const REG_BLOCK_CODE = /(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/g;
const REG_INLINE_CODE = /(^|[^`])(`)([^`]*)\s*\2(?!`)/g;

function cleanMarkdown(src) {
  src = src.replace(REG_BLOCK_CODE, (match, fence, lang, code) => {
    // Fix issue with certain characters not rendering properly
    code = code.replace(/`/g, '&#96;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Wrap block in ~~~ to make inline code parsing easier
    return '~~~' + lang + '\n' + code + '\n~~~\n';
  });
  // Inline code blocks are incorrectly handled. To get around this, we
  // convert all inline code into <strong><strong>...</strong></strong> for styling
  src = src.replace(REG_INLINE_CODE, '$1****$3****');
  return src;
}

// Takes a file path and makes a friendly title out of the file name
function makeTitleFromFile (f) {
  return Case.title(path.basename(f).split('.').slice(0, -1).join(' '));
}

// Create a mock app to provide context to elements
class MockApp extends Component {
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

// extend the Site component with custom styles for storybook
const Wrapper = styled(Site)`
  padding: 1em 1.5em;
  line-height: 1.5;

  pre code {
    display: block;
    padding: 1em;
    line-height: 1.3;
    background-color: #f9f9f9;
    border: 1px solid #eee;
  }

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

export { cleanMarkdown, makeTitleFromFile, MockApp, Wrapper };
