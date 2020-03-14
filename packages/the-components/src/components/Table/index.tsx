import React, { useMemo } from 'react';
import { Column, useExpanded, useTable } from 'react-table';
import { TBody, TD, THead, TR, Wrapper } from './styles';

interface ITableProps<D extends object = {}> {
  columns: Column<D>[];
  data: any;
  renderRowSubComponent?: any;
}

/**
 * @render react
 * @name Table component
 * @description Table component.
 * @example
 * <Table columns={[]} data={[]} />
 */

export const Table: React.FC<ITableProps> = ({
  columns,
  data,
  renderRowSubComponent,
  ...rest
}) => {
  const memoizedColumns = useMemo(() => columns, [columns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable(
    {
      columns: memoizedColumns,
      data,
    },
    useExpanded,
  );

  return (
    <Wrapper {...getTableProps()} {...rest}>
      <THead className="thead">
        {headerGroups.map((headerGroup) => (
          <TR key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TD
                className="th"
                key={column.id}
                width={column.width}
                maxWidth={column.maxWidth}
                {...column.getHeaderProps()}
              >
                {column.render('Header')}
              </TD>
            ))}
          </TR>
        ))}
      </THead>
      <TBody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          // @ts-ignore - Property 'isExpanded' does not exist on type 'Row<object>'
          const { isExpanded } = row;

          prepareRow(row);

          return (
            <React.Fragment key={i} {...row.getRowProps()}>
              <TR
                {...(isExpanded && { className: '-expanded' })}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <TD
                      key={cell.row.index}
                      width={cell.column.width}
                      maxWidth={cell.column.maxWidth}
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </TD>
                  );
                })}
              </TR>
              {isExpanded && (
                <TR>
                  <TD colSpan={visibleColumns.length}>
                    {renderRowSubComponent({ row })}
                  </TD>
                </TR>
              )}
            </React.Fragment>
          );
        })}
      </TBody>
    </Wrapper>
  );
};
