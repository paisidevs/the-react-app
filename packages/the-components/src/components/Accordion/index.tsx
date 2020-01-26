import { StyledSystemProps } from '@app/theme';
import React, { FC, useState } from 'react';
import { Text } from '../../typography';
import { Wrapper } from './elements';

export interface IProps extends StyledSystemProps {
  children: any;
  className?: string;
  open?: boolean;
  onToggle?: Function;
  title?: string;
  headerContent?: React.ReactNode;
}

/**
 * @render react
 * @name Accordion component
 * @description Accordion component.
 * @example
 *  <Accordion
 *    title="Test"
 *  >
 *    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
 *  </Accordion>
 */

export const Accordion: FC<IProps> = ({
  children,
  className,
  open = false,
  onToggle,
  title,
  headerContent,
  ...rest
}) => {
  const [visibility, setVisibility] = useState(open);

  const renderHeader = () => {
    if (title) {
      return <Text>{title}</Text>;
    }

    if (headerContent) {
      return headerContent;
    }

    return <Text>Title</Text>;
  };

  return (
    <Wrapper open={visibility} {...rest}>
      <header
        onClick={() => {
          setVisibility(!visibility);
          if (onToggle) onToggle(!visibility);
        }}
      >
        {renderHeader()}
      </header>
      {visibility ? <section>{children}</section> : null}
    </Wrapper>
  );
};
