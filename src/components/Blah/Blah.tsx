import React from "react";
import { Box, Skeleton, Typography, Autocomplete, TextField } from "@mui/material";
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const [inputValue, setInputValue] = React.useState<any>(null);
    const [value, setValue] = React.useState<any>(null);  


	const top100Films = React.useMemo(
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

    React.useEffect(() => {
        console.log('inputValue text field change', inputValue);
        console.log('drop down change', value);
    }, [inputValue]);

	return (
		<div>
			<h1>This is autocomplete</h1>
			<Autocomplete
                // text input
                inputValue={inputValue}
                onInputChange={(e, newInputValue)=> setInputValue(newInputValue)}

                // selected option
                value={value}
                onChange={(e, newValue: any)=> setValue(newValue)}

                // label swap
                getOptionLabel={(option: any)=> {
                    return option.name; 
                }}
                isOptionEqualToValue={()=> true}

                // filterOptions, swap the options in the dropdown
                filterOptions={(originalOptions: any)=> {
                    console.log('originalOptions', originalOptions)
                    return originalOptions.map((el: any, idx: number) => ({name: String(idx)}))
                }}

                // all other stuff
				options={top100Films}
				sx={{ width: 300 }}
				renderInput={(params) => {
                    // console.log('params', params);
                    return (
                        <TextField {...params} name="Movie" placeholder='Movie' />
                    )
                }}
			/>
		</div>
	);
};

export default Blah;
