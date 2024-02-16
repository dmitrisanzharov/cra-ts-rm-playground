import { createColumnHelper } from "@tanstack/react-table";

export type Person = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
}

const columnHelper = createColumnHelper<any>();

export const columns = [
   columnHelper.accessor(row => `${row.id}, ${row.gender}`, {
    id: 'blah'
   }),
   columnHelper.accessor('first_name', {
    header: 'First Name'
   }),
   columnHelper.accessor('last_name', {
    header: 'Last Name'
   }),
   columnHelper.accessor('email', {
    header: 'Email'
   }),
   columnHelper.accessor('gender', {
    header: 'Gender'
   }),
   {
    header: 'group1',
    columns: [
       columnHelper.accessor('first_name', {
        id: 'name'
       }),
       columnHelper.accessor('last_name', {
        id: 'last'
       }),
    ]
   }
]