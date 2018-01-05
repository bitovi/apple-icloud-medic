import QUnit from 'steal-qunit';
import Executions from './executions';

QUnit.module('executions');

QUnit.test('getList', function(){
  QUnit.stop();
  Executions.getList().then(function(items) {
    QUnit.ok(items.length);
    QUnit.start();
  });
});
