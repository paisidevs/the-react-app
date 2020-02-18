import { styled } from '@elandamor/tra-theme';
import { Box } from '../Box';
import { Flex } from '../Flex';

export const Wrapper = styled(Box)`
  background-color: ${(props) => props.theme.colors.background.surface};
  border: ${(props) => props.theme.borders[1]};
  border-color: ${(props) => props.theme.colors.border.default};
  color: ${(props) => props.theme.colors.text.default};
  font-size: ${(props) => props.theme.fontSizes[2]}px;
`;

export const TableRow = styled(Flex)`
  align-items: center;
`;

export const TableCell = styled(Flex)`
  border-bottom: ${(props) => props.theme.borders[1]};
  border-color: ${(props) => props.theme.colors.border.default};
  padding: ${(props) => props.theme.space[2]}px;
`;

export const TableHead = styled.div`
  .th {
    height: ${(props) => props.theme.space[7]}px; /* 56px (default) */
  }
`;

export const TableBody = styled.div`
  .tr {
    height: ${(props) => props.theme.space[7] - 4}px; /* 52px (default) */

    :last-child {
      .td {
        border-bottom: 0;
      }
    }
  }
`;
