import QUnit from 'steal-qunit';
import { ViewModel } from './executions-table';

// ViewModel unit tests
QUnit.module('executions-table component');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the execution-table component');
});
