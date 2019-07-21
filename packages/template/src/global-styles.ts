import { createGlobalStyle } from 'styled-components';
import 'typeface-roboto';
import theme from './theme';

export default createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }

  /* *::-webkit-scrollbar {
    width: ${theme.space[1] / 2}px !important;
    height: ${theme.space[1] / 4}px !important;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.isDark
        ? theme.colors.opacity.whites[5]
        : theme.colors.opacity.blacks[5]};
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      theme.isDark
        ? theme.colors.opacity.blacks[7]
        : theme.colors.opacity.whites[7]};
  } */

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
