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
import { columnDef } from './columnDefs';
import dataJson from './data';

type Props = {};

const BasicTable = (props: Props) => {
    const data: any = React.useMemo(() => dataJson, []);
    const columns: any = React.useMemo(() => columnDef, []);

    const [columnOrder, setColumnOrder] = React.useState<any>([]); // * create local state

    const table: Table<any> = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        state: {
            columnOrder: columnOrder, // * bind the table state to the local state
        },
        onColumnOrderChange: setColumnOrder, // * bind the table setState to the local setState
    } as TableOptions<any>);

    return (
        <>
            {/* HUGE NOTE: when passing items into array, they need to be: DATABASE KEYS (i.e. same stuff that goes into accessorIds), NOT Headers */}
            <button onClick={() => table.setColumnOrder(['email', 'gender'])}>
                swap columns
            </button>
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
