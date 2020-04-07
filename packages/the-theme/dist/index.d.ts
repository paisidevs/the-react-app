/// <reference types="react" />
import { CreateStyled } from '@emotion/styled';
import { BordersProps, BoxShadowProps, ColorProps, FlexboxProps, GridProps, LayoutProps, OverflowProps, PositionProps, SpaceProps, TypographyProps } from 'styled-system';
export interface StyledSystemProps extends BordersProps, BoxShadowProps, ColorProps, FlexboxProps, GridProps, LayoutProps, OverflowProps, PositionProps, SpaceProps, TypographyProps {
    as?: React.ElementType;
    color?: string | (string & string[]);
}
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
        blue: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        gray: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
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
