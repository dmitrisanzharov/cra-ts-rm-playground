import React from "react";
import {
	useReactTable,
	TableOptions,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
} from "@tanstack/react-table";
import TableMUI from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import jsonData from "./tableData.json";
import { columns, Person } from "./columnDef";
import { Box, SxProps, Icon } from "@mui/material";

type Props = {};

const PagTable1 = (props: Props) => {
	const dataFinal: Person[] = React.useMemo(() => jsonData, [jsonData]);
	const columnsFinal = React.useMemo(() => columns, [columns]);
	const {
		getHeaderGroups,
		getRowModel,
		setPageIndex,
		getPageCount,
		nextPage,
		previousPage,
		getCanNextPage,
		getCanPreviousPage,
		options,
		setPageSize,
	} = useReactTable({
		data: dataFinal,
		columns: columnsFinal,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageSize: 2,
			},
		},
	} as TableOptions<Person>);

	const currentPage: number = React.useMemo(() => {
		const isUndefined: Boolean =
			options?.state?.pagination?.pageIndex === undefined ||
			options?.state?.pagination?.pageIndex === null;
		return isUndefined
			? 0
			: (options?.state?.pagination?.pageIndex as number);
	}, [options?.state?.pagination?.pageIndex]);

	const mySx1: SxProps = {
		fontWeight: "bold",
	};

	const mySx2: SxProps = {
		color: "red",
	};

	const mySx3: SxProps = {
		...mySx1,
		...mySx2,
	};

	return (
		<div>
			<Box sx={mySx3}>Check</Box>
			<Icon>star</Icon>
			<hr />
			<h1>Basic Table Stuff</h1>
			<hr />
			<TableContainer component={Paper}>
				<TableMUI sx={{ minWidth: 650 }}>
					<TableHead>
						{getHeaderGroups().map((headerGroup: any) => {
							return (
								<TableRow
									key={headerGroup.id}
									sx={{
										fontWeight: "bold",
										backgroundColor: "lightgray",
									}}
								>
									{headerGroup.headers.map(
										(column: any, idx: number) => {
											console.log("column", column);
											return (
												<TableCell
													key={column.id}
													colSpan={column.colSpan}
												>
													{column.isPlaceholder
														? null
														: flexRender(
																column.column
																	.columnDef
																	.header,
																column.getContext()
														  )}
												</TableCell>
											);
										}
									)}
								</TableRow>
							);
						})}
					</TableHead>
					<TableBody>
						{getRowModel().rows.map((row: any) => {
							return (
								<TableRow key={row.id}>
									{row.getVisibleCells().map((cell: any) => {
										return (
											<TableCell key={cell.id}>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</TableMUI>
			</TableContainer>
			<Box>
				<Box>
					<button
						type="button"
						onClick={() => setPageIndex(0)}
						disabled={!getCanPreviousPage()}
					>
						{"<<<"}
					</button>
					<button
						type="button"
						onClick={() => previousPage()}
						disabled={!getCanPreviousPage()}
					>
						{"<"}
					</button>
					<button
						type="button"
						onClick={() => nextPage()}
						disabled={!getCanNextPage()}
					>
						{">"}
					</button>
					<button
						type="button"
						onClick={() => setPageIndex(getPageCount() - 1)}
						disabled={!getCanNextPage()}
					>
						{">>>"}
					</button>
				</Box>
				<hr />
				<Box>
					<Box>
						Page number: {currentPage + 1} of {getPageCount()}
					</Box>
					<Box>
						Jump to page:
						<input
							type="number"
							value={currentPage + 1}
							onChange={(e) =>
								setPageIndex(Number(e.target.value))
							}
							min="1"
							max="10"
						/>
					</Box>
					<Box>
						<h1>Set Page Size</h1>
						<select
							value={options.state.pagination?.pageSize}
							onChange={(e) => setPageSize(+e.target.value)}
						>
							{[2, 3, 5].map((pageSize: number) => {
								return (
									<option key={pageSize} value={pageSize}>
										Set to: {pageSize}
									</option>
								);
							})}
						</select>
					</Box>
				</Box>
			</Box>
		</div>
	);
};

export default PagTable1;
