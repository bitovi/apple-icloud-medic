import QUnit from 'steal-qunit';
import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsPage from '@public/app/pages/projects/projects';

// ViewModel unit tests
QUnit.module('@public/app/pages/projects');

QUnit.test('Renders projects page', function(){
  ReactDOM.render(<ProjectsPage />, document.getElementById('application'));
  const projectsComponent = document.querySelector('.projects-page');
  QUnit.equal(projectsComponent.nodeName, 'DIV');
});
