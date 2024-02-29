import React from 'react';
import { useReactTable, TableOptions, flexRender, getCoreRowModel, getFilteredRowModel } from '@tanstack/react-table';
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

const ColumnFilterPerColumn = (props: Props) => {
    const [columnFilters, setColumnFilters] = React.useState([]);

    const defaultColumn = { laLand: 'mah man'}; 

    const dataFinal: Person[] = React.useMemo(() => jsonData, [jsonData]);
    const columnsFinal = React.useMemo(() => columns, [columns]);
    const { getHeaderGroups, getRowModel, getPreFilteredRowModel, getGlobalFacetedRowModel } = useReactTable({
        data: dataFinal,
        columns: columnsFinal,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        defaultColumn: defaultColumn,
    } as TableOptions<Person>);

    // React.useEffect(() => {
    //     console.log('table test', getPreFilteredRowModel());
    //     console.log('table test2', getGlobalFacetedRowModel());
    // }, [getPreFilteredRowModel(), getGlobalFacetedRowModel()]);

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
                                        console.log('column', column);
                                        return <TableCell key={column.id}>
                                            {column.column.getCanFilter() && <input type='text' value={column.column.getFilterValue()} onChange={e => column.column.setFilterValue(e.target.value)} /> }
                                            <>{flexRender(column.column.columnDef.header, column.getContext())}</>
                                        </TableCell>;
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

export default ColumnFilterPerColumn;
