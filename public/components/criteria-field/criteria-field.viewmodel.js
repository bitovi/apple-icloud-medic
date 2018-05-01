import DefineMap from 'can-define/map/map';
import Criterion from '@public/models/criterion';

const CriteriaFieldVM = DefineMap.extend('CriteriaFieldVM', {
  criteria: {
    Type: Criterion.List,
    default: () => []
  },
  operators: {
    type: 'any',
    default: () => Criterion.operators
  },
  canAddCriterion: {
    get() {
      return !this.criteria.length || !!this.criteria.every(criterion => criterion.isComplete);
    }
  },
  addCriterion() {
    this.criteria.push(new Criterion({}));
  },
  handleValueChange(idx, prop, val) {
    const { criteria, onChange } = this;
    criteria[idx][prop] = val;

    if (typeof onChange === 'function') {
      onChange(criteria.reduce((obj, criterion) => {
        if (!criterion.isComplete) return obj;
        return Object.assign(obj, {
          [criterion.key]: {
            type: criterion.type,
            pattern: criterion.pattern
          }
        });
      }, {}));
    }
  }
});

export default CriteriaFieldVM;
