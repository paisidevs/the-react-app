import { CreateStyled } from '@emotion/styled';
import { AlignItemsProps, BorderProps, BorderRadiusProps, BordersProps, BoxShadowProps, ColorProps, DisplayProps, FlexDirectionProps, FlexProps, FlexWrapProps, FontFamilyProps, FontSizeProps, FontWeightProps, HeightProps, JustifyContentProps, MaxHeightProps, MaxWidthProps, MinHeightProps, MinWidthProps, OverflowProps, PositionProps, SizeProps, SpaceProps, TextAlignProps, WidthProps, ZIndexProps } from 'styled-system';
import { theme } from './theme';
export interface StyledSystemProps extends AlignItemsProps, BorderProps, BordersProps, BorderRadiusProps, BoxShadowProps, ColorProps, DisplayProps, FlexDirectionProps, FlexProps, FontFamilyProps, FontSizeProps, FontWeightProps, FlexWrapProps, HeightProps, JustifyContentProps, MaxHeightProps, MaxWidthProps, MinHeightProps, MinWidthProps, OverflowProps, PositionProps, SizeProps, SpaceProps, TextAlignProps, WidthProps, ZIndexProps {
    color?: string | (string & string[]);
}
export declare type Theme = typeof theme;
export declare const styled: CreateStyled<{
    borders: import("styled-system").TLengthStyledSystem[];
    buttons: {
        primary: {
            color: string;
            border: import("styled-system").TLengthStyledSystem;
            borderColor: string;
        };
        secondary: {
            color: string;
            backgroundColor: string;
            border: import("styled-system").TLengthStyledSystem;
            borderColor: string;
        };
    };
    colors: {
        background: {
            base: string;
            surface: string;
        };
        border: {
            default: string;
        };
        intent: {
            success: string;
            warning: string;
            error: string;
            info: string;
        };
        modes: {
            dark: {
                background: {
                    base: string;
                    surface: string;
                };
                border: {
                    default: string;
                };
                intent: {
                    info: string;
                };
                text: {
                    default: string;
                };
            };
        };
        opacity: {
            transparent: string;
            blacks: string[];
            whites: string[];
        };
        primary: {
            base: string;
            dark: string;
            light: string;
        };
        secondary: {
            base: string;
            dark: string;
            light: string;
        };
        solid: {
            black: string;
            white: string;
        };
        text: {
            default: string;
        };
    };
    fonts: {
        sansSerif: string;
    };
    fontSizes: number[];
    fontWeights: number[];
    letterSpacings: number[];
    breakpoints: string[];
    maxWidths: number[];
    minWidths: number[];
    space: number[];
}>;
export { css } from '@emotion/core';
export { default as shouldForwardProp } from '@styled-system/should-forward-prop';
export * from 'styled-system';
export { Global } from './components/Global';
export { ThemeProvider, useTheme } from './components/ThemeProvider';
export { theme } from './theme';
