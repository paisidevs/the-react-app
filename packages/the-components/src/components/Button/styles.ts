import {
  borders,
  color,
  layout,
  shouldForwardProp,
  space,
  styled,
  StyledSystemProps,
  theme,
  variant,
} from '@app/theme';

const variants = variant({
  variants: {
    icon: {
      borderRadius: '100%',
      height: '40px',
      minHeight: '40px',
      minWidth: '40px',
      width: '40px',
    },
    primary: {
      backgroundColor: 'primary.base',
      borderRadius: 2,
      color: 'text.onPrimary',
      minHeight: '56px',
      width: '100%',
    },
  },
});

const Wrapper = styled('button', { shouldForwardProp })<StyledSystemProps>`
  align-items: center;
  background: transparent;
  border: none;
  display: flex;
  font-size: ${theme.fontSizes[2]}px;
  font-weight: ${theme.fontWeights[4]};
  justify-content: center;
  letter-spacing: 0.0892857143em;
  outline: none;
  overflow: hidden;
  padding: ${theme.space[1]}px;
  position: relative;
  text-transform: uppercase;
  z-index: 1;

  ${borders};
  ${color};
  ${layout};
  ${space}
  ${variants}

  &:after,
  &:before {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  &:active {
    transform: scale(0.95);
  }

  &[disabled] {
    opacity: 0.5;
  }

  &:not([disabled]) {
    &:focus {
      &:before {
        background-color: ${({ theme }) =>
          theme.isDark
            ? theme.colors.opacity.whites[3]
            : theme.colors.opacity.blacks[3]};
      }
    }

    &:hover {
      &:before {
        background-color: ${({ theme }) =>
          theme.isDark
            ? theme.colors.opacity.whites[2]
            : theme.colors.opacity.blacks[2]};
      }
    }
  }
`;

export default Wrapper;
