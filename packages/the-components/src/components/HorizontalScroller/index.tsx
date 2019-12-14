import { styled, StyledSystemProps } from '@app/theme';
import React from 'react';

interface IHorizontalScrollerProps extends StyledSystemProps {}

const speed = '0.3s';

const Wrapper = styled.div`
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
  scroll-snap-type: x proximity;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
  scroll-snap-destination: 100% 0%;
  padding-bottom: calc(0.75 * var(--gap));
  margin-bottom: calc(-0.25 * var(--gap));

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 368px) {
    --vw: 368px;
  }

  @media (min-width: 960px) {
    --vw: 364px;
  }

  @media (min-width: 1024px) {
    --hackPadding: calc((100vw - 960px) / 2);
    padding: 0 var(--hackPadding) 0 var(--hackPadding);
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

  .c-item {
    background-color: ${({ theme }) => theme.colors.border.default};
    border-radius: 4px;
    scroll-snap-align: center;
    padding: var(--gap);
    transition: all ${speed};
  }
`;

export const HorizontalScroller: React.FC<IHorizontalScrollerProps> = () => {
  return (
    <Wrapper>
      {[0, 0, 0, 0, 0, 0, 0, 0].map((i) => (
        <div key={1} className="c-item" />
      ))}
    </Wrapper>
  );
};
