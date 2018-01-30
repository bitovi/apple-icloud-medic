import QUnit from 'steal-qunit';
import ViewModel from './page-header.viewmodel';

// ViewModel unit tests
QUnit.module('@public/components/page-header');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the PageHeader component');
});