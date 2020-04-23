import { StyledSystemProps } from '@paisidevs/tra-theme';
import React, { createContext, FC, useContext, useState } from 'react';
import { Box } from '../Box';
import { Collapse } from '../Collapse';
import { Flex } from '../Flex';

interface IAccordionProps extends StyledSystemProps {
  /**
   * If `true`, expands the accordion in the controlled mode.
   */
  isOpen?: boolean;
  /**
   * If `true`, expands the accordion by on initial mount.
   */
  defaultIsOpen?: boolean;
  /**
   * If `true`, the accordion header will be disabled.
   */
  isDisabled?: boolean;
  /**
   * A unique id for the accordion item.
   */
  id?: string;
  /**
   * The callback fired when the accordion is expanded/collapsed.
   */
  onChange?: (isOpen: boolean) => void;
}

interface IAccordionHeaderProps extends StyledSystemProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const AccordionContext = createContext({
  isExpanded: false,
  onToggle: () => {},
});
const useAccordionContext = () => useContext(AccordionContext);

/**
 * @render react
 * @name Accordion component
 * @description Accordion component.
 * @example
 *  <Accordion>
 *    <AccordionHeader>
 *      <H4>Title</H4>
 *    </AccordionHeader>
 *    <AccordionPanel>
 *      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
 *    </AccordionPanel>
 *  </Accordion>
 */

export const Accordion: FC<IAccordionProps> = ({
  children,
  defaultIsOpen = false,
  isOpen = false,
  onChange,
  ...rest
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultIsOpen || false);

  const onToggle = () => {
    setIsExpanded(!isExpanded);
    onChange && onChange(!isExpanded);
  };

  return (
    <AccordionContext.Provider
      value={{
        isExpanded,
        onToggle,
      }}
    >
      <Box {...rest}>{children}</Box>
    </AccordionContext.Provider>
  );
};

export const AccordionHeader: FC<IAccordionHeaderProps> = ({
  children,
  onClick,
  ...rest
}) => {
  const { onToggle } = useAccordionContext();

  return (
    <Flex onClick={() => onToggle()} {...rest}>
      {children}
    </Flex>
  );
};

AccordionHeader.defaultProps = {
  alignItems: 'center',
  marginBottom: 1,
  minHeight: '56px',
  width: '100%',
};

export const AccordionPanel: FC = ({ children }) => {
  const { isExpanded } = useAccordionContext();

  return <Collapse isOpen={isExpanded}>{children}</Collapse>;
};
