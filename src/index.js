import config from './config';
import uiColors from './ui-colors';
import tokenColors from './token-colors';

const theme = {
  ...config.theme,
  colors: uiColors,
  tokenColors
};

console.log(JSON.stringify(theme));
