<a name="module_CodeBlock VM"></a>

## CodeBlock VM
**Parent**: CodeBlock

CodeBlock View Model  

* [CodeBlock VM](#module_CodeBlock VM)
    * [~options](#module_CodeBlock VM..options)
    * [~content](#module_CodeBlock VM..content)
    * [~handleOnChange

This method will fire for every change event.
Passes the editor object, the change data, and the string value of the editor contents as arguments()](#module_CodeBlock VM..handleOnChange

This method will fire for every change event.
Passes the editor object, the change data, and the string value of the editor contents as arguments)

<a name="module_CodeBlock VM..options"></a>

### CodeBlock VM~options
**Kind**: inner property of [<code>CodeBlock VM</code>](#module_CodeBlock VM)  
**Properties**

| Name | Description |
| --- | --- |
| options | Display options for code block. Set the mode, theme and other options. Read more about configuration options here: https://codemirror.net/doc/manual.html#config Language modes available: http://codemirror.net/mode/index.html Note: you must import the mode for each language. |

<a name="module_CodeBlock VM..content"></a>

### CodeBlock VM~content
**Kind**: inner property of [<code>CodeBlock VM</code>](#module_CodeBlock VM)  
**Properties**

| Name | Description |
| --- | --- |
| content | This is the code content for the editor. Should be a string or a document object Read more here: http://codemirror.net/doc/manual.html#api_doc |

<a name="module_CodeBlock VM..handleOnChange

This method will fire for every change event.
Passes the editor object, the change data, and the string value of the editor contents as arguments"></a>

### CodeBlock VM~handleOnChange

This method will fire for every change event.
Passes the editor object, the change data, and the string value of the editor contents as arguments()
**Kind**: inner method of [<code>CodeBlock VM</code>](#module_CodeBlock VM)  
