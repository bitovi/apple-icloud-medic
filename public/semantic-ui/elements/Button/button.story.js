import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Semantic UI/Elements', module)
  .addWithChapters('Button', {
    chapters: [{
      sections: [{
        title: 'Button Types',
        sectionFn: () => (
          <div>
            <Button>Default Button</Button>
            <Button basic>Basic Button</Button>
            <Button primary>Primary Button</Button>
            <Button secondary>Secondary Button</Button>
            <Button positive>Positive Button</Button>
            <Button negative>Negative Button</Button>
          </div>
        )
      }, {
        title: 'Inverted buttons',
        sectionFn: () => (
          <div style={{backgroundColor: '#000', padding: '1em'}}>
            <Button inverted>Default Button</Button>
            <Button inverted basic>Basic Button</Button>
            <Button inverted primary>Primary Button</Button>
            <Button inverted secondary>Secondary Button</Button>
            <Button inverted positive>Positive Button</Button>
            <Button inverted negative>Negative Button</Button>
          </div>
        )
      }, {
        title: 'Navigation Buttons',
        sectionFn: () => (
          <div>
            <Button basic>Back</Button>
            <Button basic>Next</Button>
            <Button basic icon='angle left' />
            <Button basic icon='angle right' />
          </div>
        )
      }, {
        title: 'Select Color Buttons',
        sectionFn: () => (
          <div>
            <Button color='red' icon='check circle outline' />
            <Button color='orange' icon='check circle outline' />
            <Button color='yellow' icon='check circle outline' />
            <Button color='olive' icon='check circle outline' />
            <Button color='green' icon='check circle outline' />
            <Button color='teal' icon='check circle outline' />
            <Button color='blue' icon='check circle outline' />
            <Button color='violet' icon='check circle outline' />
            <Button color='purple' icon='check circle outline' />
            <Button color='pink' icon='check circle outline' />
            <Button color='brown' icon='check circle outline' />
            <Button color='grey' icon='check circle outline' />
            <Button color='black' icon='check circle outline' />
          </div>
        )
      }, {
        title: 'Full-width Button',
        sectionFn: () => (
          <div>
            <Button basic fluid>Fluid Width Defualt Button</Button>
            <Button primary fluid>Fluid Width Primary Button</Button>
          </div>
        )
      }, {
        title: 'Attached Buttons',
        sectionFn: () => (
          <div>
            <Button basic attached='left'>Left</Button>
            <Button basic attached='right'>Right</Button>
          </div>
        )
      }, {
        title: 'Button Group',
        sectionFn: () => (
          <div>
            <Button.Group basic>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </Button.Group>
          </div>
        )
      }, {
        title: 'Loading Button',
        sectionFn: () => (
          <div>
            <Button basic loading>Loading</Button>
            <Button primary loading>Loading</Button>
          </div>
        )
      },{
        title: 'Different sizes',
        sectionFn: () => (
          <div>
            <Button basic size="mini">mini</Button>
            <Button basic size="tiny">tiny</Button>
            <Button basic size="small">small</Button>
            <Button basic size="medium">medium (default)</Button>
            <Button basic size="large">large</Button>
            <Button basic size="big">big</Button>
            <Button basic size="huge">huge</Button>
            <Button basic size="massive">massive</Button>
          </div>
        )
      }, {
        title: 'Different states',
        sectionFn: () => (
          <div>
            <Button disabled>disabled</Button>
            <Button>default</Button>
            <Button className="hover">hover</Button>
            <Button className="down">press</Button>
            <Button className="focus">focused</Button>
            <br /><br />
            <Button basic disabled>disabled</Button>
            <Button basic>default</Button>
            <Button basic className="hover">hover</Button>
            <Button basic className="down">press</Button>
            <Button basic className="focus">focused</Button>
            <br /><br />
            <Button primary disabled>disabled</Button>
            <Button primary>default</Button>
            <Button primary className="hover">hover</Button>
            <Button primary className="down">press</Button>
            <Button primary className="focus">focused</Button>
            <br /><br />
            <Button secondary disabled>disabled</Button>
            <Button secondary>default</Button>
            <Button secondary className="hover">hover</Button>
            <Button secondary className="down">press</Button>
            <Button secondary className="focus">focused</Button>
          </div>
        )
      }]
    }]
  });
