import { createColumnHelper } from "@tanstack/react-table";

export type Person = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
}

const columnHelper = createColumnHelper<Person>();

export const columns = [
   columnHelper.accessor('id', {
    header: 'id'
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
]