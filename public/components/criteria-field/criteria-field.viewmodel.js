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
  removeCriterion(idx) {
    this.criteria.splice(idx, 1);
    this.handleValueChange();
  },
  handleValueChange(idx, prop, val) {
    const { criteria, onChange } = this;
    if (prop) criteria[idx][prop] = val;

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
  },
  // passed from above
  label: 'string',
  value: {
    type: 'any',
    set(val) {
      this.criteria = Object.keys(val).map(key => ({
        key,
        type: val[key].type,
        pattern: val[key].pattern,
      }));
    }
  },
  onChange: 'any'
});

export default CriteriaFieldVM;
