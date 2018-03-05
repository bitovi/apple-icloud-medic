import QUnit from 'steal-qunit';
import route from 'can-route-pushstate';
import ViewModel from './project.viewmodel';
import './project-content/project-content-test';

// ViewModel unit tests
QUnit.module('@public/app/pages/project');

QUnit.test('newProjectSuccess sets the projectId on route data', function(){
  const vm = new ViewModel();
  route.data = {};
  vm.newProjectSuccess({ id: 1234 });
  QUnit.equal(route.data.projectId, 1234);
});
