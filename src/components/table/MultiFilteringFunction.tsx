import React from 'react';
import { Table, Column } from '@tanstack/react-table';
import DebouncedInput from './DebounceInput';

function MultiFilteringFunction({
    column,
    table,
}: {
    column: Column<any, unknown>;
    table: Table<any>;
}) {
    // const columnFilterValue = column.getFilterValue();

    // const [input, setInput] = React.useState<any>(
    //     column.getFilterValue() ?? ''
    // );

    return <></>;
}

export default MultiFilteringFunction;
