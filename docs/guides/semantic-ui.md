# Semantic UI

This project uses [Semantic UI](https://react.semantic-ui.com/) for rich UI components. To allow for flexible styling, every Semantic UI component is wrapped by a [styled component](https://github.com/styled-components/styled-components). These wrapped components are no different than the Semantic UI components they wrap and you can follow all examples provided on the Semantic UI website. The only thing that changes is the way you import the component:

```
// wrong: instead of importing Semantic UI components directly
import { Button } from 'semantic-ui-react';

// correct: import our custom wrapped component
import { Button } from '@public/semantic-ui';
```

## Extending components for different scenarios

There are a number of ways to extend components for use in different contexts within the app. Different techniques can be combined to suit the preferences of implementers. Advanced techniques should be developed in tandem with designers and developers to achieve an interface that is both freindly and flexible. Here are some common techniques:

1. **Pre-configured components**

	Most of the time you will want to create pre-configured components for use around the app. For example, let's say every modal window should use the same confirm/cancel buttons. We can create `ModalConfirm` and `ModalCancel` buttons, which are simply preconfigured Semantic UI Buttons.
	
	```js
	import styled from 'styled-component';
	import { Button as SemanticButton } from 'semantic-ui-react';
	
	const ModalConfirm = ({ className, children }) => (
		<SemanticButton className={className} primary>
			{children}
		</SemanticButton>
	);
	
	const ModalCancel = ({ className, children }) => (
		<SemanticButton as="a" className={className} size="small" secondary='true'>
			{children}
		</SemanticButton>
	);
	```

	
1. **Ad-hoc components**

	Occasionally you will need to customize a component for a very specific scenario. In such a case, you can import the styled component and export an ad-hoc version of that component. This follows the same techniques described above, but is usually done at the **_modlet_** level:
	
	**_[modlet]_/partials/styled.js**
	
	```js
	import styled from 'styled-component';
	import { Button } from '@public/styled-components/button';
	
	const CustomButton = styled(Button)`
      &&& {
	    /* add custom styles here */
      }
   `;
   
   export { CustomButton };
   ```
   
    > **Note:** the `&&&` achieves a higher level of specificity than Semantic UI's default styles, allowing us to override the default styles with ease.
   
   **_[modlet]_/[modlet].js**
   
   ```js
   import { CustomButton } from './partials/styled.js';
   
   export default () => {
     return (
     	<div>
     		<CustomButton>Click Me</CustomButton>
     	</div>
     );
   };
   ```

[semantic ui website]: https://react.semantic-ui.com/
[styled components website]: https://www.styled-components.com/
