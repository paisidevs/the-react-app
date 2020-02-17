import React, { FC, useState } from 'react';
import { Box } from '../Box';

interface IProps {}

/**
 * @render react
 * @name AccordionGroup component
 * @description AccordionGroup component.
 * @example
 *  <AccordionGroup>
 *    Accordion />
 *    Accordion />
 *  </AccordionGroup>
 */

export const AccordionGroup: FC<IProps> = ({ children }) => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const childrenWithProps = React.Children.map(
    children,
    (child, childIndex) => {
      if (!React.isValidElement(child)) return null;

      return React.cloneElement(child, {
        onChange: (isExpanded: boolean) => {
          if (isExpanded) {
            const newIndexes = [...expandedIndexes, childIndex];
            setExpandedIndexes(newIndexes);
          } else {
            const newIndexes = expandedIndexes.filter(
              (index) => index !== childIndex,
            );
            setExpandedIndexes(newIndexes);
          }
        },
      });
    },
  );
  return <Box>{childrenWithProps}</Box>;
};
