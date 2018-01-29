import QUnit from 'steal-qunit';
import { ViewModel } from './playground';

// ViewModel unit tests
QUnit.module('@public/components/playground');

QUnit.skip('TODO: Add tests.', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the playground component');
});
