import React, { FC, useContext } from 'react';
import { useTransition } from 'react-spring';
// Styles
import Box, { IBoxProps } from '../Box';
import Inner from '../Inner';
import AnimatedWrapper from '../AnimatedWrapper';
import Flex from '../Flex';
import GoBackButton from '../GoBackButton/Loadable';
import Toggle from '../Toggle/Loadable';

import { AppThemeContext } from '@app/contexts';
import { useRouter } from '@app/hooks';
import assets from '@app/assets';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Header');

interface IHeaderProps extends IBoxProps {};

/**
 * @render react
 * @name Header component
 * @description Header component.
 * @example
 * <Header />
 */

const Header: FC<IHeaderProps> = (props) => {
  const { location } = useRouter();
  const { darkMode, setDarkMode } = useContext(AppThemeContext);

  const showBackButton = location.state && location.state.showBackButton;
  const backButtonTrans = useTransition(showBackButton, null, {
    from: { opacity: 0, transform: 'translateX(-64px)' },
    enter: { opacity: 1, transform: 'translateX(0)'  },
    leave: { opacity: 0, transform: 'translateX(-64px)'  },
  });

  const handleSetDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    // @ts-ignore
    <Box as="header" {...props}>
      <Inner as={Flex}>
        <Flex alignItems="center">
          {
            showBackButton && backButtonTrans.map(({ item, key, props: styleProps }) =>
              item && (
                <AnimatedWrapper key={key} style={styleProps}>
                  <GoBackButton />
                </AnimatedWrapper>
              )
            )
          }
        </Flex>
        <Flex alignItems="center" justifyContent="flex-end">
          <Toggle
            icons={{
              checked: (
                <img
                  src={assets.generic.moon}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
              unchecked: (
                <img
                  src={assets.generic.sun}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
            }}
            checked={darkMode}
            onChange={handleSetDarkMode}
          />
        </Flex>
      </Inner>
    </Box>
  );
}

Header.defaultProps = {
  bg: 'surface',
  height: [64,88],
}

export default Header;
