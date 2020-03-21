import {
  color,
  compose,
  grid,
  layout,
  shouldForwardProp,
  space,
  styled,
  StyledSystemProps,
} from '@paisidevs/tra-theme';

export interface IGridProps extends StyledSystemProps {}

/**
 * @render react
 * @name Grid component
 * @description Grid component.
 * @example
 *  <Grid>
 *    <Component />
 *    <Component />
 *    <Component />
 *  </Grid>
 */

export const GridStyles = compose(color, grid, layout, space);

export const Grid = styled('div', { shouldForwardProp })<IGridProps>`
  display: grid;
  position: relative;

  ${GridStyles};
`;
