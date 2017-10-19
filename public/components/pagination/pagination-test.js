import QUnit from 'steal-qunit';
import { ViewModel } from './pagination';

// ViewModel unit tests
QUnit.module('medic/public/components/pagination');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the pagination component');
});
