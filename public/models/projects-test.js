import QUnit from 'steal-qunit';
import Projects from './projects';

QUnit.module('projects');

QUnit.test('getList should return a list', function(assert){
  const done = assert.async();
  Projects.getList().then(function(items) {
    QUnit.ok(items.length);
    done();
  });
});
