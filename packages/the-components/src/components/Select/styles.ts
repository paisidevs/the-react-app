import { color, css, layout, space, styled, theme } from '@elandamor/tra-theme';
import { ChevronDown } from 'react-feather';
import ReactSelect from 'react-select/creatable';
import { Box } from '../Box';

export const Wrapper = styled(Box)<{ activated: boolean }>`
  .label {
    opacity: 0.6;
    top: 28%;
    /* transform: translateY(-50%); */
    pointer-events: none;
    transition: transform 0.195s ease-in-out;
    transform-origin: left top;

    ${({ activated }) =>
      activated &&
      css`
        transform: translateY(-28%)
          scale(${theme.fontSizes[1] / theme.fontSizes[3]});
      `}

    span {
      letter-spacing: 0.009375em;
    }
  }
`;

Wrapper.defaultProps = {
  color: 'text.default',
};

export const DefaultSelect = styled(ReactSelect)`
  ${color}
  ${layout}
  ${space}

  background: ${({ theme }) =>
    theme.isDark
      ? theme.colors.opacity.whites[2]
      : theme.colors.opacity.blacks[2]};
  border-radius: ${theme.space[1] / 2}px;
  position: relative;
  width: 100%;

  &:focus-within {
    ~ .label {
      opacity: 0.87;
      transform: translateY(-28%) scale(${theme.fontSizes[1] /
        theme.fontSizes[3]});
    }

    .react-select__single-value {
      opacity: 0.5;
    }
  }

  .react-select__control {
    background: none;
    border: none;
    border-bottom: ${theme.borders[1]} ${theme.colors.border.default};
    border-radius: ${theme.space[1] / 2}px;
    box-shadow: none;
    font-size: ${theme.fontSizes[3]}px;
    height: ${({ height }) => height};
    min-height: 56px;
    letter-spacing: .009375em;
    width: 100%;

    * {
      ${color}
    }

    &--is-focused {
      border-bottom-color: ${({ theme }) => theme.colors.primary.base};
    }
  }

  .react-select__menu {
    background-color: ${({ theme }) => theme.colors.background.surface};
  }

  .react-select__option {
    font-size: ${theme.fontSizes[2]}px;
    padding: 12px 16px;

    &--is-focused {
      background: ${({ theme }) =>
        theme.isDark
          ? theme.colors.opacity.whites[3]
          : theme.colors.opacity.blacks[3]};
    }
  }

  .react-select__value-container {
    padding: 16px 16px 0 16px;
  }
`;

DefaultSelect.defaultProps = {
  color: 'text.default',
  minHeight: '56px',
};

export const DropdownIndicator = styled(ChevronDown)<{ open: boolean }>`
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'none')};
`;
