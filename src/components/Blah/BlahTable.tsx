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
    getFilteredRowModel
} from '@tanstack/react-table';
import { columnDef } from './blahColumns';
import dataJson from '../table/data';

type Props = {};

const BasicTable = (props: Props) => {
    const data: any = React.useMemo(() => dataJson, []);
    const columns: any = React.useMemo(() => columnDef, []);

    const table: Table<any> = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    } as TableOptions<any>);


    // consoles
    console.log('test', table.options.columns);
    console.log('test2', table.options.data);

    // React.useEffect(() => {
    //     table.setColumnFilters([
    //         {
    //         id: 'first_name',
    //         value: 'Arlene'
    //     }
    //     ])
    // }, []);

    return (
        <TableContainer component={Paper}>
            <MuiTable>
                <TableHead sx={{ border: '3px solid red' }}>
                    {table.getHeaderGroups().map((headerGroupEl) => {
                        return (
                            <TableRow key={headerGroupEl.id}>
                                {headerGroupEl.headers.map((columnEl) => {
                                    return (
                                        <TableCell
                                            key={columnEl.id}
                                            // sx={{
                                            //     fontWeight: 'bold',
                                            //     border: '2px solid black',
                                            // }}
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
    );
};

export default BasicTable;
