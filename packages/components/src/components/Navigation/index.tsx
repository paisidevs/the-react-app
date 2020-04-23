import { StyledSystemProps } from '@paisidevs/tra-theme';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { Wrapper } from './styles';

type Link = {
  className?: string;
  exact?: boolean;
  href: string;
  icon?: React.ReactNode;
  label: string;
};

export interface INavigationProps extends StyledSystemProps {
  direction?: 'horizontal' | 'vertical';
  links: Link[];
}

/**
 * @render react
 * @name Navigation component
 * @description Main navigation for an app.
 * @example
 * <Navigation
 *    links={[
 *      { exact: true, label: 'Home', href: '/' },
 *      { label: 'About', href: '/about' }
 *      { label: 'Contact', href: '/contact' },
 *    ]}
 * />
 */

export const Navigation: FC<INavigationProps> = ({
  direction = 'horizontal',
  height,
  links,
}) => (
  <Wrapper>
    <Box flexDirection={direction === 'horizontal' ? 'row' : 'column'}>
      {links.map((link: Link, index: number) => (
        <Flex
          key={index}
          flex="1"
          height={height}
          alignItems="center"
          justifyContent="center"
        >
          <NavLink exact={link.exact} activeClassName="-active" to={link.href}>
            <Flex height={height} alignItems="center" justifyContent="center">
              {link.icon}
              {link.label}
            </Flex>
          </NavLink>
        </Flex>
      ))}
    </Box>
  </Wrapper>
);
