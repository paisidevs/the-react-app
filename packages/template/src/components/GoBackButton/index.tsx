import { useRouter } from '@app/hooks';
import classNames from 'classnames';
import React from 'react';
import { ArrowLeft } from 'react-feather';
import { useTransition } from 'react-spring';
import AnimatedWrapper from '../AnimatedWrapper';
import Box from '../Box';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('GoBackButton');

interface IGoBackButtonProps {
  className?: string;
  show?: boolean;
}

/**
 * @render react
 * @name GoBackButton component
 * @description GoBackButton component.
 * @example
 * <GoBackButton />
 */

const GoBackButton = ({ className, show }: IGoBackButtonProps) => {
  const { history } = useRouter();

  const backButtonTrans = useTransition(show, null, {
    from: { opacity: 0, transform: 'translateX(-64px)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: { opacity: 0, transform: 'translateX(-64px)' },
  });

  return (
    <Box width="auto">
      {backButtonTrans.map(
        ({ item, key, props: styleProps }) =>
          item && (
            <AnimatedWrapper key={key} style={styleProps}>
              <Wrapper
                className={classNames('', className)}
                icon={<ArrowLeft />}
                onClick={() => history && history.goBack()}
                iconSize={24}
                iconOnly
                minWidth={56}
                size={56}
                borderRadius="50%"
              />
            </AnimatedWrapper>
          ),
      )}
    </Box>
  );
};

export default GoBackButton;