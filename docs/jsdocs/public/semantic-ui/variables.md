<a name="module_semantic-ui/variables"></a>

## semantic-ui/variables : <code>Object</code>
semantic-ui/variables

**Parent**: semantic/ui

This module imports `.variables` (text) files and exports
the name/value pairs as a dictionary to be used in JavaScript.
What started as a simple @key: value parser slowly evolved
into a lightweight LESS parser.

NOTES:
 - All code comments will be stripped prior to parsing
 - The `@` symbol is not included in the exported variable names.
 - known color functions are evaluated to the best of our ability
     eg: lighten(saturate(#333, 15), 8) => #533c3c
 - Complex/computed values are not evaluated
 - Externally referenced variables will not be resolved
 - `@import` statements will not be executed  
