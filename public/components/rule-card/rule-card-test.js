import QUnit from 'steal-qunit';
import ViewModel from './rule-card.viewmodel';

// ViewModel unit tests
QUnit.module('@public/components/rule-card');

QUnit.asyncTest('handleRemove calls destroy on the rule instance', () => {
  const vm = new ViewModel({
    rule: {
      destroy() {
        QUnit.ok(true, 'destroy method called');
        QUnit.start();
        return Promise.resolve();
      }
    }
  });
  vm.handleRemove();
});
