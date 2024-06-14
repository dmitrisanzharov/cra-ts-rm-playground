import React from 'react';
import { Box, Skeleton, Typography, Autocomplete, TextField } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    const filmsData = React.useMemo(
        () => [
            // { label: 'The Shawshank Redemption', year: 1994 },
            // { label: 'The Godfather', year: 1972 },
            // { label: 'The Godfather: Part II', year: 1974 },
            // { label: 'The Dark Knight', year: 2008 },
            // { label: '12 Angry Men', year: 1957 },
            // { label: "Schindler's List", year: 1993 },
            // { label: 'Pulp Fiction', year: 1994 },
            {label: 'foo'},
            {label: 'bar'},
        ],
        []
    );

    const [textFieldValue, setTextFieldValue] = React.useState<any>('');
    const [dropDownValue, setDropDownValue] = React.useState<any>(null);

    React.useEffect(() => {
        console.log('textFieldValue', textFieldValue);
        console.log('dropDownValue', dropDownValue);
    }, [textFieldValue, dropDownValue]);

    return (
        <Box sx={{ padding: 2 }}>
            <h1>Autocomplete component</h1>
            <Autocomplete
                // freeSolo={true}
                options={filmsData}
                sx={{ width: 300 }}
                clearOnBlur={false}
                renderInput={(params) => {
                    // console.log('params', params);
                    return <TextField {...params} placeholder='select a movie' label={'movies'} />;
                }}
                // text field
                inputValue={textFieldValue}
                onInputChange={(e, newInputValue)=> setTextFieldValue(newInputValue)}
                // dropdown value
                value={dropDownValue}
                onChange={(e, newDropDownValue)=> setDropDownValue(newDropDownValue)}

                filterOptions={(options: any, state: any)=> {
                    console.log('options', options);
                    console.log('state', state);

                    if(state.inputValue === 'one'){
                        return [{label: 'hidden'}]
                    }
                    return options;
                }}
                
                isOptionEqualToValue={(option: any, value: any) => {
                    // console.log('option', option);
                    // console.log('value', value);

                    return value.label == option.label;

                    // if(value.label === 'one' && option.label === 'foo'){
                    //     return true;
                    // }

                    // if(value.label === 'two' && option.label === 'bar'){
                    //     return true;
                    // }

                    // return false;

                }}
                // freeSolo
            />
        </Box>
    );
};

export default Blah;
