import { StyledSystemProps } from '@app/theme';
import React, { FC } from 'react';
import { Text } from '../../typography';
import { Loader } from '../Loader';
import Wrapper from './styles';

export interface IButtonProps extends StyledSystemProps {
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
  type?: 'button' | 'submit';
  variant?: string;
}

/**
 * @render react
 * @name Button component
 * @description Defines a clickable button.
 * @example
 * <Button text="Test" />
 */

export const Button: FC<IButtonProps> = ({
  children,
  isLoading,
  text,
  ...rest
}) => {
  const renderChildren = () => {
    if (isLoading) {
      return <Loader />;
    }

    if (text) {
      return <Text lineHeight="1">{text}</Text>;
    }

    return children;
  };

  return <Wrapper {...rest}>{renderChildren()}</Wrapper>;
};

Button.defaultProps = {
  onClick: () => null,
};
