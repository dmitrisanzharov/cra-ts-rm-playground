import React from 'react';
import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box
} from '@mui/material';
import {
    useReactTable,
    flexRender,
    TableOptions,
    Table,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    SortingState,
    getPaginationRowModel
} from '@tanstack/react-table';
import { columnDef, columnDefWithGroup } from './blahColumns';
import dataJson from '../table/data';

type Props = {};

const initialColumnVisibility = {
    first_name: true
};

const BasicTable = (props: Props) => {
    const data: any = React.useMemo(() => dataJson, []);
    const columns: any = React.useMemo(() => columnDefWithGroup, []);
    const [columnVisibility, setColumnVisibility] = React.useState<any>(initialColumnVisibility);
    const [sorting, setSorting] = React.useState<SortingState>([{ id: 'first_name', desc: true }]);
    const [globalFilter, setGlobalFilter] = React.useState('');
    const [pageIndexNumber, setPageIndexNumber] = React.useState(0);
    const [rowSelection, setRowSelection] = React.useState<any>({});
    const [columnOrder, setColumnOrder] = React.useState<any>([]);

    const table: Table<any> = useReactTable({
        data,
        columns,
        initialState: {
            // columnFilters: [
            //     {
            //         id: 'first_name',
            //         value: 'Arlene'
            //     }
            // ]
            pagination: {
                pageSize: 3
            }
        },
        // defaultColumn: {
        //     id: '1'
        // },
        state: {
            columnVisibility: columnVisibility,
            sorting,
            globalFilter,
            rowSelection,
            columnOrder
        },
        enableRowSelection: (row: any) => row.original.gender === 'Female',
        onSortingChange: setSorting,
        onColumnVisibilityChange: setColumnVisibility,
        onGlobalFilterChange: setGlobalFilter,
        onRowSelectionChange: setRowSelection,
        onColumnOrderChange: setColumnOrder,

        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    } as TableOptions<any>);

    // consoles
    // console.log('test columns', table.options.columns);
    // console.log('test a', table.getAllColumns());
    // console.log('test2', table.options.data);
    // console.log('filters', table.getState().columnFilters);

    React.useEffect(() => {
        // table.setColumnFilters([
        //     {
        //         id: 'first_name',
        //         value: 'Arlene'
        //     }
        // ]);

        let a = table.getHeaderGroups();
        // console.log('omg', a);
    }, []);

    function sortingReturn(sortState: any) {
        // console.log('sortState: ', sortState);
        return `- ${sortState || 'none'}`;
    }

    return (
        <TableContainer component={Paper}>
            table columns all hide / show{' '}
            <input
                type='checkbox'
                checked={table.getIsAllColumnsVisible()}
                onChange={table.getToggleAllColumnsVisibilityHandler()}
            />
            <hr />
            <button onClick={() => setColumnOrder(['gender', 'email'])}>set column order</button>
            <hr />
            <button onClick={() => table.resetRowSelection()}>reset</button>
            <Box sx={{ mb: 3 }}>
                select all rows{' '}
                <input
                    type='checkbox'
                    checked={table.getIsAllRowsSelected()}
                    onChange={table.getToggleAllRowsSelectedHandler()}
                />
                <hr />
                <ul>
                    {table.getSelectedRowModel().flatRows.map((el) => {
                        // * HERE I can see all the Selected Row being listed... core code here is: .getSelectedRowModel
                        // console.log('elTest', el);
                        return (
                            <li key={el.id}>
                                {Number(el.id) + 1} - {JSON.stringify(el.original)}
                            </li>
                        );
                    })}
                </ul>
                <Box>Selected rows: {table.getSelectedRowModel().rows.length}</Box>
            </Box>
            <hr />
            <Box sx={{ mb: 2 }}>
                <input
                    type='text'
                    value={pageIndexNumber}
                    onChange={(e) => setPageIndexNumber(Number(e.target.value))}
                />
                <button onClick={() => table.setPageIndex(pageIndexNumber - 1)}>Go to page</button>
            </Box>
            <Box sx={{ mb: 3, display: 'flex', gap: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
                <Box>
                    Current page: {(table?.options?.state?.pagination?.pageIndex ?? 0) + 1} of {table.getPageCount()}
                </Box>
                <button onClick={() => table.setPageIndex(0)}>first page</button>
                <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>last page</button>
                <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                    previous page
                </button>
                <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    next page
                </button>
                <select
                    value={table?.options?.state?.pagination?.pageSize}
                    onChange={(e) => table.setPageSize(Number(e.target.value))}
                >
                    {[2, 3, 5].map((pageSizeEl) => {
                        return (
                            <option key={pageSizeEl} value={pageSizeEl}>
                                Show: {pageSizeEl}
                            </option>
                        );
                    })}
                </select>
            </Box>
            <hr />
            <Box>
                <input type='text' value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} />
            </Box>
            <button
                onClick={() => setColumnVisibility({ ...columnVisibility, first_name: !columnVisibility.first_name })}
            >
                toggle first_name
            </button>
            <MuiTable>
                <TableHead sx={{ border: '3px solid red' }}>
                    {table.getHeaderGroups().map((headerGroupItem: any) => {
                        return (
                            <TableRow key={headerGroupItem.id}>
                                {headerGroupItem.headers.map((headerColumnItem: any) => {
                                    // console.log('headerColumnItem', headerColumnItem.colSpan)
                                    const headerSpan = headerColumnItem.colSpan;
                                    const isPlaceholder = headerColumnItem.isPlaceholder;
                                    const canFilter = headerColumnItem.column.getCanFilter();
                                    // console.log('============================');
                                    // console.log('headerColumnItem', headerColumnItem.column)
                                    // console.log('canFilter', canFilter)
                                    if (isPlaceholder) {
                                        return null;
                                    }
                                    return (
                                        <TableCell
                                            key={headerColumnItem.id}
                                            colSpan={headerSpan}
                                            sx={{ backgroundColor: headerSpan > 1 ? 'darkorange' : 'gray' }}
                                            onClick={headerColumnItem.column.getToggleSortingHandler()}
                                        >
                                            {flexRender(
                                                headerColumnItem.column.columnDef.header,
                                                headerColumnItem.getContext()
                                            )}
                                            {headerSpan === 1 && sortingReturn(headerColumnItem.column.getIsSorted())}
                                            {/* {headerColumnItem.column.getCanFilter() && <input
                                                type='text'
                                                value={headerColumnItem.column.getFilterValue()}
                                                onChange={(e) => headerColumnItem.column.setFilterValue(e.target.value)}
                                            />} */}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableHead>
                <TableBody>
                    {table.getRowModel().rows.map((rowItem: any) => {
                        // console.log('rowItem', rowItem)
                        return (
                            <TableRow key={rowItem.id}>
                                {rowItem.getVisibleCells().map((cellItem: any) => {
                                    return (
                                        <TableCell key={cellItem.id}>
                                            {flexRender(cellItem.column.columnDef.cell, cellItem.getContext())}
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

export default BasicTable;
