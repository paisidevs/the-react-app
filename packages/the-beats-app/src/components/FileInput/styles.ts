import { Box } from '@elandamor/tra-components';
import {
  color,
  css,
  layout,
  shouldForwardProp,
  space,
  styled,
  theme,
} from '@elandamor/tra-theme';

export const Wrapper = styled(Box)<{ activated: boolean }>`
  .label {
    opacity: 0.6;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    transition: transform 0.195s ease-in-out;
    transform-origin: left top;

    ${({ activated }) =>
      activated &&
      css`
        transform: translateY(-80%)
          scale(${theme.fontSizes[1] / theme.fontSizes[3]});
      `}

    span {
      letter-spacing: 0.009375em;
    }
  }

  .c-adornment--start {
    opacity: 0;

    ${({ activated }) =>
      activated &&
      css`
        opacity: 0.5;
      `}
  }
`;

Wrapper.defaultProps = {
  color: 'text.default',
};

export const DefaultInput = styled('input', { shouldForwardProp })`
  ${color}
  ${layout}
  ${space}
  background: ${({ theme }) =>
    theme.isDark
      ? theme.colors.opacity.whites[2]
      : theme.colors.opacity.blacks[2]};
  border: none;
  border-bottom: ${theme.borders[1]} ${theme.colors.border.default};
  border-radius: ${theme.space[1] / 2}px;
  font-size: ${theme.fontSizes[3]}px;
  letter-spacing: .009375em;
  padding-top: ${theme.space[2]}px;
  position: relative;
  width: 100%;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: ${({ theme }) =>
      theme.isDark
        ? theme.colors.opacity.whites[2]
        : theme.colors.opacity.blacks[2]};
    border-bottom: ${theme.borders[1]} ${theme.colors.border.default};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text.default};
    -webkit-box-shadow: none;
    transition: background-color 5000s ease-in-out 0s;

    &:focus {
      border-bottom-color: ${({ theme }) => theme.colors.primary.base};
    }
  }

  &:focus,
  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.primary.base};
    outline: none;
  }

  &:focus ~ .label {
    opacity: 0.87;
    transform: translateY(-80%) scale(${theme.fontSizes[1] /
      theme.fontSizes[3]});
  }

  &:focus ~ .c-adornment--start {
    opacity: 0.5;
  }
`;

DefaultInput.defaultProps = {
  color: 'text.default',
  height: '56px',
};

export const Adornment = styled(Box)`
  height: 100%;
  opacity: 0.5;
  position: absolute;
  top: 0;
  width: 56px;
  ${color}
  ${layout}
  ${space}

  &:focus,
  &:hover {
    opacity: 0.87;
  }
`;

Adornment.defaultProps = {
  alignItems: 'center',
  display: 'flex',
  color: 'text.default',
  justifyContent: 'center',
};
