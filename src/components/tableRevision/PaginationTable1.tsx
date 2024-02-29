import React from 'react';
import { useReactTable, TableOptions, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import TableMUI from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import jsonData from './tableData.json';
import { columns, Person } from './columnDef';

type Props = {};

const PaginationTable1 = (props: Props) => {
    const dataFinal: Person[] = React.useMemo(() => jsonData, [jsonData]);
    const columnsFinal = React.useMemo(() => columns, [columns]);
    const { getHeaderGroups, getRowModel, setPageIndex, getPageCount, nextPage, previousPage, getCanNextPage, getCanPreviousPage, options } = useReactTable({
        data: dataFinal,
        columns: columnsFinal,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 2
            }
        }
    } as TableOptions<Person>);


    // React.useEffect(() => {
    //     console.log('test', options.state.pagination?.pageIndex);
    // }, []);


    // const correctPageIndex = React.useMemo(()=> {
    //     return options.state.pagination?.pageIndex !== undefined ? options.state.pagination?.pageIndex + 1 : null;
    // }, [options.state.pagination?.pageIndex])

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
                                        return <TableCell key={column.id}>{flexRender(column.column.columnDef.header, column.getContext())}</TableCell>;
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
            <br />
            <div>
                <button onClick={() => setPageIndex(0)} disabled={!getCanPreviousPage()}>
                    {'<<<'}
                </button>
                <button onClick={() => previousPage()} disabled={!getCanPreviousPage()}>
                    {'<'}
                </button>
                <button onClick={() => nextPage()} disabled={!getCanNextPage()}>
                    {'>'}
                </button>
                <button onClick={() => setPageIndex(getPageCount() - 1)} disabled={!getCanNextPage()}>
                    {'>>>'}
                </button>
            </div>
            <div>
                <div>Current page: {options.state.pagination?.pageIndex !== undefined ? options.state.pagination?.pageIndex + 1 : 'error'} of {getPageCount()}</div>
            </div>
        </div>
    );
};

export default PaginationTable1;
