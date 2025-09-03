import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// @ts-ignore

type Props = any;

// const topFilms = [
//     { label: "The Shawshank Redemption", year: 1994 },
//     { label: "The Godfather", year: 1972 },
//     { label: "The Godfather: Part II", year: 1974 },
//     { label: "The Dark Knight", year: 2008 },
//     { label: "12 Angry Men", year: 1957 },
//     { label: "Schindler's List", year: 1993 },
//     { label: "Pulp Fiction", year: 1994 },
// ]

const topFilms = [
    { name: "The Shawshank Redemption", year: 1994 },
    { name: "The Godfather", year: 1972 },
    { name: "The Godfather: Part II", year: 1974 },
    { name: "The Dark Knight", year: 2008 },
    { name: "12 Angry Men", year: 1957 },
    { name: "Schindler's List", year: 1993 },
    { name: "Pulp Fiction", year: 1994 },
]

const Blah: React.FC<any> = (props: Props) => {

    const [textFieldValue, setTextFieldValue] = React.useState<string>("");
    const [dropDownValue, setDropdownValue] = React.useState<any>(null);


    React.useEffect(() => {
        console.log('textFieldValue', textFieldValue);
    }, [textFieldValue]);


    return <Box sx={{ p: 4 }}>
        <Autocomplete
            // core
            options={topFilms}
            renderInput={(params) => {
                return <TextField {...params} label="enter movie" placeholder='this is placeholder' sx={{ maxWidth: 600 }} />
            }}

            // typed value
            inputValue={textFieldValue}
            onInputChange={(e, newInputValue) => setTextFieldValue(newInputValue)}

            // selected value
            value={dropDownValue}
            onChange={(e, newSelectedValue) => setDropdownValue(newSelectedValue)}

            // custom label options
            getOptionLabel={(option: any) => {
                return option.name;
            }}

        />

    </Box>;
};

export default Blah;
