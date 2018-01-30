import QUnit from 'steal-qunit';
import ViewModel from './projects.viewmodel';

// ViewModel unit tests
QUnit.module('@public/app/pages/projects');

QUnit.test('Should toggle editing state', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.isEditing, false);
  vm.toggleEdit(new Event('click'));
  QUnit.equal(vm.isEditing, true);
});
