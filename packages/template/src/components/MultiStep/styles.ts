import styled, { css } from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div``;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
`;

export const Tracks = styled.ol`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 40px 0;

  ${(props: { verticalTrack: boolean }) =>
    props.verticalTrack &&
    css`
      align-items: flex-start;
      flex-direction: column;
    `};
`;

export const Track = styled.li`
  align-items: ${(props: { verticalTrack: boolean }) =>
    props.verticalTrack ? 'flex-start' : 'center'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: ${theme.minWidths[0]}px;
  position: relative;

  .side-nav {
    &__wrap {
      align-items: center;
      cursor: pointer;
      display: flex;
      flex-direction: ${(props: { verticalTrack: boolean }) =>
        props.verticalTrack ? 'row' : 'column'};
      justify-content: center;
      min-height: ${theme.space[4]}px;
    }

    &__circle {
      align-items: center;
      background-color: ${({ theme }) => theme.colors.border.default};
      border-radius: 50%;
      display: flex;
      height: ${theme.space[4]}px;
      justify-content: center;
      margin: ${theme.space[3]}px;
      width: ${theme.space[4]}px;

      &-inner {
        background-color: ${({ theme }) => theme.colors.background.surface};
        border-radius: 50%;
        display: block;
        height: ${theme.space[3]}px;
        width: ${theme.space[3]}px;
      }
    }

    &__line {
      background-color: ${({ theme }) => theme.colors.primary.base};
      border-radius: 2px;
      height: ${theme.space[1] / 2}px;
      position: absolute;
      right: -25%;
      visibility: hidden;
      width: 50%;

      ${(props: { verticalTrack: boolean }) =>
        props.verticalTrack &&
        css`
          bottom: -12.5%;
          height: 25%;
          width: ${theme.space[1] / 2}px;
          right: auto;
        `};
    }
  }

  &.-done {
    .side-nav__circle {
      background-color: ${({ theme }) => theme.colors.primary.base};
    }
  }

  &.-doing {
    .side-nav__circle {
      background-color: ${({ theme }) => theme.colors.primary.base};
    }

    .side-nav__page {
      font-weight: 800;
    }
  }

  &:not(:last-child).-done {
    .side-nav__line {
      visibility: visible;
    }
  }

  &:hover {
    .side-nav__circle {
      background-color: ${({ theme }) => theme.colors.primary.dark};
    }

    .-done {
      .side-nav__circle {
        background-color: ${theme.colors.primary.dark};
      }
    }
  }
`;

export default Wrapper;
