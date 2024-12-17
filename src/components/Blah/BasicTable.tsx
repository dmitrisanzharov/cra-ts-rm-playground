import React, { useMemo, useCallback, useEffect, useState } from "react";
import { useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";
import data from "../table/data";
import { columnDefMain } from "./columnDef";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

type Props = {};

const BasicTable = (props: Props) => {

    const dataMemo = useMemo(()=> data, [data]);
    const columnsMemo = useMemo(()=> columnDefMain, [columnDefMain])

    const table = useReactTable({
        data: dataMemo,
        columns: columnsMemo,
        getCoreRowModel: getCoreRowModel()
    } as any)


    // useEffect(() => {
    //     console.log('table', table.options)
    // }, [table])


	return <TableContainer component={Paper}>
        <Table>
            <TableHead>
                {table.getHeaderGroups().map((headerRows: any) => {
                    return <TableRow key={headerRows.id} sx={{border: '1px solid red', outline: '1px solid red'}}>
                        {headerRows.headers.map((headerCell: any)=> {
                            console.log('headerCell', headerCell.colSpan)
                            return <TableCell key={headerCell.id} sx={{backgroundColor: 'lightgray', fontWeight: 'bold'}}>
                                {flexRender(headerCell.column.columnDef.header, headerCell.getContext())}
                            </TableCell>
                        })}
                    </TableRow>
                }) as any}
            </TableHead>
            <TableBody>
                {table.getRowModel().rows.map((row: any)=> {
                    console.log('row', row.getValue('first_name'))
                    return <TableRow key={row.id} sx={{'&:hover': {backgroundColor: 'lightpink'}}}>
                        {row.getVisibleCells().map((cell: any) => {
                            return <TableCell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableCell>
                        })}
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
};

export default BasicTable;
