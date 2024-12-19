import React, { useMemo, useCallback, useEffect, useState } from "react";
import { useReactTable, flexRender, getCoreRowModel, getFilteredRowModel, getFacetedUniqueValues, getFacetedRowModel, getSortedRowModel, SortingState } from "@tanstack/react-table";
import data from "../table/data";
import { columnDefSorting } from "./columnDef";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

type Props = {};

const BasicTable = (props: Props) => {
	const dataMemo = useMemo(() => data, [data]);
	const columnsMemo = useMemo(() => columnDefSorting, [columnDefSorting]);

    const [sorting, setSorting] = React.useState<SortingState>([]);

	const table = useReactTable({
		data: dataMemo,
		columns: columnsMemo,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedRowModel: getFacetedRowModel(),
		getSortedRowModel: getSortedRowModel(),
        state: {
            sorting: sorting,
        },
        onSortingChange: setSorting
	} as any);

	function displaySorting(arg: any) {
		if (arg === "asc") {
			return "🔼";
		}

		if (arg === "desc") {
			return "🔽";
		}

		return "no sort";
	}

	return (
		<TableContainer component={Paper}>
            <button onClick={()=> setSorting([{id: 'first_name', desc: true}])}>sort me</button>
            <hr />
			<Table>
				<TableHead>
					{
						table.getHeaderGroups().map((headerRows: any) => {
							return (
								<TableRow key={headerRows.id} sx={{ border: "1px solid red", outline: "1px solid red" }}>
									{headerRows.headers.map((headerCell: any) => {
										console.log("headerCell", headerCell);
										return (
											<TableCell key={headerCell.id} sx={{ backgroundColor: "lightgray", fontWeight: "bold" }}>
												{flexRender(headerCell.column.columnDef.header, headerCell.getContext())}
												{headerCell.column.getCanSort() && (
													<button onClick={headerCell.column.getToggleSortingHandler()}>{displaySorting(headerCell.column.getIsSorted())}</button>
												)}
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
