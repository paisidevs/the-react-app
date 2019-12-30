import { css, fontSize, FontSizeProps, styled } from '@app/theme';
import { Flex } from '../..';

interface ILabelProps extends FontSizeProps {
  sronly?: boolean;
}

/**
 * @render react
 * @name Label component
 * @description Label component.
 * @example
 *  <Label>{label}</Label>
 */

const Label = styled(Flex)<ILabelProps>`
  ${fontSize};

  ${({ sronly }) =>
    sronly &&
    css`
      height: 0;
      opacity: 0;
      position: absolute;
    `}
`;

Label.defaultProps = {
  sronly: false,
};

export default Label;
