import { css, cssNormalize } from '@app/theme';

export const globalStyles = css`
  ${cssNormalize}

  html, body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: 'liga', 'kern' 1;
    font-kerning: normal;
    height: 100%;
    text-rendering: optimizeLegibility;
    width: 100%;
  }
`;
