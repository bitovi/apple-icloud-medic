<a name="StyledCard"></a>

## StyledCard ⇒ <code>StyledComponent</code>
Creates a stylized semantic-ui Card Component with a custom color.
Pass a color using the `bgColor` property.

Semantic-ui passes any unrecognized props to the underlyingd
DOM element. This is unfortunate for the case of camelCased
props as react will complain about unrecognized DOM attributes.

The following is a technique for allowing custom props on
styled components while also preventing those props from being
rendered on the underlying DOM element.

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| ({ | <code>Object</code> | bgColor, ...restProps }) |

