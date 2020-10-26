import baseStyled, { CreateStyled } from '@emotion/styled';
import { Theme } from './theme';

export const styled = baseStyled as CreateStyled<Theme>;

export { css, keyframes } from '@emotion/core';
export { theme } from './theme';
