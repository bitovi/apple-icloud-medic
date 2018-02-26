import React from 'react';
import { storiesOf } from '@storybook/react';
import { Label } from '@public/semantic-ui/index';
import IFTTTBlock from './ifttt-block';

const panels = [
  { title: 'Panel Title 1', content: { content: <div>Accordion Panel 1</div> } },
  {
    title: { content: <span>Panel with a <Label>label</Label></span> },
    content: { content: <div>Accordion Panel 2</div> }
  }
];

storiesOf('Components', module)
  .addWithChapters('IFTTTBlock', {
    chapters: [{
      info: `
        This a stateless component intended to render a styled heading with a
        styled accordion component. Please see the semantic-ui **Accordion**
        docs for more information on configuring the accordion panels.
      `,
      sections: [{
        title: 'Default use',
        sectionFn: () => {
          return <IFTTTBlock type="If" header="header content" bgColor="#5069af" panels={panels} />;
        }
      }, {
        title: 'Lighter backgrounds',
        sectionFn: () => {
          return <div>
            <IFTTTBlock type="If" header="header content" bgColor="#ffcccc" panels={panels} />
            <IFTTTBlock type="Then" header="header content" bgColor="#ccffcc" panels={panels} />
            <IFTTTBlock type="Then" header="header content" bgColor="#ccccff" panels={panels} />
          </div>;
        }
      }, {
        title: 'Medium backgrounds',
        sectionFn: () => {
          return <div>
            <IFTTTBlock type="If" header="header content" bgColor="#cc9999" panels={panels} />
            <IFTTTBlock type="Then" header="header content" bgColor="#99cc99" panels={panels} />
            <IFTTTBlock type="Then" header="header content" bgColor="#9999cc" panels={panels} />
          </div>;
        }
      }, {
        title: 'Dark backgrounds',
        sectionFn: () => {
          return <div>
            <IFTTTBlock type="If" header="header content" bgColor="#993333" panels={panels} />
            <IFTTTBlock type="Then" header="header content" bgColor="#339933" panels={panels} />
            <IFTTTBlock type="Then" header="header content" bgColor="#333399" panels={panels} />
          </div>;
        }
      }]
    }]
  });
