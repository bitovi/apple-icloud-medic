import React from 'react';
import PropTypes from 'prop-types';
import DefineMap from 'can-define/map/map';
import { storiesOf } from '@storybook/react';
import DataProvider from './data-provider';

const mockData = [
  { id: 1, firstName: 'Mick', lastName: 'McGrath' },
  { id: 2, firstName: 'Bianca', lastName: 'Gando' },
  { id: 3, firstName: 'Ryan', lastName: 'Wheale' },
  { id: 4, firstName: 'Ivan', lastName: 'Herndon' },
];

const PersonModel = DefineMap.extend({
  connection: {
    name: 'sample-connection',
    get: (query) => Promise.resolve(mockData.filter(item => item.id === query.id)[0]),
    getList: () => Promise.resolve(mockData)
  }
}, {
  id: 'number',
  firstName: 'string',
  lastName: 'string'
});

const PersonRenderer = ({ person }) => {
  return (
    <div>
      ID: {person.id} <br />
      First name: {person.firstName} <br />
      Last name: {person.lastName} <hr />
    </div>
  );
};
PersonRenderer.propTypes = { person: PropTypes.object };

const ListRenderer = ({ people }) => {
  return people.map(item => <PersonRenderer person={item} key={item.id} />);
};
ListRenderer.propTypes = { people: PropTypes.array };

storiesOf('Components', module)
  .addWithChapters('DataProvider', {
    chapters: [{
      info: `
This is a "higher order component" for wrapping "render" components.
Given a Model with a connection, this will take care of loading data either
by "id" (single item) or by "query" (list of items).
This handles "loading" and "error" states and evenutally renders the underlying
component with its required data. The underlying components will not be rendered
until the data is loaded - so components can always expect data to be there. The
underlying components can have their own state, but should not need to
worry about loading data or the states therein.

~~~
const RenderComponent = ({ project }) => {
  return &lt;div&gt;{project.id} - {project.enabled}&lt;/div&gt;;
};
const Component = DataProvider(RenderComponent, PersonModel, 'project');

&lt;Component id={1234} query={{ enabled: true }} /&gt;
~~~

**Parent components can also pass data directly!**

~~~
&lt;Component project={{ id: 1, enabled: true }} /&gt;
~~~
      `,
      sections: [{
        options: { allowSourceToggling: false },
        title: 'Load data for a single item, given an ID',
        info: `~~~
const PersonRenderer = ({ person }) => {
  return (
    &lt;div&gt;
      ID: {person.id} &lt;br /&gt;
      First name: {person.firstName} &lt;br /&gt;
      Last name: {person.lastName} &lt;hr /&gt;
    &lt;/div&gt;
  );
};
const ItemComponent = DataProvider(PersonRenderer, PersonModel, 'person');
&lt;ItemComponent id={1} /&gt;
        ~~~`,
        sectionFn: () => {
          const ItemComponent = DataProvider(PersonRenderer, PersonModel, 'person');
          return (
            <ItemComponent id={1} />
          );
        }
      }, {
        options: { allowSourceToggling: false },
        title: 'Load data for a list of items, given a query',
        info: `~~~
const ListRenderer = ({ people }) => {
  // Notice that we are using the person component and passing the data directly.
  return people.map(item => &lt;PersonRenderer person={item} key={item.id} /&gt;);
};
const ListComponent = DataProvider(ListRenderer, PersonModel, 'people');
&lt;ListComponent query={{foo: 'bar'}} /&gt;
        ~~~`,
        sectionFn: () => {
          const ListComponent = DataProvider(ListRenderer, PersonModel, 'people');
          return (
            <ListComponent query={{foo: 'bar'}} />
          );
        }
      }, {
        options: { allowSourceToggling: false },
        title: 'Loading state',
        sectionFn: () => {
          const Model = DefineMap.extend({
            connection: {
              name: 'never-connection',
              getList: () => new Promise(() => {})
            }
          }, {});
          const LoadingComponent = DataProvider(() => {}, Model);
          return (
            <div style={{position: 'relative', height: '200px'}}>
              <LoadingComponent />
            </div>
          );
        }
      }, {
        options: { allowSourceToggling: false },
        title: 'Error state',
        sectionFn: () => {
          const Model = DefineMap.extend({
            connection: {
              name: 'error-connection',
              getList: () => Promise.reject(new Error('Example error message'))
            }
          }, {});
          const ErrorComponent = DataProvider(() => {}, Model);
          return (
            <ErrorComponent />
          );
        }
      }]
    }]
  });
