import React from 'react';
import { storiesOf } from '@storybook/react';


storiesOf('Guides', module)
  .addWithChapters('Writing Stories', {
    chapters: [{
      title: 'Basics',
      info: `
        The easies way to get started is to [read the docs](https://storybook.js.org/basics/writing-stories/).
        You can also look at existing stories within this application. All story files
        have the **.story.js** suffix.
      `
    }, {
      title: 'Using Chapters',
      info: `
        This project uses the [chapters addon](https://github.com/Checkfront/react-storybook-addon-chapters).
        This allows for easy sectioning of content with code blocks. Please refer to the addon docs
        for usage information. Using this addon is optional, but highly recommended (b/c it's pretty cool!).
      `
    }, {
      title: 'Site-level resources: context and styles',
      info: `
        Every story is wrapped with some special "decorator" components for providing some macro-level
        assets: [react context](https://reactjs.org/docs/context.html) and
        [site-level styles](https://semantic-ui.com/globals/site.html). If a story needs
        to extend the wrapping App component (ie. to provide extra context), then the story
        should export a factory function. This function will receive the App constructor. Here is
        a basic example of how to go about extending the app component.

        ~~~js
        export default (App) => {
          App.prototype.getChildContext() {
            return { appState: this.viewModel };
          }
          storiesOf(...);
        };
        ~~~
      `
    }]
  });
