import React, { useMemo } from 'react';
import { Column, useTable } from 'react-table';
import { TableBody, TableCell, TableHead, TableRow, Wrapper } from './styles';

interface ITableProps<D extends object = {}> {
  columns: Column<D>[];
  data: any;
}

/**
 * @render react
 * @name Table component
 * @description Table component.
 * @example
 * <Table columns={[]} data={[]} />
 */

export const Table: React.FC<ITableProps> = ({ columns, data, ...rest }) => {
  const memoizedColumns = useMemo(() => columns, [columns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: memoizedColumns,
    data,
  });

  return (
    <Wrapper {...getTableProps()} {...rest}>
      <TableHead className="thead">
        {headerGroups.map((headerGroup) => (
          <TableRow
            className="tr"
            key={headerGroup.id}
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column) => (
              <TableCell
                className="th"
                key={column.id}
                {...column.getHeaderProps()}
              >
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody className="tbody" {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow className="tr" {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <TableCell
                    className="td"
                    key={cell.row.index}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Wrapper>
  );
};
