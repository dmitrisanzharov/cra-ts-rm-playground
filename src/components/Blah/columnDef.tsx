import { createColumnHelper } from "@tanstack/react-table";


export type Person = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    mahMan: string
}

const columnHelper = createColumnHelper<Person>();

const columnDefMain = [
    columnHelper.accessor((data: any, idx: any)=> <div>{'blah'}{idx}</div>, {
        header: (table: any) => {
            console.log('table', table)
            return ''
        },
        id: 'id',
        mahMan: 'omg',
        cell: (data: any) => {
            // console.log(data.getValue(data.column.id))
            return data.getValue(data.column.id)
        }
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

export {columnDefMain}; 