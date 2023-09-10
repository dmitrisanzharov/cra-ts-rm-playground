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
    getFilteredRowModel, // * add the Hook
} from '@tanstack/react-table';
import { columnDef, columnDefGrouped } from './columnDefs';
import dataJson from './data';

type Props = {};

const GlobalFilteringTableWithDefaultColumn = (props: Props) => {
    const data: any = React.useMemo(() => dataJson, []);
    const columns: any = React.useMemo(() => columnDef, []);

    const [filtering, setFiltering] = React.useState<string>(''); // * add local state

    const defaultColumn = React.useMemo(
        () => ({
            victor: 'yo',
        }),
        []
    );

    const table: Table<any> = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        defaultColumn: defaultColumn,
        getFilteredRowModel: getFilteredRowModel(), // * import the hook
        state: {
            globalFilter: filtering, // * bind local state to the Table state
        },
        onGlobalFilterChanged: setFiltering, // * bind local Change State to the Table Filter State
    } as TableOptions<any>);

    return (
        <TableContainer component={Paper}>
            <input // * add the Input field
                type='text'
                value={filtering} // * bind value to the Local state... this is already binded to the table state
                onChange={(e) => setFiltering(e.target.value)} // * bind the onChange function to the Local setState ... which is already binded to the table setState thingy
            />
            <hr />
            <MuiTable>
                <TableHead>
                    {table.getHeaderGroups().map((headerGroupEl) => {
                        console.log(table);

                        return (
                            <TableRow key={headerGroupEl.id}>
                                {headerGroupEl.headers.map((columnEl) => {
                                    return (
                                        <TableCell
                                            key={columnEl.id}
                                            sx={{
                                                fontWeight: 'bold',
                                                border: '2px solid black',
                                            }}
                                            colSpan={columnEl.colSpan}
                                        >
                                            {flexRender(
                                                columnEl.column.columnDef
                                                    .header,
                                                columnEl.getContext()
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

export default GlobalFilteringTableWithDefaultColumn;
