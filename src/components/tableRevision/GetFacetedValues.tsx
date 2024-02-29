import React from 'react';
import { useReactTable, TableOptions, flexRender, getCoreRowModel, getFacetedUniqueValues } from '@tanstack/react-table';
import TableMUI from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import jsonData from './tableData.json';
import { columns, Person, columnsFace } from './columnDef';

type Props = {};

const GetFacetedValues = (props: Props) => {
    const dataFinal: Person[] = React.useMemo(() => jsonData, [jsonData]);
    const columnsFinal = React.useMemo(() => columnsFace, [columnsFace]);
    const { getHeaderGroups, getRowModel } = useReactTable({
        data: dataFinal,
        columns: columnsFinal,
        getCoreRowModel: getCoreRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    } as TableOptions<Person>);

    const table = useReactTable({
        data: dataFinal,
        columns: columnsFinal,
        getCoreRowModel: getCoreRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    } as TableOptions<Person>);

    // React.useEffect(() => {
    //     table.getAllColumns().map((column: any)=> {
    //         console.log('column', column.getFacetedRowModel());
    //         column.getFacetedRowModel().rows.map((row: any)=> {
    //             console.log('row', row.getValue('gender'))
    //         })
    //     });
    // }, []);

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
                        {getRowModel().rows.map((row: any, idx: any) => {
                            // if(idx === 1){
                            //     console.log('row', row)
                            //     console.log('value', row.getValue('gender'))
                            //     console.log('renderValue', row.renderValue('gender'))
                            // }
                            return (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell: any, idx: any) => {

                                        if(cell.id === '0_gender' || cell.id === '1_gender'){
                                            console.log('cell', cell)
                                            console.log('cell flex', cell.column.getFacetedUniqueValues());
                                        }


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

export default GetFacetedValues;
