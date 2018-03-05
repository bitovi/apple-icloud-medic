import QUnit from 'steal-qunit';
import ViewModel from './rule.viewmodel';
import './rule-content/rule-content-test';

// ViewModel unit tests
QUnit.module('@public/app/pages/rule');

QUnit.test('toggleEdit toggles editing state', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.isEditing, false);
  vm.toggleEdit(new Event('click'));
  QUnit.equal(vm.isEditing, true);
});
