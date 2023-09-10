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

    const table: Table<any> = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    } as TableOptions<any>);

    return (
        <>
            {/* here is toggle for ALL... for this one I do NOT need local state binding, this will work out of the box */}
            <div>
                <label>
                    <input
                        {...{
                            type: 'checkbox',
                            checked: table.getIsAllColumnsVisible(),
                            onChange:
                                table.getToggleAllColumnsVisibilityHandler(),
                        }}
                    />{' '}
                    Toggle All
                </label>
                <hr />
                {/* FOR INDIVIDUAL CELL */}
                {table.getAllLeafColumns().map((column) => {
                    return (
                        <div key={column.id}>
                            <label>
                                <input
                                    {...{
                                        type: 'checkbox',
                                        checked: column.getIsVisible(),
                                        onChange:
                                            column.getToggleVisibilityHandler(),
                                    }}
                                />{' '}
                                {column.id}
                            </label>
                        </div>
                    );
                })}
            </div>
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
