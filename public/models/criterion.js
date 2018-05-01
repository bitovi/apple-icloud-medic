import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

// This data came from the StackStorm UI
const operators = [
  { text: '-- operator --', value: '' },
  { text: 'Regular expression match (regex)', value: 'regex' },
  { text: 'Case-insensitive regular expression match (iregex)', value: 'iregex' },
  { text: 'Wildcard match (matchwildcard)', value: 'matchwildcard' },
  { text: 'Equals (eq)', value: 'eq' },
  { text: 'Equals (equals)', value: 'equals' },
  { text: 'Not Equals (nequals)', value: 'nequals' },
  { text: 'Not Equals (neq)', value: 'neq' },
  { text: 'Equals Case Insensitive (ieq)', value: 'ieq' },
  { text: 'Equals Case Insensitive (iequals)', value: 'iequals' },
  { text: 'Contains (contains)', value: 'contains' },
  { text: 'Contains Case Insensitive (icontains)', value: 'icontains' },
  { text: 'Not Contains (ncontains)', value: 'ncontains' },
  { text: 'Not Contains Case Insensitive (incontains)', value: 'incontains' },
  { text: 'Starts With (startswith)', value: 'startswith' },
  { text: 'Starts With Case Insensitive (istartswith)', value: 'istartswith' },
  { text: 'Ends With (endswith)', value: 'endswith' },
  { text: 'Ends With Case Insensitive (iendswith)', value: 'iendswith' },
  { text: 'Less Than (lt)', value: 'lt' },
  { text: 'Less Than (lessthan)', value: 'lessthan' },
  { text: 'Greater Than (gt)', value: 'gt' },
  { text: 'Greater Than (greaterthan)', value: 'greaterthan' },
  { text: 'Earlier Than (td_lt)', value: 'td_lt' },
  { text: 'Earlier Than (timediff_lt)', value: 'timediff_lt' },
  { text: 'Later Than (td_gt)', value: 'td_gt' },
  { text: 'Later Than (timediff_gt)', value: 'timediff_gt' },
  { text: 'Exists (exists)', value: 'exists' },
  { text: 'Doesn\'t Exist (nexists)', value: 'nexists' }
];

const Criterion = DefineMap.extend('Criterion', {
  /* STATIC */
  operators
}, {
  /* PROTOTYPE */
  /** left operand */
  key: { type: 'string', value: '' },
  /** operator */
  type: { type: 'string', value: '' },
  /** right operand */
  pattern: { type: 'string', value: '' },
  /** whether or not all data is provided */
  isComplete: {
    type: 'boolean',
    get() {
      return !!this.key && !!this.type && !!this.pattern;
    }
  }
});

Criterion.List = DefineList.extend({
  '#': Criterion
});

export default Criterion;
