/**
 * This file allows us to responsibly include Semantic UI elements.
 * Modules should be able to import `semantic-ui/[element]`
 * where "element" is one of the keys listed below.
 * Examples:
 *
 *   import Button from 'semantic-ui/button';
 *   import Table from 'semantic-ui/table';
 *
 * Most elements automatically include any "child" elements. For example,
 * table rows are available on the Table component as Table.Row. The
 * same applies for all elements (eg. Button.Content, Modal.Header, etc).
 * Each element will include its cooresponding CSS file accordingly.
 */

const COMP_ROOT = 'semantic-ui-react/dist/es/';
// const CSS_ROOT = 'semantic-ui-css/components/';

const systemConfig = {
  map: {
    // 'semantic-ui-react': '@empty',
    // 'semantic-ui-css': '@empty'
  },
  meta: {}
};

const config = {
  addons: {
    'confirm': {
      module: 'Confirm/Confirm',
      css: ['button', 'modal']
    },
    'portal': {
      module: 'Portal/Portal',
      css: []
    },
    'radio': {
      module: 'Radio/Radio',
      css: ['checkbox']
    },
    'ref': {
      module: 'Ref/Ref',
      css: []
    },
    'responsive': {
      module: 'Responsive/Responsive',
      css: []
    },
    'select': {
      module: 'Select/Select',
      css: ['form', 'dropdown']
    },
    'textarea': {
      module: 'TextArea/TextArea',
      css: ['form']
    }
  },
  behaviors: {
    'visibility': {
      module: 'Visibility/Visibility',
      css: ['form', 'dropdown']
    }
  },
  collections: {
    'breadcrumb': {
      module: 'Breadcrumb/Breadcrumb',
      css: ['breadcrumb', 'icon']
    },
    'form': {
      module: 'Form/Form',
      css: ['form', 'input', 'textarea', 'select', 'radio', 'checkbox', 'dropdown', 'button']
    },
    'grid': {
      module: 'Grid/Grid',
      css: ['grid']
    },
    'menu': {
      module: 'Menu/Menu',
      css: ['menu', 'icon']
    },
    'message': {
      module: 'Message/Message',
      css: ['message', 'icon']
    },
    'table': {
      module: 'Table/Table',
      css: ['table', 'icon']
    }
  },
  elements: {
    'button': {
      module: 'Button/Button',
      css: ['button', 'icon', 'label']
    },
    'container': {
      module: 'Container/Container',
      css: ['container']
    },
    'divider': {
      module: 'Divider/Divider',
      css: ['divider']
    },
    'flag': {
      module: 'Flag/Flag',
      css: ['flag']
    },
    'header': {
      module: 'Header/Header',
      css: ['header', 'icon', 'image']
    },
    'icon': {
      module: 'Icon/Icon',
      css: ['icon']
    },
    'image': {
      module: 'Image/Image',
      css: ['image', 'dimmer', 'label']
    },
    'input': {
      module: 'Input/Input',
      css: ['input', 'button', 'icon', 'label']
    },
    'label': {
      module: 'Label/Label',
      css: ['label', 'icon', 'image']
    },
    'list': {
      module: 'List/List',
      css: ['list', 'image', 'icon']
    },
    'loader': {
      module: 'Loader/Loader',
      css: ['loader']
    },
    'loader': {
      module: 'Loader/Loader',
      css: ['loader']
    },
    'rail': {
      module: 'Rail/Rail',
      css: ['rail']
    },
    'reveal': {
      module: 'Reveal/Reveal',
      css: ['reveal']
    },
    'segment': {
      module: 'Segment/Segment',
      css: ['segment']
    },
    'step': {
      module: 'Step/Step',
      css: ['step', 'icon']
    }
  },
  modules: {
    'accordion': {
      module: 'Accordion/Accordion',
      css: ['accordion', 'icon']
    },
    'checkbox': {
      module: 'Checkbox/Checkbox',
      css: ['checkbox']
    },
    'dimmer': {
      module: 'Dimmer/Dimmer',
      css: ['dimmer', 'transition']
    },
    'dropdown': {
      module: 'Dropdown/Dropdown',
      css: ['dropdown', 'flag', 'icon', 'image', 'label', 'transition']
    },
    'embed': {
      module: 'Embed/Embed',
      css: ['embed', 'icon']
    },
    'modal': {
      module: 'Modal/Modal',
      css: ['modal', 'button', 'icon', 'dimmer', 'transition']
    },
    'popup': {
      module: 'Popup/Popup',
      css: ['popup', 'transition']
    },
    'progress': {
      module: 'Progress/Progress',
      css: ['progress']
    },
    'rating': {
      module: 'Rating/Rating',
      css: ['rating']
    },
    'search': {
      module: 'Search/Search',
      css: ['search', 'input', 'transition']
    },
    'sidebar': {
      module: 'Sidebar/Sidebar',
      css: ['sidebar']
    },
    'sticky': {
      module: 'Sticky/Sticky',
      css: ['sticky']
    },
    'tab': {
      module: 'Tab/Tab',
      css: ['tab', 'segment', 'grid', 'menu']
    },
    'transition': {
      module: 'Transition/Transition',
      css: ['transition']
    }
  }
};

Object.keys(config).forEach(categoryName => {
  const category = config[categoryName];
  Object.keys(category).forEach(moduleName => {
    const module = category[moduleName];
    // TODO: dynamically build a module to import both the
    // JS and CSS and export the JS.
    systemConfig.map['semantic-ui-react/' + moduleName] = COMP_ROOT + categoryName + '/' + module.module;
  });
});

module.exports = { systemConfig };
