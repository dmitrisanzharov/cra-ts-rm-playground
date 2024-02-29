import React from 'react';
import { useReactTable, TableOptions, flexRender, getCoreRowModel, getSortedRowModel, SortingState } from '@tanstack/react-table';
import TableMUI from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import jsonData from './tableData.json';
import { columns, Person, columnsSort } from './columnDef';

type Props = {};

const SortTable1 = (props: Props) => {
    const dataFinal: Person[] = React.useMemo(() => jsonData, [jsonData]);
    const columnsFinal = React.useMemo(() => columnsSort, [columnsSort]);

    const [sorting, setSorting] = React.useState<SortingState>([{ id: 'id', desc: true }]);
    const sortingLabel: any = { asc: ' -UP', desc: ' -DOWN', noSort: ' -X' };

    const { getHeaderGroups, getRowModel } = useReactTable({
        data: dataFinal,
        columns: columnsFinal,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting: sorting,
        },
        onSortingChange: setSorting,
    } as TableOptions<Person>);

    return (
        <div>
            <h1>Basic Table Stuff</h1>
            <hr />
            <TableContainer component={Paper}>
                <TableMUI sx={{ minWidth: 650 }}>
                    <TableHead>
                        {getHeaderGroups().map((headerGroup: any) => {
                            // console.log('header', headerGroup);
                            return (
                                <TableRow key={headerGroup.id} sx={{ fontWeight: 'bold', backgroundColor: 'lightgray' }}>
                                    {headerGroup.headers.map((column: any, idx: number) => {
                                        // console.log('column', column);
                                        console.log('test', column.column.getIsSorted());
                                        console.log('test2', column.column.getIsSorted() ? column.column.getIsSorted() : 'noSort');
                                        return (
                                            <TableCell key={column.id} onClick={column.column.getToggleSortingHandler()} sx={{ cursor: 'pointer' }}>
                                                {flexRender(column.column.columnDef.header, column.getContext())}
                                                {sortingLabel[column.column.getIsSorted() ? column.column.getIsSorted() : 'noSort']}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableHead>
                    <TableBody>
                        {getRowModel().rows.map((row: any) => {
                            return (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell: any) => {
                                        return <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>;
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </TableMUI>
            </TableContainer>
        </div>
    );
};

export default SortTable1;
