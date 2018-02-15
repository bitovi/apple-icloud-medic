/**
 * This module takes a source string and recursively evaluates
 * known LESS functions using the polished module.
 *
 *   lighten(saturate(#333, 15%), 5%) => #4a3636
 */

import balanced from 'node-balanced';
import * as polished from 'polished';

const REG_FUNC_HEAD = /[a-z-]+\(/;
const REG_PARTIAL_COLOR_VAL = /^(?:rgba?|hsla?)\([^)]+$/; // matches rgb/hsl values without a closing paren

const FUNC_MAP = {
  spin: (color, deg) => {
    deg = parseFloat(deg, 10);
    return adjustHue(deg, color);
  },
  mix: (color1, color2, amt = 50) => {
    amt = parseFloat(amt, 10)/100;
    return mix(amt, color1, color2);
  },
  fade: (color, amt) => {
    const alpha = parseFloat(amt, 10)/100;
    const rgb = parseToRgb(color);
    return rgba(Object.assign(rgb, { alpha }));
  }
};

['tint', 'shade'].forEach(func => {
  FUNC_MAP[func] = (color, amt) => {
    amt = parseFloat(amt, 10)/100;
    return polished[func](1 - amt, color);
  };
});

['lighten', 'darken', 'saturate', 'desaturate', ['fadein', 'opacify'], ['fadeout', 'transparentize']]
  .map(fn => typeof fn === 'string' ? [fn, fn] : fn)
  .forEach(func => {
    FUNC_MAP[func[0]] = (color, amt) => {
      amt = parseFloat(amt, 10)/100;
      return polished[func[1]](amt, color);
    };
  });

const doReplace = (source) => {
  return balanced.replacements({
    source,
    head: REG_FUNC_HEAD, // optional (defalut: open)
    open: '(',
    close: ')',
    replace: function (source, head, tail) {
      const func = head.slice(0, -1);

      if (FUNC_MAP[func]) {
        const args = doReplace(source).split(',').reduce((_args, val) => {
          // If the last value in _args is a partial rgb/hsl value, keep concatenating
          if (_args.length && REG_PARTIAL_COLOR_VAL.test(_args[_args.length - 1])) {
            _args[_args.length - 1] += ',' + val.trim();
          } else {
            _args.push(val.trim());
          }
          return _args;
        }, []);
        return FUNC_MAP[func].apply(null, args);
      }

      return head + source + tail;
    }
  });
};

export default doReplace;
