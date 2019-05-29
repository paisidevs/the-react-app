import React from 'react';
import classNames from 'classnames';
import { FiArrowLeft } from 'react-icons/fi';
// Styles
import Wrapper from './styles';
import { useRouter } from '../../hooks';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('GoBackButton');

interface IGoBackButtonProps {
  className?: string;
};

/**
 * @render react
 * @name GoBackButton component
 * @description GoBackButton component.
 * @example
 * <GoBackButton />
 */

const GoBackButton = ({ className, ...rest }: IGoBackButtonProps) => {
  const { history } = useRouter();

  return (
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
  );
}

export default GoBackButton;
