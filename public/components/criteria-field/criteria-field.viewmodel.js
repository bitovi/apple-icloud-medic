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
      // Due to the fact that "onChange" events only get completed values,
      // we have to do merge data manually.
      const copy = Object.assign({}, val);
      this.criteria.forEach(criterion => {
        if (copy[criterion.key]) {
          Object.assign(criterion, copy[criterion.key]);
          delete copy[criterion.key];
        }
      });
      // Any new values should be pushed onto the end
      Object.keys(copy).forEach(key => {
        this.criteria.push({
          key,
          type: copy[key].type,
          pattern: copy[key].pattern
        });
      });
    }
  },
  onChange: 'any'
});

export default CriteriaFieldVM;
