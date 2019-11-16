import { ThemedStyledInterface } from 'styled-components';
import { AlignItemsProps, BorderProps, BorderRadiusProps, BordersProps, BoxShadowProps, ColorProps, DisplayProps, FlexDirectionProps, FlexProps, FlexWrapProps, FontFamilyProps, FontSizeProps, FontWeightProps, HeightProps, JustifyContentProps, MaxHeightProps, MaxWidthProps, MinHeightProps, MinWidthProps, OverflowProps, PositionProps, SizeProps, SpaceProps, TextAlignProps, WidthProps, ZIndexProps } from 'styled-system';
export interface StyledSystemProps extends AlignItemsProps, BorderProps, BordersProps, BorderRadiusProps, BoxShadowProps, ColorProps, DisplayProps, FlexDirectionProps, FlexProps, FontFamilyProps, FontSizeProps, FontWeightProps, FlexWrapProps, HeightProps, JustifyContentProps, MaxHeightProps, MaxWidthProps, MinHeightProps, MinWidthProps, OverflowProps, PositionProps, SizeProps, SpaceProps, TextAlignProps, WidthProps, ZIndexProps {
    color?: string | (string & string[]);
}
declare const theme: {
    borders: (string | number)[];
    buttons: {
        primary: {
            color: string;
            border: string | number;
            borderColor: string;
        };
        secondary: {
            color: string;
            backgroundColor: string;
            border: string | number;
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
            successDark: string;
            successLight: string;
            warning: string;
            warningDark: string;
            warningLight: string;
            error: string;
            errorDark: string;
            errorLight: string;
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
};
export declare type Theme = typeof theme;
declare const styled: ThemedStyledInterface<{
    borders: (string | number)[];
    buttons: {
        primary: {
            color: string;
            border: string | number;
            borderColor: string;
        };
        secondary: {
            color: string;
            backgroundColor: string;
            border: string | number;
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
            successDark: string;
            successLight: string;
            warning: string;
            warningDark: string;
            warningLight: string;
            error: string;
            errorDark: string;
            errorLight: string;
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
export * from 'styled-system';
export { theme, styled };
