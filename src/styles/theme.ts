import { windowSize } from './windowSize';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { assetColors } from './assetColors';

import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: assetColors,
  windowSize: windowSize,
  fontSize: fontSizes,
  fontWeight: fontWeights,
};
