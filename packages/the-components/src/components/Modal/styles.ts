import { styled, StyledSystemProps } from '@app/theme';
import { Animated } from '../Animated';
import { Box } from '../Box';

const sharedStyles = {
  height: '100%',
  left: '0',
  top: '0',
};

/**
 * Portal
 */

interface IPortalProps extends StyledSystemProps {}

export const Portal = styled(Animated)<IPortalProps>`
  ${sharedStyles};
`;

Portal.defaultProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  width: '100%',
};

/**
 * PortalInner
 */

interface IPortalInnerProps extends IPortalProps {
  fullscreen?: boolean;
}

export const PortalInner = styled(Animated)<IPortalInnerProps>``;

PortalInner.defaultProps = {
  alignItems: 'stretch',
  backgroundColor: 'background.surface',
  borderRadius: '4px',
  flex: 'none',
  flexDirection: 'column',
  maxHeight: ['100%', '90vh'],
  maxWidth: '600px',
  minHeight: '160px',
  width: '100%',
};

/**
 * PortalInnerHeader
 */

interface IPortalInnerHeaderProps extends IPortalProps {}

export const PortalInnerHeader = styled(Box)<IPortalInnerHeaderProps>`
  flex-direction: row;
  left: 0;
  top: 0;
  z-index: 1;
`;

PortalInnerHeader.defaultProps = {
  alignItems: 'center',
  backgroundColor: 'background.base',
  flex: 'none',
  height: '72px',
  position: 'relative',
};

/**
 * Scrim
 */

interface IScrimProps extends IPortalProps {}

export const Scrim = styled(Animated)<IScrimProps>`
  ${sharedStyles};
`;

Scrim.defaultProps = {
  backgroundColor: 'opacity.blacks.5',
  position: 'absolute',
  width: '100%',
};
