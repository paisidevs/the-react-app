import baseStyled, { CreateStyled } from '@emotion/styled';
import {
  AlignItemsProps,
  BorderProps,
  BorderRadiusProps,
  BordersProps,
  BoxShadowProps,
  ColorProps,
  DisplayProps,
  FlexDirectionProps,
  FlexProps,
  FlexWrapProps,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  HeightProps,
  JustifyContentProps,
  MaxHeightProps,
  MaxWidthProps,
  MinHeightProps,
  MinWidthProps,
  OverflowProps,
  PositionProps,
  SizeProps,
  SpaceProps,
  TextAlignProps,
  WidthProps,
  ZIndexProps,
} from 'styled-system';
import { theme } from './theme';

export interface StyledSystemProps
  extends AlignItemsProps,
    BorderProps,
    BordersProps,
    BorderRadiusProps,
    BoxShadowProps,
    ColorProps,
    DisplayProps,
    FlexDirectionProps,
    FlexProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    FlexWrapProps,
    HeightProps,
    JustifyContentProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    MinWidthProps,
    OverflowProps,
    PositionProps,
    SizeProps,
    SpaceProps,
    TextAlignProps,
    WidthProps,
    ZIndexProps {
  color?: string | (string & string[]);
}

export type Theme = typeof theme;
export const styled = baseStyled as CreateStyled<Theme>;

export { css } from '@emotion/core';
export { default as shouldForwardProp } from '@styled-system/should-forward-prop';
export * from 'styled-system';
export { Global } from './components/Global';
export { ThemeProvider, useTheme } from './components/ThemeProvider';
export { theme } from './theme';
