import { keyframes, styled } from '@app/theme';

export const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 24px;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

export const Circular = styled.svg`
  animation: ${rotate} 1.25s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const Path = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${dash} 1.25s ease-in-out infinite;
  stroke-linecap: round;
  stroke: currentColor;
`;
