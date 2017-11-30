import QUnit from 'steal-qunit';
import { ViewModel } from './playground';

// ViewModel unit tests
QUnit.module('@public/components/playground');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the playground component');
});
