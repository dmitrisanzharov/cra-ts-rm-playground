import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<any>();

export const columnDef = [
    columnHelper.accessor('first_name', {
        header: 'First Name',
    }),
    columnHelper.accessor('last_name', {
        header: 'Last Name',
    }),
    columnHelper.accessor('email', {
        header: 'Email',
    }),
    columnHelper.accessor('gender', {
        header: 'Gender',
    }),
    columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
        header: 'all in one',
    }),
];

// * Header grouping

export const columnDefGrouped = [
    {
        header: 'stacked',
        columns: [
            columnHelper.accessor('first_name', {
                header: 'First Name',
            }),
            columnHelper.accessor('last_name', {
                header: 'Last Name',
            }),
            columnHelper.accessor('email', {
                header: 'Email',
            }),
        ],
    },

    columnHelper.accessor('gender', {
        header: 'Gender',
    }),
    columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
        header: 'all in one',
    }),
];

// * cell formatting example

export const columnDefCellFormatting = [
    columnHelper.accessor((row) => row.first_name, {
        header: 'First Name'.toUpperCase(),
        cell: ({ getValue }: any) => getValue().toUpperCase(), // here we can format the Values inside the Cell, to a specific value...
    }),
    columnHelper.accessor('last_name', {
        header: 'Last Name',
    }),
    columnHelper.accessor('email', {
        header: 'Email',
    }),
    columnHelper.accessor('gender', {
        header: 'Gender',
    }),
    columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
        header: 'all in one',
    }),
];
