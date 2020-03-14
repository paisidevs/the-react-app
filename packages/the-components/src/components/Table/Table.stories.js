import React from 'react';
import { ChevronDown, ChevronUp, X } from 'react-feather';
import { Box } from '../Box';
import { Table } from './index';

export default {
  title: 'Table',
  component: Table,
  decorators: [
    (storyFn) => (
      <Box padding={6} margin="0 auto" maxWidth="1280px">
        {storyFn()}
      </Box>
    ),
  ],
};

const columns = [
  {
    // Make an expander cell
    Header: () => null, // No header
    id: 'expander', // It needs an ID
    Cell: ({ row }) => (
      // Use Cell to render an expander for each row.
      // We can use the getToggleRowExpandedProps prop-getter
      // to build the expander.
      <Box
        alignItems="center"
        justifyContent="center"
        position="absolute"
        height={52}
        left={0}
        top={0}
        width={52}
        {...row.getToggleRowExpandedProps()}
      >
        {row.isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </Box>
    ),
    maxWidth: 56,
    width: 56,
  },
  {
    Header: 'No',
    Cell: ({ row }) => row.index + 1,
    maxWidth: 56,
    width: 56,
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    id: 'actions',
    Cell: () => <X size={20} />,
    maxWidth: 56,
    width: 56,
  },
];

const data = [
  { firstName: 'Thando', lastName: 'Mpofu' },
  { firstName: 'Thandolwethu', lastName: 'Mpofu' },
];

export const Basic = () => (
  <Table
    columns={columns}
    data={data}
    renderRowSubComponent={({ row }) => (
      <pre>
        <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
      </pre>
    )}
  />
);
