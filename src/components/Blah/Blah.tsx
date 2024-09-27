import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createFilterOptions } from "@mui/material";
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
	const filmsData = React.useMemo(
		() => [
			{ name: "The Shawshank Redemption", year: 1994 },
			{ name: "The Godfather", year: 1972 },
			{ name: "The Godfather: Part II", year: 1974 },
		],
		[]
	);

	const [inputValueState, setInputValueState] = React.useState("");
	const [selectedOptionState, setSelectedOptionState] = React.useState<any>(null); // used to be empty string

	const filterOptionsArr = ["one", "two", "three"];

	const configFilterFunction = createFilterOptions({ limit: 3 });

	return (
		<Box sx={{ border: "1px solid gray", padding: 2 }}>
			<Autocomplete
				sx={{ maxWidth: 650 }}
				// core of the component
				options={filmsData}
				renderInput={(params: any) => {
					// console.log('params', params);
					return <TextField {...params} label="Movies" />;
				}}
				// controlled, text field
				inputValue={inputValueState}
				onInputChange={(e, newInputValue) => setInputValueState(newInputValue)}
				// dropdown value
				value={selectedOptionState}
				onChange={(e, newValue) => setSelectedOptionState(newValue)}
				// customLabel
				getOptionLabel={(option: any)=> option.name}

				// filter options
				filterOptions={(originalArray: any, state: any) => {
					console.log('originalArray', originalArray);
					console.log('state', state);

					if (state.inputValue === "yo") { // when I type something OR select something that is NOT found in the original array
						return [{name: "one"}, {name: "two"}, {name: "three"}];
					}
					return originalArray;
				}}
				
				isOptionEqualToValue={(originalOptionArray: any, selectedValue: any) => { // map selected values to originalArray Values
					console.log("option", originalOptionArray);
					console.log("value", selectedValue);

                    if(selectedValue.name === 'one' && originalOptionArray.name === 'The Shawshank Redemption'){
                        return true;
                    }

                    if(selectedValue.name === 'two' && originalOptionArray.name === 'The Godfather'){
                        return true;
                    }

                    if(selectedValue.name === 'three' && originalOptionArray.name === 'The Godfather: Part II'){
                        return true;
                    }
	
                    return false;
				}}

				// minor props
			/>
		</Box>
	);
};

export default Blah;
