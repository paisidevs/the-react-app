import React from 'react';
import { Box } from '../Box';
import { Table } from './index';

export default {
  title: 'Table',
  component: Table,
  decorators: [(storyFn) => <Box padding={6}>{storyFn()}</Box>],
};

const columns = [
  {
    Header: 'No',
    Cell: ({ row }) => row.index + 1,
    width: 56,
    maxWidth: 56,
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
];

const data = [
  { firstName: 'Thando', lastName: 'Mpofu' },
  { firstName: 'Thandolwethu', lastName: 'Mpofu' },
];

export const Basic = () => <Table columns={columns} data={data} />;
