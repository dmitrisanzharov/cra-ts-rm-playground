import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// @ts-ignore

type Props = any;

const topFilms = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
];



const Blah: React.FC<any> = (props: Props) => {

    const [inputValueState, setInputValueState] = React.useState('');
    const [valueState, setValueState] = React.useState<any>(topFilms[3]);

    React.useEffect(() => {
        console.log('inputValueState: ', inputValueState);
        console.log('valueState: ', valueState);
    }, [inputValueState, valueState]);


    return (
        <Box sx={{ m: 2, p: 2 }}>
            <Autocomplete
                options={topFilms}
                renderInput={(params) => {
                    // console.log('params: ', params);
                    // console.log('params.inputProps: ', params.inputProps.value);

                    return <TextField {...params} label='Movie' />;
                }}

                // states
                inputValue={inputValueState}
                onInputChange={(event, newInputValue) => {
                    setInputValueState(newInputValue);
                }}
                value={valueState}
                onChange={(event, newValue) => {
                    setValueState(newValue);
                }}


                // sx
                sx={{ width: 400 }}
            />
        </Box>
    );
};

export default Blah;
