# Styled components / Semantic UI

This project uses two popular libraries for composing and styling rich UI components:

- [semantic-ui-react][semantic ui website] - think of it as a Bootstrap alternative
- [styled-components][styled components website] - react-friendly library for styling components

## Integration

In order to integrate Semantic UI and styled components, every Semantic UI component must be wrapped by a styled component. This allows us to override Semantic UI's default styles with our custom ones. Here is an example of how the Menu component is wrapped:

```js
import styled from 'styled-components';
import SemanticMenu from 'semantic-ui-react/menu';
import 'semantic-ui-css/components/menu.css';

const Menu = styled(SemanticMenu)`
  &&& {

  }
`;

Menu.Item = styled(SemanticMenu.Item)`
  &&& {

  }
`;

export { Menu };
```

> **Note:** the `&&&` achieves a higher level of specificity than Semantic UI's default styles, allowing us to override the default styles with ease.

## Using styled components within the app

All of the "wrapped" components live in the `@public/styled-components` folder. For documentation on individual component usage, please consult the [semantic-ui-react website][semantic ui website]. Here are examples of how to import styled UI components:

```js
// import from the index file
import { Modal } from '@public/styled-components/index';

// import directly from the modal file
import { Modal } from '@public/styled-components/modal';

// import multiple components from the index file
import { Modal, Icon, Container } from '@public/styled-components/index';
```

## Extending styled components for different scenarios

There are a number of ways to extend components for use in different contexts within the app. Different techniques can be combined to suit the preferences of implementers. Advanced techniques should be developed in tandem with designers and developers to achieve an interface that is both freindly and flexible. Here are some common techniques:

1. **Custom properties / attributes**
    
    Here is an example of allowing users to pass a "size" attribute for the button component:
    
    ```js
    function getFontSize (size) {
	  switch (size) {
	    case 'large':
	      return '1.4em';
	
	    case 'small':
	      return '.85em';
	
	    default:
	      return '1.1em';
	  }
	}
	
	// <Button size="small|large|default">Click Me</Button>
	const Button = styled(SemanticButton)`
	  &&& {
	    font-size: ${props => getFontSize(props.size)}
	  }
	`;
	
	export { Button };
	```

1. **Extending components**

	The above could be implemented a little differently by extending components:

    ```js
    // <Button>Click Me</Button>
	const Button = styled(SemanticButton)`
	  &&& {
	    font-size: 1.1em
	  }
	`;
	// <ButtonLarge>Click Me</ButtonLarge>
	const ButtonLarge = Button.extend`
	  &&& {
	    font-size: 1.4em
	  }
	`;
	// <ButtonSmall>Click Me</ButtonSmall>
	const ButtonSmall = Button.extend`
	  &&& {
	    font-size: .85em
	  }
	`;
	
	export { Button, ButtonLarge, ButtonSmall };
	```

1. **Combining the above techniques**

	The above techniques can work in tandem to provide really rich components:
	
	```js
	function getFontSize (size) {
	  switch (size) {
	    case 'large':
	      return '1.4em';
	
	    case 'small':
	      return '.85em';
	
	    default:
	      return '1.1em';
	  }
	}
	
	// <Button size="small|large|default">Click Me</Button>
	const Button = styled(SemanticButton)`
	  &&& {
	    font-size: ${props => getFontSize(props.size)};
	  }
	`;
	// <ButtonPrimary size="small|large|default">Click Me</ButtonPrimary>
	const ButtonPrimary = Button.extend`
	  &&& {
	    font-size: ${props => getFontSize(props.size)};
	    background-color: #ff472e;
	    border-color: #ff472e;
	    color: #222;
	  }
	`;
	// <ButtonSecondary size="small|large|default">Click Me</ButtonSecondary>
	const ButtonSecondary = Button.extend`
	  &&& {
	    font-size: ${props => getFontSize(props.size)};
	    background-color: #479f63;
	    border-color: #479f63;
	    color: #eee;
	  }
	`;
	
	export { Button, ButtonPrimary, ButtonSecondary };
	```
	
1. **Ad-hoc components**

	Occasionally you will need to customize a component for a very specific scenario. In such a case, you can import the styled component and export an ad-hoc version of that component. This follows the same techniques described above, but is usually done at the **_modlet_** level:
	
	**_[modlet]_/partials/styled.js**
	
	```js
	import { Button } from '@public/styled-components/button';
	
	const CustomButton = Button.extend`
      &&& {
	    /* add custom styles here */
      }
   `;
   
   export { CustomButton };
   ```
   
   **_[modlet]_/[modlet].js**
   
   ```js
   import { CustomButton } from './partials/styled.js';
   
   export default () => {
     return (
     	<div>
     		<CustomButton size="small">Click Me</CustomButton>
     	</div>
     );
   };
   ```

[semantic ui website]: https://react.semantic-ui.com/
[styled components website]: https://www.styled-components.com/