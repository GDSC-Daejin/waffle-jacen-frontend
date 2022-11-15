import 'styled-components';
// import { lightColors } from './lightColors';
import { assetColors } from './assetColors';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { windowSize } from './windowSize';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof assetColors;
    windowSize: typeof windowSize;
    fontSize: typeof fontSizes;
    fontWeight: typeof fontWeights;
  }
}
// 스타일에 대한 타입 지정
