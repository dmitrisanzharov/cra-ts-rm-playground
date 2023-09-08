import React from 'react';
import DebouncedInput from './DebounceInput';

function Filter({ column, table }: any) {
    const firstValue = table
        .getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id);

    const columnFilterValue = column.getFilterValue();

    const sortedUniqueValues = React.useMemo(
        () =>
            typeof firstValue === 'number'
                ? []
                : Array.from(column.getFacetedUniqueValues().keys()).sort(),
        [column.getFacetedUniqueValues()]
    );

    return typeof firstValue === 'number' ? (
        <div>
            <div>
                <DebouncedInput
                    type='number'
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
                    value={columnFilterValue?.[0] ?? ''}
                    onChange={(value) =>
                        column.setFilterValue((old: any) => [value, old?.[1]])
                    }
                    placeholder='min'
                />
                <DebouncedInput
                    type='number'
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
                    value={columnFilterValue?.[1] ?? ''}
                    onChange={(value) =>
                        column.setFilterValue((old: any) => [old?.[0], value])
                    }
                    placeholder='max'
                />
            </div>
        </div>
    ) : (
        <>
            <datalist id={column.id + 'list'}>
                {sortedUniqueValues.slice(0, 5000).map((value: any) => (
                    <option value={value} key={value} />
                ))}
            </datalist>
            <DebouncedInput
                type='text'
                value={columnFilterValue ?? ''}
                onChange={(value) => column.setFilterValue(value)}
                placeholder={`Search... `}
                list={column.id + 'list'}
            />
        </>
    );
}

export default Filter;
