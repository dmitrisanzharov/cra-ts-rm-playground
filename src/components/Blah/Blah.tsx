import React from "react";
import { Autocomplete, TextField } from "@mui/material";
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
	const top100Films = React.useMemo(
		() => [
			{ name: "The Shawshank Redemption", year: 1994 },
			{ name: "The Godfather", year: 1972 },
		],
		[]
	);

	const [value, setValue] = React.useState<any>(null);
	const [inputValue, setInputValue] = React.useState("");

	React.useEffect(() => {
		console.log("value", value);
		console.log("inputValue", inputValue);
	}, [value, inputValue]);

	return (
		<div>
			<h1>This is auto complete jazz</h1>
			<Autocomplete
				options={top100Films}
				getOptionLabel={(option: any) => {
					return option.name;
				}}
                filterOptions={(originalOptions: any)=> [{name: 'aga'}, {name: 'yo mama'}] as any}
                isOptionEqualToValue={()=> true}
				// value
				value={value}
				onChange={(e, newValue: any) => setValue(newValue)}
				// inputState / textFieldState
				inputValue={inputValue}
				onInputChange={(e, newInputValue) =>
					setInputValue(newInputValue)
				}
				// all other stuff
				sx={{ width: 300 }}
				renderInput={(params) => {
					return <TextField {...params} label="Movie" />;
				}}
			/>
		</div>
	);
};

export default Blah;
