import { createGlobalStyle } from 'styled-components';
import { theme } from 'the-theme';
import 'typeface-roboto';

export default createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }

  html,
  body,
  #app {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.background.base};
    color: ${({ theme }) => theme.colors.text.default};
    font-family: ${theme.fonts.sansSerif};
    font-feature-settings: 'liga', 'kern' 1;
    font-kerning: normal;
    font-weight: ${theme.fontWeights[3]};
    margin: 0;
    height: 100%;
    padding: 0;
    text-rendering: optimizeLegibility;
    width: 100%;
  }

  html {
    overflow-x: hidden;
  }

  [href] {
    color: ${({ theme }) => theme.colors.intent.info};
    text-decoration: none;
  }
`;
