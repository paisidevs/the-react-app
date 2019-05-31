import React from 'react';
import classNames from 'classnames';
import { FiArrowLeft } from 'react-icons/fi';
import { useTransition } from 'react-spring';
// Styles
import Wrapper from './styles';
import AnimatedWrapper from '../AnimatedWrapper';
import { useRouter } from '../../hooks';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('GoBackButton');

interface IGoBackButtonProps {
  className?: string;
  show?: boolean;
};

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
    enter: { opacity: 1, transform: 'translateX(0)'  },
    leave: { opacity: 0, transform: 'translateX(-64px)'  },
  });

  return backButtonTrans.map(({ item, key, props: styleProps }) =>
    item && (
      <AnimatedWrapper key={key} style={styleProps}>
        <Wrapper
          className={classNames('c-btn--back', className)}
          icon={<FiArrowLeft />}
          onClick={() => history.goBack()}
          iconSize={24}
          iconOnly
          minWidth={56}
          size={56}
          borderRadius="50%"
        />
      </AnimatedWrapper>
    )
  );
}

export default GoBackButton;
