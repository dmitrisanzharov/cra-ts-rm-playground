import React, { useMemo, useCallback, useEffect, useState } from "react";
import { useReactTable, flexRender, getCoreRowModel, getFilteredRowModel, getFacetedUniqueValues, getFacetedRowModel, getPaginationRowModel } from "@tanstack/react-table";
import data from "../table/data";
import { columnDefMain } from "./columnDef";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

type Props = {};

const BasicTable = (props: Props) => {
	const dataMemo = useMemo(() => data, [data]);
	const columnsMemo = useMemo(() => columnDefMain, [columnDefMain]);
	const [pageState, setPageState] = useState(2);

	const table = useReactTable({
		data: dataMemo,
		columns: columnsMemo,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedRowModel: getFacetedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageSize: 5,
                pageIndex: 3
			},
		},
	} as any);

	React.useEffect(() => {
		console.log("table", table);
	}, []);

	React.useEffect(() => {
		table.setPageIndex(pageState - 1);
	}, [pageState]);

	return (
		<TableContainer component={Paper}>
			<h2>Jump to page</h2>
			<input type="number" min="1" max={table.getPageCount()} value={pageState} onChange={(e) => setPageState(Number(e.target.value))} />
			<hr />
			<button onClick={() => table.setPageIndex(0)}>first</button>

			<button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
				previous
			</button>
			<button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
				next
			</button>

			<button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>last</button>
			<span>
				{" "}
				Current page: {(table?.options?.state?.pagination?.pageIndex || 0) + 1} of {table.getPageCount()}
			</span>
			<hr />
			<select value={table?.options?.state?.pagination?.pageSize} onChange={(e) => table.setPageSize(Number(e.target.value))}>
				{[5, 10, 15].map((pageSizeEl) => {
					return (
						<option key={pageSizeEl} value={pageSizeEl}>
							Show: {pageSizeEl}
						</option>
					);
				})}
			</select>
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
