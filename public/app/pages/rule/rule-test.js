import QUnit from 'steal-qunit';
import ViewModel from './rule.viewmodel';

// ViewModel unit tests
QUnit.module('@public/app/pages/rule');

QUnit.test('toggleEdit toggles editing state', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.isEditing, false);
  vm.toggleEdit(new Event('click'));
  QUnit.equal(vm.isEditing, true);
});

QUnit.test('selects the first tab by default', function(){
  var vm = new ViewModel({ tabs: [{ key: 123 }, { key: 456 }] });
  QUnit.equal(vm.selectedTabKey, 123);
  QUnit.equal(vm.selectedTabIndex, 0);
});
