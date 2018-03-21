import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './code-block.viewmodel.js';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';


/**
 * @module CodeBlock
 * @parent components
 *
 * Code Block component renders code in an editor.
 */
class CodeBlock extends Component {
  /**
   * @method render
   */
  render() {
    const { options, content, handleOnChange } = this.viewModel;

    return (
      <CodeMirror
        value={content}
        options={options}
        onChange={handleOnChange}
      />
    );
  }
}

CodeBlock.ViewModel = ViewModel;

export default CodeBlock;
