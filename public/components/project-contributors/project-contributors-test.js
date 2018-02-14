import QUnit from 'steal-qunit';
import ViewModel from './project-contributors.viewmodel';

// ViewModel unit tests
QUnit.module('@public/components/project-contributors');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the ProjectContributors component');
});