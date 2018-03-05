import QUnit from 'steal-qunit';
import ViewModel from './rule-content.viewmodel';

// ViewModel unit tests
QUnit.module('@public/app/pages/rule/rule-content');

QUnit.test('selects the first tab by default', function(){
  var vm = new ViewModel({ tabs: [{ key: 123 }, { key: 456 }] });
  QUnit.equal(vm.selectedTabKey, 123);
  QUnit.equal(vm.selectedTabIndex, 0);
});
