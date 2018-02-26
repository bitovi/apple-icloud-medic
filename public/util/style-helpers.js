import { darken, saturate, getLuminance } from 'polished';

/**
 * Given a color, generates a slightly darkened color to be used
 * as a background color. See the StyledCard component for an example.
 * @param  {String} color
 * @return {String}
 */
const getDarkenedBg = (color) => {
  const lum = getLuminance(color);
  const dark = darken(0.06 + lum/10, saturate(0.1, color));
  return dark;
};
/**
 * Given a color, generates a slightly darkened color to be used
 * as a border color. See the StyledCard component for an example.
 * @param  {String} color
 * @return {String}
 */
const getDarkenedBorder = (color) => {
  const lum = getLuminance(color);
  return darken(0.08 + lum/8, saturate(0.1, color));
};
/**
 * Given a color, returns white or black based on the luminance
 * value of the input color.
 * @param  {String} color
 * @return {String}
 */
const getInverseLuminance = (color) => {
  const lum = getLuminance(color);
  return lum > 0.5 ? 'black' : 'white';
};

export { getDarkenedBg, getDarkenedBorder, getInverseLuminance };
