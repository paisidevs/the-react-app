import classNames from 'classnames';
import React, { FC } from 'react';
import Box from '../Box';
import { Content, Description, Title } from './styles';

export interface ICardProps {
  className?: string;
  compact?: boolean;
  contentPadding?: number;
  description?: string | React.ReactNode;
  image?: string;
  title?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

/**
 * @render react
 * @name Card component
 * @description Card component.
 * @example
 *    <Card
 *      title="Title"
 *      description="This is a test description"
 *    />
 */

const Card: FC<ICardProps> = ({
  children,
  className,
  contentPadding = 20,
  description,
  image,
  title,
  icon,
  onClick,
  ...rest
}) => (
  <Box className={classNames('c-card', className)} onClick={onClick} {...rest}>
    <Content contentPadding={contentPadding}>
      {title && (
        <Title m={0}>
          {icon && icon}
          {title}
        </Title>
      )}
      {description && (
        <Description className="a-description">{description}</Description>
      )}
      {children}
    </Content>
  </Box>
);

export default Card;
