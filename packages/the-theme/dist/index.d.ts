import { CreateStyled } from '@emotion/styled';
import { BordersProps, BoxShadowProps, ColorProps, FlexboxProps, LayoutProps, OverflowProps, PositionProps, SpaceProps, TypographyProps } from 'styled-system';
import { theme } from './theme';
export interface StyledSystemProps extends FlexboxProps, BordersProps, BoxShadowProps, ColorProps, LayoutProps, OverflowProps, PositionProps, SpaceProps, TypographyProps {
    color?: string | (string & string[]);
}
export declare type Theme = typeof theme;
export declare const styled: CreateStyled<{
    isDark: boolean;
    borders: import("styled-system").TLengthStyledSystem[];
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
                primary: {
                    base: string;
                };
                text: {
                    default: string;
                    onPrimary: string;
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
            onPrimary: string;
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
    radii: number[];
}>;
export { css, keyframes } from '@emotion/core';
export { default as shouldForwardProp } from '@styled-system/should-forward-prop';
export * from 'styled-system';
export { Global } from './components/Global';
export { ThemeProvider, useTheme } from './components/ThemeProvider';
export { theme } from './theme';
