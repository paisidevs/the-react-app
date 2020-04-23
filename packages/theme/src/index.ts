import baseStyled, { CreateStyled } from '@emotion/styled';
import {
  BordersProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  OverflowProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import { Theme } from './theme';

export interface StyledSystemProps
  extends BordersProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    OverflowProps,
    PositionProps,
    SpaceProps,
    TypographyProps {
  as?: React.ElementType;
  color?: string | (string & string[]);
}

export const styled = baseStyled as CreateStyled<Theme>;

export { css, keyframes } from '@emotion/core';
export { default as shouldForwardProp } from '@styled-system/should-forward-prop';
export * from 'styled-system';
export { Global } from './components/Global';
export { ThemeProvider, useTheme } from './components/ThemeProvider';
export { theme } from './theme';
