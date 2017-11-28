import React from 'react';
import DefineList from 'can-define/list/list';

const oldType = DefineList.prototype.__type;
DefineList.prototype.__type = function(newVal) {
  if (React.isValidElement(newVal)) {
    return newVal;
  }
  return oldType.call(this, newVal);
}
