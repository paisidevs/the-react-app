import { maxWidth, styled, width } from '@elandamor/tra-theme';

export const Wrapper = styled.table`
  background-color: ${(props) => props.theme.colors.background.surface};
  border: ${(props) => props.theme.borders[1]};
  border-color: ${(props) => props.theme.colors.border.default};
  border-spacing: 0;
  color: ${(props) => props.theme.colors.text.default};
  font-size: ${(props) => props.theme.fontSizes[2]}px;
  width: 100%;
  border-collapse: collapse;
`;

export const TR = styled.tr`
  align-items: center;
  display: flex;
  border-bottom: ${(props) => props.theme.borders[1]};
  border-color: ${(props) => props.theme.colors.border.default};
  position: relative;
`;

export const TD = styled.td`
  align-items: center;
  display: flex;
  flex: 1;
  font-weight: ${(props) => props.theme.fontWeights[4]};
  padding: 0 ${(props) => props.theme.space[2]}px;

  ${maxWidth}
  ${width}
`;

export const THead = styled.thead`
  .th {
    font-weight: ${(props) => props.theme.fontWeights[5]};
    height: ${(props) => props.theme.space[7]}px; /* 56px (default) */
    position: sticky;
    top: 0;
  }
`;

export const TBody = styled.tbody`
  tr:last-child {
    border-bottom: 0;
  }

  tr {
    min-height: ${(props) => props.theme.space[7] - 4}px; /* 52px (default) */
  }
`;
