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

	const [value, setValue] = React.useState(top100Films[0]);
	const [inputValue, setInputValue] = React.useState("");

	React.useEffect(() => {
		console.log("value", value);
		console.log("inputValue", inputValue);
	}, [value, inputValue]);

	return (
		<div>
			<h1>This is auto complete jazz</h1>
			<Autocomplete

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

                options={top100Films}
				getOptionLabel={(option: any) => {
					return option.name;
				}}
			/>
		</div>
	);
};

export default Blah;
