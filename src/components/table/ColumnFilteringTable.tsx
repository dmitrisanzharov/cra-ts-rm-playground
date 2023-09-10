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
    getFilteredRowModel, // * import the hook
} from '@tanstack/react-table';
import FilterFunction from './FilteringFunction';
import { columnDef, columnDefGrouped } from './columnDefs';
import dataJson from './data';

type Props = {};

const ColumnFilteringTable = (props: Props) => {
    const data: any = React.useMemo(() => dataJson, []);
    const columns: any = React.useMemo(() => columnDef, []);

    const [columnFilters, setColumnFilters] = React.useState<any>([]); // * create local state to bind to table state and setState function

    const table: Table<any> = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(), // * add the hook to the table Instance
        state: {
            columnFilters: columnFilters, // * bind table state to the Local state
        },
        onColumnFiltersChange: setColumnFilters, // * bind the table setState function to the local setState function
    } as TableOptions<any>);

    // * create the File: DebounceInput and copy and paste correct Input code into it
    // * create the File: Filtering Function and add correct code into it
    // * add Filtering function to the Imports

    return (
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
                                            {' '}
                                            {flexRender(
                                                columnEl.column.columnDef
                                                    .header,
                                                columnEl.getContext()
                                            )}
                                            {columnEl.column.getCanFilter() ? ( // * add CONDITIONAL that if I CAN filter, then that Header should have the Input, if NOT, then return nothing
                                                <div //* this is here only to create SPACE between input and header
                                                >
                                                    {' '}
                                                    <FilterFunction
                                                        column={columnEl.column}
                                                        table={table}
                                                    />
                                                </div>
                                            ) : null}
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

export default ColumnFilteringTable;
