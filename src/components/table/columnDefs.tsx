import { createColumnHelper } from '@tanstack/react-table';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import { TableCell, Tooltip } from '@mui/material';
import ShowstopperSVG from 'src/components/table/PriorityColumnsIcons/showstopper.svg';
import CriticalSVG from 'src/components/table/PriorityColumnsIcons/critical.svg';
import HighestSVG from 'src/components/table/PriorityColumnsIcons/highest.svg';
import HighSVG from 'src/components/table/PriorityColumnsIcons/high.svg';
import MediumSVG from 'src/components/table/PriorityColumnsIcons/medium.svg';
import LowSVG from 'src/components/table/PriorityColumnsIcons/low.svg';
import LowestSVG from 'src/components/table/PriorityColumnsIcons/lowest.svg';

const columnHelper = createColumnHelper<any>();

// * MULTI FILTERING

export const columnDefMultiFilter = [
    columnHelper.accessor('first_name', {
        header: 'First Name',
    }),
    columnHelper.accessor('last_name', {
        header: 'Last Name',
        // enableColumnFilter: false,
    }),
    columnHelper.accessor('email', {
        header: 'Email',
        // enableColumnFilter: false,
    }),
    columnHelper.accessor('gender', {
        header: 'Gender',
        enableColumnFilter: false,
    }),
    columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
        header: 'all in one',
        enableColumnFilter: false,
    }),
];

// * BASIC TABLE

export const columnDef = [
    columnHelper.accessor('first_name', {
        header: 'First Name',
    }),
    columnHelper.accessor('last_name', {
        header: 'Last Name',
    }),
    columnHelper.accessor('email', {
        header: 'Email',
    }),
    columnHelper.accessor('gender', {
        header: 'Gender',
    }),
    columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
        header: 'all in one',
    }),
];

// * Header grouping

export const columnDefGrouped = [
    {
        header: 'stacked',
        columns: [
            columnHelper.accessor('first_name', {
                header: 'First Name',
            }),
            columnHelper.accessor('last_name', {
                header: 'Last Name',
            }),
            columnHelper.accessor('email', {
                header: 'Email',
            }),
        ],
    },

    columnHelper.accessor('gender', {
        header: 'Gender',
    }),
    columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
        header: 'all in one',
    }),
];

// * cell formatting example

export const columnDefCellFormatting = [
    columnHelper.accessor((row) => row.first_name, {
        header: 'First Name'.toUpperCase(),
        cell: ({ getValue }: any) => getValue().toUpperCase(), // here we can format the Values inside the Cell, to a specific value...
    }),
    columnHelper.accessor('last_name', {
        header: 'Last Name',
    }),
    columnHelper.accessor('email', {
        header: 'Email',
    }),
    columnHelper.accessor('gender', {
        header: 'Gender',
    }),
    columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
        header: 'all in one',
    }),
];

// * removing Global and Local filters
export const columnDefRemovedFilters = [
    columnHelper.accessor('first_name', {
        header: 'First Name',
        enableColumnFilter: false, // * removes Column Filter ... NOTE: default value is TRUE
        enableGlobalFilter: false, // * removed Global Filter ... NOTE: default value is TRUE
    }),
    columnHelper.accessor('last_name', {
        header: 'Last Name',
    }),
    columnHelper.accessor('email', {
        header: 'Email',
    }),
    columnHelper.accessor('gender', {
        header: 'Gender',
    }),
    columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
        header: 'all in one',
    }),
];

// * columnDef with Checkbox

export const columnDefWithCheckBox = [
    {
        id: 'select',
        header: ({ table }: any) => (
            <IndeterminateCheckbox
                {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getToggleAllRowsSelectedHandler(),
                }}
            />
        ),
        cell: ({ row }: any) => (
            <IndeterminateCheckbox
                {...{
                    checked: row.getIsSelected(),
                    disabled: !row.getCanSelect(),
                    indeterminate: row.getIsSomeSelected(),
                    onChange: row.getToggleSelectedHandler(),
                }}
            />
        ),
    },
    columnHelper.accessor('first_name', {
        header: 'First Name',
    }),
    columnHelper.accessor('last_name', {
        header: 'Last Name',
    }),
    columnHelper.accessor('email', {
        header: 'Email',
    }),
    columnHelper.accessor('gender', {
        header: 'Gender',
    }),
    columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
        header: 'all in one',
    }),
];

// PRIORITY TABLE; priority follows index: 0 = showstopper; 6 = lowest; 
const priorityObject = [
    { label: 'Showstopper', iconSrc: ShowstopperSVG, priorityNumber: 0 },
    { label: 'Critical', iconSrc: CriticalSVG, priorityNumber: 1 },
    { label: 'Highest', iconSrc: HighestSVG, priorityNumber: 2 },
    { label: 'High', iconSrc: HighSVG, priorityNumber: 3 },
    { label: 'Medium', iconSrc: MediumSVG, priorityNumber: 4 },
    { label: 'Low', iconSrc: LowSVG, priorityNumber: 5 },
    { label: 'Lowest', iconSrc: LowestSVG, priorityNumber: 6 },
];

// let priorityObjectMain = {
//     showstopper: { label: 'Showstopper', iconSrc: 'https://rentalmatix.atlassian.net/images/icons/priorities/medium.svg', priorityNumber: 7 },
//     critical: { label: 'Critical', iconSrc: 'https://rentalmatix.atlassian.net/images/icons/priorities/medium.svg', priorityNumber: 6 },
//     highest: { label: 'Highest', iconSrc: 'https://rentalmatix.atlassian.net/images/icons/priorities/medium.svg', priorityNumber: 5 },
//     high: { label: 'High', iconSrc: 'https://rentalmatix.atlassian.net/images/icons/priorities/medium.svg', priorityNumber: 4 },
//     medium: { label: 'Medium', iconSrc: 'https://rentalmatix.atlassian.net/images/icons/priorities/medium.svg', priorityNumber: 3 },
//     low: { label: 'Low', iconSrc: 'https://rentalmatix.atlassian.net/images/icons/priorities/medium.svg', priorityNumber: 2 },
//     lowest: { label: 'Lowest', iconSrc: 'https://rentalmatix.atlassian.net/images/icons/priorities/medium.svg', priorityNumber: 1 },
// };


function priorityAccessorFn(row: any) {

    const isShowstopperTrue: boolean = false; // needs condition
    const isCriticalTrue: boolean = false; // needs condition
    const isHighestTrue: boolean = false; //s need condition
    const isHighTrue: boolean = row.id % 2 === 0;
    // isMediumTrue = does NOT apply, since it is default
    const isLowTrue: boolean = false; // needs condition
    const isLowestTrue: boolean = false; // needs condition


    if(isShowstopperTrue){
        return 0;
    }

    if(isCriticalTrue){
        return 1;
    }

    if(isHighestTrue){
        return 2;
    }

    if (isHighTrue) {
        return 3;
    }

    // medium is 4, but it is last, i.e. default return

    if(isLowTrue){
        return 5
    }

    if(isLowestTrue){
        return 6;
    }

    return priorityObject[4].priorityNumber;
}

export const columnDefPriority = [
    columnHelper.accessor('first_name', {
        header: 'First Name',
    }),
    columnHelper.accessor('last_name', {
        header: 'Last Name',
    }),
    columnHelper.accessor(priorityAccessorFn, {
        header: 'Priority',
        cell: (info) => {
            console.log('info', info);
            return <PriorityCellRenderer value={info.getValue()} cell={info.cell} />
        }
    }),
    columnHelper.accessor('email', {
        header: 'Email',
    }),
    columnHelper.accessor('gender', {
        header: 'Gender',
    }),
    columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
        header: 'all in one',
    }),
];



export const PriorityCellRenderer = ({ value, cell, align = 'left', ...rest }: any) => {

    const iconSize: number = 16;

    const priorityJSX: any = <img src={priorityObject[value].iconSrc} alt={priorityObject[value].label} height={iconSize} width={iconSize} />
    // const priorityJSX: any = <div>{value}: {priorityObject[value].label}</div>

    return (
        <TableCell align={align} id={cell.id} key={cell.id} {...rest}>
            <Tooltip title={priorityObject[value].label}>{value ? priorityJSX : <div>nothing</div>}</Tooltip>
        </TableCell>
    );
};