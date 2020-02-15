import {
  color,
  grid,
  layout,
  shouldForwardProp,
  space,
  styled,
  StyledSystemProps,
} from '@elandamor/tra-theme';

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

export const Grid = styled('div', { shouldForwardProp })<IGridProps>(
  {
    display: 'grid',
    position: 'relative',
  },
  color,
  grid,
  layout,
  space,
);
