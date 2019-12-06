import { css, Global as GlobalStyles } from '@emotion/core';
import normalize from 'emotion-normalize';
import React, { FC } from 'react';
import 'typeface-roboto';
import { theme } from '../theme';

interface IGlobalProps {
  styles?: any;
}

export const Global: FC<IGlobalProps> = ({ styles }) => {
  return (
    <GlobalStyles
      styles={css`
        ${normalize}

        * {
          box-sizing: border-box;
        }

        html,
        body {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-feature-settings: 'liga', 'kern' 1;
          font-family: ${theme.fonts.sansSerif};
          font-kerning: normal;
          height: 100%;
          text-rendering: optimizeLegibility;
          width: 100%;
        }

        ${styles}
      `}
    />
  );
};
