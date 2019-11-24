import { styled, theme } from 'the-theme';
import { IGridProps } from './index';

const Wrapper = styled.div<IGridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: ${({ gap }) => (gap ? gap : theme.space[3])}px;
`;

export default Wrapper;
