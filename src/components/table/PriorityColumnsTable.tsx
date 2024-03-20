import React from 'react';
import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import {
    useReactTable,
    flexRender,
    TableOptions,
    Table,
    getCoreRowModel,
    getSortedRowModel,
} from '@tanstack/react-table';
import {
    columnDef,
    columnDefGrouped,
    columnDefCellFormatting,
    columnDefPriority
} from './columnDefs';
import dataJson from './data';

type Props = {};

const PriorityColumnsTable = (props: Props) => {
    const [sorting, setSorting] = React.useState<any>([]); // add the LOCAL STATE for sorting + make sure TYPE is added, otherwise Typescript will complain

    const data: any = React.useMemo(() => dataJson, []);
    const columns: any = React.useMemo(() => columnDefPriority, []);

    const table: Table<any> = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(), // activate the hook for sorting
        state: {
            sorting: sorting,
        },
        onSortingChange: setSorting, // bind Method of sorting to local state
    } as TableOptions<any>);

    return (
        <TableContainer component={Paper}>
            <MuiTable>
                <TableHead>
                    {table.getHeaderGroups().map((headerGroupEl) => {
                        return (
                            <TableRow key={headerGroupEl.id}>
                                {headerGroupEl.headers.map((columnEl) => {
                                    return (
                                        <TableCell
                                            key={columnEl.id}
                                            sx={{
                                                fontWeight: 'bold',
                                                border: '2px solid black',
                                                '&:hover': {
                                                    cursor: 'pointer',
                                                },
                                            }}
                                            colSpan={columnEl.colSpan}
                                            onClick={columnEl.column.getToggleSortingHandler()} // add onClick function into every Cell of HEADER
                                        >
                                            {columnEl.isPlaceholder ? null : ( // need this CONDITION so we do NOT try to filter, GroupHeaders
                                                <>
                                                    {flexRender(
                                                        columnEl.column
                                                            .columnDef.header,
                                                        columnEl.getContext()
                                                    )}
                                                    {
                                                        {
                                                            asc: ' -UP',
                                                            desc: ' -DOWN',
                                                            nothing: '',
                                                        }[
                                                            columnEl.column.getIsSorted() || // so here it returns either: ASC / DESC / NULL, so if NULL, then return a string that I can use to extract stuff from object
                                                                'nothing'
                                                        ]
                                                    }
                                                </>
                                            )}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableHead>
                <TableBody>
                    {table.getRowModel().rows.map((row) => {
                        return (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => {
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
            </MuiTable>
        </TableContainer>
    );
};

export default PriorityColumnsTable;
