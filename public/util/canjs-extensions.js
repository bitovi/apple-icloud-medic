import React from 'react';
import DefineList from 'can-define/list/list';

// This ensures that when mapping a DefineList, React
// objects are not converted to DefineMaps.
const oldType = DefineList.prototype.__type;
DefineList.prototype.__type = function(newVal) {
  if (React.isValidElement(newVal)) {
    return newVal;
  }
  return oldType.call(this, newVal);
};
