import QUnit from 'steal-qunit';
import Executions from './executions';

QUnit.module('executions');

QUnit.test('getList', function(){
  stop();
  Executions.getList().then(function(items) {
    QUnit.equal(items.length, 10);
    start();
  });
});
