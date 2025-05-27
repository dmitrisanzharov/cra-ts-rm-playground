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
    getPaginationRowModel, // * import the hook
} from '@tanstack/react-table';
import { columnDef, columnDefGrouped } from './columnDefs';
import dataJson from './data';

type Props = {};

const BasicTable = (props: Props) => {
    const data: any = React.useMemo(() => dataJson, []);
    const columns: any = React.useMemo(() => columnDef, []);

    const table: Table<any> = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(), // * add hook to the table options
        initialState: {
            pagination: {
                pageSize: 2, // * here I can set INITIAL, STARTING page size
            },
        },
    } as TableOptions<any>);

    return (
        <>
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
            <hr />
            <div>
                <div>
                    {/* We can add Current page from Table options */}
                    Current page: {table?.options?.state?.pagination?.pageIndex}
                </div>
                <div>
                    {/* page counts is a Method that provides the Page Count, I get it from the table */}
                    Number of pages in total: {table.getPageCount() - 1}
                </div>
            </div>
            <hr />
            <div>
                {/* This allows me to jump right to the FIRST PAGE */}
                {/* NOTE: its a good idea to disable this button when I am already on the first page... I can do that by using: 
                table.getCanPreviousPage() method, which returns TRUE / FALSE depending on where I am in the page index */}
                <button
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    Jump To FIRST PAGE
                </button>
            </div>
            <div>
                {/* This allows me to Jump to last page*/}
                {/* NOTE: its a good idea to disable this button when I am already on the first page... I can do that by using: 
                table.getCanNextPage() method, which returns TRUE / FALSE depending on where I am in the page index */}
                <button
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    Jump to LAST PAGE
                </button>
            </div>
            <hr />
            <div>
                {/* PREVIOUS PAGE */}
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous page
                </button>
                {/* NEXT PAGE */}
                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next page
                </button>
            </div>
            <hr />
            <div>
                {/* JUMP TO SPECIFIC PAGE INDEX */}
                <ul>
                    <li>Jump to page</li>
                    <li>
                        <input
                            type='number'
                            defaultValue={0}
                            onChange={(e) =>
                                table.setPageIndex(Number(e.target.value))
                            }
                        />
                    </li>
                </ul>
            </div>
            <hr />
            {/* PAGE SIZE CONTROL */}
            {/* table.setPageSize(pageSize) is thee most important function in here, because this controls the actual page size*/}
            {/* to extract state/value of the page size, I can get it from: table?.options?.state?.pagination?.pageSize */}
            <select
                value={table?.options?.state?.pagination?.pageSize}
                onChange={(e) => table.setPageSize(Number(e.target.value))}
            >
                {[3, 5, 7].map((pageSizeEl) => {
                    return (
                        <option key={pageSizeEl} value={pageSizeEl}>
                            Show: {pageSizeEl}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

export default BasicTable;
