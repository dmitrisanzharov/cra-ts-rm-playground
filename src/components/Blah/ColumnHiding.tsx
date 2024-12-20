import React, { useMemo, useCallback, useEffect, useState } from "react";
import { useReactTable, flexRender, getCoreRowModel, getFilteredRowModel, getFacetedUniqueValues, getFacetedRowModel } from "@tanstack/react-table";
import data from "../table/data";
import { columnDefMain } from "./columnDef";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

type Props = {};

const BasicTable = (props: Props) => {
	const dataMemo = useMemo(() => data, [data]);
	const columnsMemo = useMemo(() => columnDefMain, [columnDefMain]);

	const table = useReactTable({
		data: dataMemo,
		columns: columnsMemo,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedRowModel: getFacetedRowModel(),
	} as any);

		React.useEffect(() => {
			console.log('table', table);
		}, []);

	return (
		<TableContainer component={Paper}>
            <h1>see all columns</h1>
            <input type='checkbox' checked={table.getIsAllColumnsVisible()} onChange={table.getToggleAllColumnsVisibilityHandler()} />{" "}
            <hr />
            <ul>
                {table.getAllLeafColumns().map((column) => {
                    if(!column.getCanHide()){
                        return
                    }
                    return <li key={column.id}><input type='checkbox' checked={column.getIsVisible()} onChange={column.getToggleVisibilityHandler()} /> {column.id}</li>;
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
