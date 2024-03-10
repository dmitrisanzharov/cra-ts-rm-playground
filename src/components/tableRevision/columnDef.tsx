import { InputAdornmentTypeMap } from "@mui/material";
import { createColumnHelper, ColumnDef } from "@tanstack/react-table";

export type Person = {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	gender: string;
	blank?: string
};

type Blah = {
	blah: string;
};

const columnHelper = createColumnHelper<Person>();

export const columns: ColumnDef<Person, any>[] = [
	columnHelper.accessor("id", {
		header: "id",
		blah: "blah",
	} as ColumnDef<Person, any>),
	columnHelper.accessor("first_name", {
		header: "First Name",
		filterFn: "includesStringSensitive",
	}),
	columnHelper.accessor("last_name", {
		header: "Last Name",
	}),
	columnHelper.accessor("email", {
		header: "Email",
	}),
	columnHelper.accessor("gender", {
		header: "Gender",
		enableColumnFilter: false,
	}),
];



// * PLAYGROUND

function blankAccessorFn(row: any){
	console.log('row', row);
	const test1 = row.id % 2;
	console.log("test1: ", test1);

	if(row.id%2 === 0){
		return 'high'
	}

	return 'medium'
}




export const columnsPlayground: ColumnDef<Person, any>[] = [
	columnHelper.accessor("id", {
		header: "id",
		blah: "blah",
	} as ColumnDef<Person, any>),
	columnHelper.accessor("first_name", {
		header: "First Name",
		filterFn: "includesStringSensitive",
	}),
	columnHelper.accessor("last_name", {
		header: "Last Name",
	}),
	columnHelper.accessor("email", {
		header: "Email",
	}),
	columnHelper.accessor("gender", {
		header: "Gender",
		enableColumnFilter: false,
	}),
	columnHelper.accessor(blankAccessorFn, {
		header: "Blank",
		cell: (info) => <span style={info.getValue() === 'high' ? {color: 'red'} : {}}>{info.getValue()}</span>,
	}),
];


export const columnsGroup: ColumnDef<Person, any>[] = [
	{
		header: "Naming Stuff",
		columns: [
			columnHelper.accessor("first_name", {
				header: "First Name",
				filterFn: "includesStringSensitive",
			}),
			columnHelper.accessor("last_name", {
				header: "Last Name",
			}),
		],
	},
	columnHelper.accessor("id", {
		header: "id",
		blah: "blah",
	} as ColumnDef<Person, any>),
	columnHelper.accessor("email", {
		header: "Email",
	}),
	columnHelper.accessor("gender", {
		header: "Gender",
		enableColumnFilter: false,
	}),
];

export const columnsFace: ColumnDef<Person, any>[] = [
	columnHelper.accessor("id", {
		header: "id",
		blah: "blah",
	} as ColumnDef<Person, any>),
	columnHelper.accessor("first_name", {
		header: "First Name",
		filterFn: "includesStringSensitive",
	}),
	columnHelper.accessor("last_name", {
		header: "Last Name",
	}),
	columnHelper.accessor("email", {
		header: "Email",
	}),
	columnHelper.accessor("gender", {
		header: "Gender",
		enableColumnFilter: false,
		cell: (info: any) => (info.getValue() === "Male" ? "mahMan" : "rest"),
	}),
];

export const columnsSort = [
	columnHelper.accessor("first_name", {
		header: "First Name",
	}),
	columnHelper.accessor("gender", {
		header: "Gender",
		enableSorting: false,
		cell: (info) =>
			info.getValue() === "Male" ? "mah man" : "wonder woman",
	}),
	columnHelper.accessor("id", {
		header: "id",
		cell: (info) => info.getValue() + "yo",
	}),
	columnHelper.accessor("last_name", {
		header: "Last Name",
	}),
	columnHelper.accessor("email", {
		header: "Email",
	}),
];

export const columnsSelect = [
	{
		id: "select-col",
		header: ({ table }: any) => (
			<input
				type="checkbox"
				checked={table.getIsAllRowsSelected()}
				onChange={table.getToggleAllRowsSelectedHandler()}
			/>
		),
		cell: ({ row }: any) => (
			<input
				type="checkbox"
				checked={row.getIsSelected()}
				disabled={!row.getCanSelect()}
				onChange={row.getToggleSelectedHandler()}
			/>
		),
	},
	columnHelper.accessor("id", {
		header: "id",
		cell: (info) => info.getValue() + "yo",
	}),
	columnHelper.accessor("first_name", {
		header: "First Name",
	}),
	columnHelper.accessor("last_name", {
		header: "Last Name",
	}),
	columnHelper.accessor("email", {
		header: "Email",
	}),
	columnHelper.accessor("gender", {
		header: "Gender",
		enableSorting: false,
		cell: (info) =>
			info.getValue() === "Male" ? "mah man" : "wonder woman",
	}),
];
