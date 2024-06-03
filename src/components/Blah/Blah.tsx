import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
	const filmsData = React.useMemo(
		() => [
			{ name: "The Shawshank Redemption", year: 1994 },
			{ name: "The Godfather", year: 1972 },
			{ name: "The Godfather: Part II", year: 1974 },
			{ name: "The Dark Knight", year: 2008 },
			{ name: "12 Angry Men", year: 1957 },
			{ name: "Schindler's List", year: 1993 },
			{ name: "Pulp Fiction", year: 1994 },
		],
		[]
	);

	const [inputQueryValue, setInputQueryValue] = React.useState("");
	const [selectedValue, setSelectedValue] = React.useState<any>(filmsData[0]);

	React.useEffect(() => {
		console.log("inputQueryValue", inputQueryValue);
	}, [inputQueryValue]);

	return (
		<div>
			<h1>Autocomplete component</h1>
			<Autocomplete
                // core
                // DROPDOWN OPTIONS
                options={filmsData}
                // input that will be used for the search
				renderInput={(params) => {
					// console.log('params', params)
					return (
						<TextField {...params} placeholder="what is that?" />
					);
				}}

				// input query value binding to local state
				inputValue={inputQueryValue}
				onInputChange={(e, newInputValue) =>
					setInputQueryValue(newInputValue)
				}

				// selected value binding to local state
				value={selectedValue}
				onChange={(e, newSelectedValue: any) =>
					setSelectedValue(newSelectedValue)
				}

				// if options objects do NOT have 'label' in them, here I can map it to any KEY in the object
				getOptionLabel={(option: any) => option.name}

				// change dropdown options to CUSTOM OPTIONS
				filterOptions={(orgOptionsArray: any) => {
					return orgOptionsArray.map((el: any) => ({
						name: el.year,
						year: el.name,
					}));
				}}

				// error avoidance
				isOptionEqualToValue={() => true}

				// styling
				sx={{ width: 300 }}
			/>
		</div>
	);
};

export default Blah;
