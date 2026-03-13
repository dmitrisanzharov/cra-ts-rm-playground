import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<any>();

// * BASIC TABLE

export const columnDef = [
    columnHelper.accessor('first_name', {
        header: 'First Name',
        id: 'first_name',
    }),
    columnHelper.accessor('last_name', {
        header: 'Last Name',
        id: 'last_name',
    }),
    columnHelper.accessor('email', {
        header: 'Email',
        id: 'email',
    }),
    columnHelper.accessor('gender', {
        header: 'Gender',
        id: 'gender',
    }),
    // columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
    //     header: 'all in one',
    // }),
];