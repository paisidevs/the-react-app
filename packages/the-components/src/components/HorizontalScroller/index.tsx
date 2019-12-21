import {
  layout,
  shouldForwardProp,
  styled,
  StyledSystemProps,
} from '@app/theme';
import React, { useState } from 'react';
import Measure from 'react-measure';

interface IHorizontalScrollerProps extends StyledSystemProps {}

const speed = '0.3s';

const Wrapper = styled('div', { shouldForwardProp })<StyledSystemProps>`
  overflow: hidden;
  ${layout};
`;

const Track = styled.div`
  --aspect: calc(16 / 10);
  --gap: 16px;
  --hackPadding: 1px;
  --vw: 100vw;

  -webkit-overflow-scrolling: touch;
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: 0;
  grid-template-rows: minmax(
    calc((calc((var(--vw) / 1) - (var(--gap) * 3))) / var(--aspect)),
    1fr
  );
  grid-auto-flow: column;
  grid-auto-columns: minmax(calc((var(--vw) / 1) - (var(--gap) * 3)), 320px);
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
  scroll-snap-destination: 100% 0%;

  width: var(--vw); // Safari needs this for proper layout
  padding-bottom: var(--gap);

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 512px) {
    --vw: 400px;
  }

  @media (min-width: 1024px) {
    --vw: 364px;
  }

  @media (min-width: 1280px) {
    --vw: 448px;
    --hackPadding: calc((100vw - 1280px) / 2);
    padding: 0 var(--hackPadding) 0 var(--hackPadding);
  }

  @media (min-width: 1312px) {
    --vw: 454px;
  }

  &:after,
  &:before {
    content: '';
    width: var(--gap);
  }

  /* Hack to fix last child 'margin' glitch */
  &::after {
    width: var(--hackPadding);
  }
`;

const Child = styled.div`
  scroll-snap-align: center;
  transition: all ${speed};
`;

export const HorizontalScroller: React.FC<IHorizontalScrollerProps> = ({
  children,
}) => {
  const [trackHeight, setTrackHeight] = useState<number>(-1);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return null;

    return <Child>{child}</Child>;
  });

  return (
    <Wrapper height={`calc(${trackHeight}px - 16px)`}>
      <Measure
        bounds
        onResize={(rect) => {
          setTrackHeight(rect.bounds!.height);
        }}
      >
        {({ measureRef: contentRef }) => (
          <Track ref={contentRef}>{childrenWithProps}</Track>
        )}
      </Measure>
    </Wrapper>
  );
};
