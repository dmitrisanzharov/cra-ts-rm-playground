import React, { useMemo, useCallback, useEffect, useState } from "react";
import { useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";
import data from "../table/data";
import { columnDefMain } from "./columnDef";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

type Props = {};

const BasicTable = (props: Props) => {

    const dataMemo = useMemo(()=> data, [data]);
    const columnsMemo = useMemo(()=> columnDefMain,[columnDefMain])

    const table = useReactTable({
        data: dataMemo,
        columns: columnsMemo,
        getCoreRowModel: getCoreRowModel()
    })


    useEffect(() => {
        console.log('table', table)
    }, [table])


	return <TableContainer component={Paper}>
        <Table>
            <TableHead>

            </TableHead>
        </Table>
    </TableContainer>
};

export default BasicTable;
