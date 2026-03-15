import React from 'react';
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {
    useReactTable,
    flexRender,
    TableOptions,
    Table,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel
} from '@tanstack/react-table';
import { columnDef, columnDefWithGroup } from './blahColumns';
import dataJson from '../table/data';

type Props = {};

const initialColumnVisibility = {
    first_name: true
};

const BasicTable = (props: Props) => {
    const data: any = React.useMemo(() => dataJson, []);
    const columns: any = React.useMemo(() => columnDefWithGroup, []);
    const [columnVisibility, setColumnVisibility] = React.useState<any>(initialColumnVisibility);

    const table: Table<any> = useReactTable({
        data,
        columns,
        state: {
            columnVisibility: columnVisibility
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onColumnVisibilityChange: setColumnVisibility
    } as TableOptions<any>);

    // consoles
    // console.log('test columns', table.options.columns);
    // console.log('test a', table.getAllColumns());
    // console.log('test2', table.options.data);
    // console.log('filters', table.getState().columnFilters);

    React.useEffect(() => {
        // table.setColumnFilters([
        //     {
        //         id: 'first_name',
        //         value: 'Arlene'
        //     }
        // ]);

        let a = table.getHeaderGroups();
        // console.log('omg', a);
    }, []);

    function sortingReturn(sortState: any) {
        console.log("sortState: ", sortState);
        return `- ${sortState || 'none'}`;
    }

    return (
        <TableContainer component={Paper}>
            <button
                onClick={() => setColumnVisibility({ ...columnVisibility, first_name: !columnVisibility.first_name })}
            >
                toggle first_name
            </button>
            <MuiTable>
                <TableHead sx={{ border: '3px solid red' }}>
                    {table.getHeaderGroups().map((headerGroupItem: any) => {
                        return (
                            <TableRow key={headerGroupItem.id}>
                                {headerGroupItem.headers.map((headerColumnItem: any) => {
                                    // console.log('headerColumnItem', headerColumnItem.colSpan)
                                    const headerSpan = headerColumnItem.colSpan;
                                    const isPlaceholder = headerColumnItem.isPlaceholder;
                                    if (isPlaceholder) {
                                        return null;
                                    }
                                    return (
                                        <TableCell
                                            key={headerColumnItem.id}
                                            colSpan={headerSpan}
                                            sx={{ backgroundColor: headerSpan > 1 ? 'darkorange' : 'gray' }}
                                            onClick={headerColumnItem.column.getToggleSortingHandler()}
                                        >
                                            {flexRender(
                                                headerColumnItem.column.columnDef.header,
                                                headerColumnItem.getContext()
                                            )}
                                            {headerSpan === 1 && sortingReturn(headerColumnItem.column.getIsSorted())}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableHead>
                <TableBody>
                    {table.getRowModel().rows.map((rowItem: any) => {
                        // console.log('rowItem', rowItem)
                        return (
                            <TableRow key={rowItem.id}>
                                {rowItem.getVisibleCells().map((cellItem: any) => {
                                    return (
                                        <TableCell key={cellItem.id}>
                                            {flexRender(cellItem.column.columnDef.cell, cellItem.getContext())}
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
