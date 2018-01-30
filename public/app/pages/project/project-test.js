import QUnit from 'steal-qunit';
import ViewModel from './project.viewmodel';

// ViewModel unit tests
QUnit.module('@public/app/pages/project');

QUnit.test('toggles the edit state', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.edit, false);
  vm.toggleEdit();
  QUnit.equal(vm.edit, true);
});
