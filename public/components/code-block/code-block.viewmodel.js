import DefineMap from 'can-define/map/map';

/**
 * @module CodeBlock VM
 * @parent CodeBlock
 *
 * CodeBlock View Model
 */
export default DefineMap.extend('CodeBlock', {
  /**
   * @prop options
   *
   * Display options for code block.
   * Set the mode, theme and other options.
   *
   * Read more about configuration options here:
   * https://codemirror.net/doc/manual.html#config
   *
   * Language modes available:
   * http://codemirror.net/mode/index.html
   * Note: you must import the mode for each language.
   */
  options: {
    type: 'any'
  },
  /**
   * @prop content
   *
   * This is the code content for the editor.
   * Should be a string or a document object
   * Read more here: http://codemirror.net/doc/manual.html#api_doc
   */
  content: {
    default: {},
    type: 'any'
  },
  /**
   * @method handleOnChange
   *
   * This method will fire for every change event.
   * Passes the editor object, the change data, and the string value of the editor contents as arguments
   */
  handleOnChange: {
    type: 'any'
  }
});
