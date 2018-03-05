import QUnit from 'steal-qunit';
import ViewModel from './project-content.viewmodel';

// ViewModel unit tests
QUnit.module('@public/app/pages/project/project-content');

QUnit.test('selects the first tab by default', function(){
  var vm = new ViewModel({ tabs: [{ key: 123 }, { key: 456 }] });
  QUnit.equal(vm.selectedTabKey, 123);
  QUnit.equal(vm.selectedTabIndex, 0);
});
