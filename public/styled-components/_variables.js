import { darken } from 'polished';

// brand colors
const brandPrimary = 'rgb(203,48,54)';
const brandSecondary = '#E5E8E9';

// greyscale
const black = darken(.5, brandPrimary);
const darkerGrey = '#333';
const darkGrey = '#777';
const grey = '#aaa';
const lightGrey = '#ccc';
const lighterGrey = '#eee';
const white = '#fff';

export default ({
  brandPrimary,
  brandSecondary,
  black,
  darkerGrey,
  darkGrey,
  grey,
  lightGrey,
  lighterGrey,
  white
});
