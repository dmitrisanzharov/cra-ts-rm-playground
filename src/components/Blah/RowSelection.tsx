import React, { useMemo, useCallback, useEffect, useState } from "react";
import { useReactTable, flexRender, getCoreRowModel, getFilteredRowModel, getFacetedUniqueValues, getFacetedRowModel } from "@tanstack/react-table";
import data from "../table/data";
import { columnDefColumnSelector } from "./columnDef";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

type Props = {};

const BasicTable = (props: Props) => {
	const dataMemo = useMemo(() => data, [data]);
	const columnsMemo = useMemo(() => columnDefColumnSelector, [columnDefColumnSelector]);

    const [rowSelection, setRowSelection] = React.useState({0: true, 1: true})

	const table = useReactTable({
		data: dataMemo,
		columns: columnsMemo,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedRowModel: getFacetedRowModel(),
        state: {
            rowSelection: rowSelection,
            columnOrder: ['email']
        },
        onRowSelectionChange: setRowSelection,
        enableRowSelection: (row: any) => {
            console.log('row', row);
            if(row.id === '3'){
                return false
            }
            return true
        }
	} as any);

		// React.useEffect(() => {
		// 	console.log('table', table);
		// }, []);

        // React.useEffect(() => {
		// 	console.log('rowSelection', rowSelection);
		// }, [rowSelection]);

	return (
		<TableContainer component={Paper}>
            <ul>
                {table.getSelectedRowModel().flatRows.map((row: any)=> {
                    return <li key={row.id}>{JSON.stringify(row.original)}</li>
                })}
            </ul>
            <hr />
			<Table>
				<TableHead>
					{
						table.getHeaderGroups().map((headerRows: any) => {
							return (
								<TableRow key={headerRows.id} sx={{ border: "1px solid red", outline: "1px solid red" }}>
									{headerRows.headers.map((headerCell: any) => {
										return (
											<TableCell key={headerCell.id} sx={{ backgroundColor: "lightgray", fontWeight: "bold" }}>
												{flexRender(headerCell.column.columnDef.header, headerCell.getContext())}
											</TableCell>
										);
									})}
								</TableRow>
							);
						}) as any
					}
				</TableHead>
				<TableBody>
					{table.getRowModel().rows.map((row: any) => {
						return (
							<TableRow key={row.id} sx={{ "&:hover": { backgroundColor: "lightpink" } }}>
								{row.getVisibleCells().map((cell: any) => {
									return <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>;
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default BasicTable;
