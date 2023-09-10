import { createColumnHelper } from '@tanstack/react-table';
import IndeterminateCheckbox from './IndeterminateCheckbox';

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

// * removing Global and Local filters
export const columnDefRemovedFilters = [
    columnHelper.accessor('first_name', {
        header: 'First Name',
        enableColumnFilter: false, // * removes Column Filter ... NOTE: default value is TRUE
        enableGlobalFilter: false, // * removed Global Filter ... NOTE: default value is TRUE
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

// * columnDef with Checkbox

export const columnDefWithCheckBox = [
    {
        id: 'select',
        header: ({ table }: any) => (
            <IndeterminateCheckbox
                {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getToggleAllRowsSelectedHandler(),
                }}
            />
        ),
        cell: ({ row }: any) => (
            <IndeterminateCheckbox
                {...{
                    checked: row.getIsSelected(),
                    disabled: !row.getCanSelect(),
                    indeterminate: row.getIsSomeSelected(),
                    onChange: row.getToggleSelectedHandler(),
                }}
            />
        ),
    },
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
