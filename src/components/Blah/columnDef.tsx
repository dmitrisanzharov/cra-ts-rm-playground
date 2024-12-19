import { createColumnHelper } from "@tanstack/react-table";


export type Person = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    mahMan: string
}

const columnHelper = createColumnHelper<Person>();

export const columnDefMain = [
    columnHelper.accessor((data: any, idx: any)=> {
        return data.first_name + data.id
    }, {
        header: 'mainId',
        id: 'id',
        mahMan: 'omg'
    } as any),
    {
        accessorKey: 'first_name',
        id: 'first_name',
        header: 'name'
    }, 
    {
        accessorKey: 'last_name',
        header: 'last'
    }, 
    columnHelper.display({
        id: 'email',
        header: 'theeEmails'
    })
];

export const columnDefGroupingHeaders = [
    {
        header: 'theId',
        id: 'id',
        accessorKey: 'id'
    },
    {
        header: 'all names',
        id: 'allNames',
        columns: [
            {
                accessorKey: 'first_name',
                id: 'firstName',
                header: 'first name'
            },
            {
                accessorKey: 'last_name',
                id: 'lastName',
                header: 'last name'
            }
        ]
    },
    {
        id: 'email',
        header: 'email',
        accessorKey: 'email'
    }
]

export const columnDefSorting = [
    columnHelper.accessor((data: any, idx: any)=> {
        return data.first_name + data.id
    }, {
        header: 'mainId',
        id: 'id',
        mahMan: 'omg'
    } as any),
    {
        accessorKey: 'first_name',
        id: 'first_name',
        header: 'name'
    }, 
    {
        accessorKey: 'last_name',
        header: 'last'
    }, 
    {
        id: 'email',
        header: 'theeEmails',
        accessorKey: 'email',
    }
];