import React from 'react';
import { X } from 'react-feather';
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

export const Basic = () => <Table columns={columns} data={data} />;
