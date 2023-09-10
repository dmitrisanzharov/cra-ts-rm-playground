import React from 'react';
import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import {
    useReactTable,
    flexRender,
    TableOptions,
    Table,
    getCoreRowModel,
} from '@tanstack/react-table';
import { columnDefWithCheckBox } from './columnDefs';
import dataJson from './data';

// * see IndeteminateCheckbox file for creation of the CheckBox
// * see columnDef for correct way to add the ROW with the Magic CheckBox

const BasicTable = (props: any) => {
    const data: any = React.useMemo(() => dataJson, []);
    const columns: any = React.useMemo(() => columnDefWithCheckBox, []); // * make sure the correct columnDef is used

    const [rowSelection, setRowSelection] = React.useState({}); // * add the state

    const table: Table<any> = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        state: {
            rowSelection, // * bind the table state to the local state
        },
        onRowSelectionChange: setRowSelection, // * bind the table setState to the local setState
        enableRowSelection: true, // * enable row selection for ALL rows
        // * enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row... i.e. alternative way of conditionally apply row selection
    } as TableOptions<any>);

    return (
        <>
            <ul>
                {table.getSelectedRowModel().flatRows.map((el) => {
                    // * HERE I can see all the Selected Row being listed... core code here is: .getSelectedRowModel
                    console.log('elTest', el);
                    return (
                        <li key={el.id}>
                            {Number(el.id) + 1} - {JSON.stringify(el.original)}
                        </li>
                    );
                })}
            </ul>
            <hr />
            <TableContainer component={Paper}>
                <MuiTable>
                    <TableHead>
                        {table.getHeaderGroups().map((headerGroupEl) => {
                            return (
                                <TableRow key={headerGroupEl.id}>
                                    {headerGroupEl.headers.map((columnEl) => {
                                        return (
                                            <TableCell
                                                key={columnEl.id}
                                                sx={{
                                                    fontWeight: 'bold',
                                                    border: '2px solid black',
                                                }}
                                                colSpan={columnEl.colSpan}
                                            >
                                                {flexRender(
                                                    columnEl.column.columnDef
                                                        .header,
                                                    columnEl.getContext()
                                                )}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableHead>
                    <TableBody>
                        {table.getRowModel().rows.map((row) => {
                            return (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => {
                                        return (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </MuiTable>
            </TableContainer>
        </>
    );
};

export default BasicTable;
