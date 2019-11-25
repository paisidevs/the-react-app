import { styled, StyledSystemProps } from 'the-theme';
import Box from '../Box';

export interface IScrollViewProps extends StyledSystemProps {}

/**
 * @render react
 * @name ScrollView component
 * @description ScrollView component.
 * @example
 * <ScrollView />
 */

const ScrollView = styled(Box)<IScrollViewProps>`
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`;

ScrollView.defaultProps = {
  height: '100%',
  overflow: 'auto',
  width: '100%',
  zIndex: 0,
};

export default ScrollView;
