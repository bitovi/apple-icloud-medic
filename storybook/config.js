import React from 'react';
import { storiesOf, configure, addDecorator, setAddon } from '@storybook/react';
import { Wrapper, MockApp, makeTitleFromPath, getScopeFromPath } from './assets/util';

// Create a System object for the shared/env file to read
window.System = {
  env: 'storybook'
};

// register/configure addons (some addons only need requiring)
import '@storybook/addon-knobs/register';
import chaptersAddon, { setDefaults as setChaptersDefaults } from 'react-storybook-addon-chapters';
setChaptersDefaults({
  sectionOptions: {
    showSource: false,
    allowSourceToggling: true,
    showPropTables: false,
    allowPropTablesToggling: false
  }
});
setAddon(chaptersAddon);

// add a global decorator to wrap around all stories
addDecorator(story => (
  <Wrapper>
    <MockApp>{story()}</MockApp>
  </Wrapper>
));

// Load all guides
const guides = require.context('../docs/guides', true, /\.(js|md)$/);
// Load jsdocs (must generate files first: `npm run jsdoc`)
const jsdocs = require.context('../docs/jsdocs', true, /\.md$/);
// Load all files with a .story.js or -story.js suffix
const publicStories = require.context('../public', true, /[\.\-]story\.js$/);

function loadStories() {
  guides.keys().forEach(key => {
    if (/\.md$/.test(key)) {
      const title = makeTitleFromPath(key);
      const content = guides(key);
      storiesOf('Guides', module).add(title, () => (
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      ));
      return;
    }
    guides(key);
  });
  jsdocs.keys().forEach(key => {
    const title = makeTitleFromPath(key);
    const scope = getScopeFromPath(key);
    const content = jsdocs(key);
    storiesOf(`JSDocs/${scope}`, module).add(title, () => (
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    ));
  });
  publicStories.keys().forEach(key => {
    const _export = publicStories(key);
    // If a story exports a default function, then call it with some context
    if (typeof _export.default === 'function') {
      _export.default(MockApp);
    }
  });
}

configure(loadStories, module);
