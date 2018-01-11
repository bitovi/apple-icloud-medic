import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../../index';

storiesOf('Semantic UI/Elements', module)
  .addWithChapters('Button', {
    chapters: [{
      sections: [{
        title: 'Different types',
        sectionFn: () => (
          <div>
            <Button>Default Button</Button>
            <Button primary>Primary Button</Button>
            <Button secondary>Secondary Button</Button>
          </div>
        )
      }, {
        title: 'Different sizes',
        sectionFn: () => (
          <div>
            <Button size="mini">mini</Button>
            <Button size="tiny">tiny</Button>
            <Button size="small">small</Button>
            <Button size="medium">medium (default)</Button>
            <Button size="large">large</Button>
            <Button size="big">big</Button>
            <Button size="huge">huge</Button>
            <Button size="massive">massive</Button>
          </div>
        )
      }, {
        title: 'Different states',
        sectionFn: () => (
          <div>
            <Button disabled>disabled</Button>
            <Button>default</Button>
            <Button className="hover">hover</Button>
            <Button className="active">focused</Button>
            <Button className="down">press</Button>
          </div>
        )
      }]
    }]
  });
