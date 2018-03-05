import QUnit from 'steal-qunit';
import ViewModel from './project-card.viewmodel';

// ViewModel unit tests
QUnit.module('@public/components/project-card');

QUnit.asyncTest('handleRemove calls destroy on the project instance', () => {
  const vm = new ViewModel({
    project: {
      destroy() {
        QUnit.ok(true, 'destroy method called');
        QUnit.start();
        return Promise.resolve({ id: 123 });
      }
    }
  });
  vm.handleRemove();
});
