import QUnit from 'steal-qunit';
import ProjectContributors from './project-contributors';

QUnit.module('project-contributors');

QUnit.test('getList should return a list', function(assert){
  const done = assert.async();
  ProjectContributors.getList().then(function(items) {
    QUnit.ok(items.length);
    done();
  });
});

QUnit.test('get should return a contributor', function(assert){
  const done = assert.async();
  ProjectContributors.get({id: 101}).then(function(item) {
    assert.equal(item.name, 'Nikunj Virani');
    done();
  });
});
