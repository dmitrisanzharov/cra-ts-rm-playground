import { createColumnHelper } from '@tanstack/react-table';

type personItem = {
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
};

const columnHelper = createColumnHelper<personItem>();
// console.log("columnHelper: ", columnHelper);

function myFn(row: any, columnId: any, filterValue: any) {
    console.log('============================');
    console.log('row: ', row);
    console.log('columnId: ', columnId);
    console.log('filterValue: ', filterValue);

    return true;
}

// * BASIC TABLE

export const columnDef = [
    columnHelper.accessor((row: any) => `${row.first_name} ${row.last_name}`, {
        header: 'First Name',
        id: 'first_name',
        filterFn: myFn
    }),
    columnHelper.accessor('last_name', {
        header: 'Last Name',
        id: 'last_name'
    }),
    columnHelper.accessor('email', {
        header: 'Email',
        id: 'email'
    }),
    columnHelper.accessor('gender', {
        header: (row: any) => {
            // console.log('row: ', row);
            return 'Gender';
        },
        id: 'gender'
    } as any)
    // columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
    //     header: 'all in one',
    // }),
    // {
    //     id: 'omg'
    // }
];

export const columnDefWithGroup = [
    columnHelper.group({
        header: 'initials',
        columns: [
            columnHelper.accessor('first_name', {
                header: 'First Name',
                id: 'first_name'
            }),
            columnHelper.accessor('last_name', {
                header: 'Last Name',
                id: 'last_name'
            })
        ]
    }),

    columnHelper.accessor('email', {
        header: 'Email',
        id: 'email'
    }),
    columnHelper.accessor('gender', {
        header: 'Gender',
        id: 'gender',
        omg: 'omg'
    } as any),
    // columnHelper.display({
    //     header: 'display1',
    //     id: 'display1',
    //     cell: (info) => {
    //         // console.log('info', info);
    //         return 'test';
    //     }
    // })
];
