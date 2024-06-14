import React from 'react';
import { Box, Skeleton, Typography, Autocomplete, TextField } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    const filmsData = React.useMemo(
        () => [
            { label: 'The Shawshank Redemption', year: 1994 },
            { label: 'The Godfather', year: 1972 },
            { label: 'The Godfather: Part II', year: 1974 },
            // { label: 'The Dark Knight', year: 2008 },
            // { label: '12 Angry Men', year: 1957 },
            // { label: "Schindler's List", year: 1993 },
            // { label: 'Pulp Fiction', year: 1994 },
            // {label: 'foo'},
            // {label: 'bar'},
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
                clearOnBlur={true}
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

                    if(state.inputValue === 'hidden'){
                        return [{label: 'hidden'}]
                    }

                    if(state.inputValue === 'one'){
                        return [{label: 'one'}]
                    }

                    if(state.inputValue === 'two'){
                        return [{label: 'two'}]
                    }

                    if(state.inputValue === 'three'){
                        return [{label: 'three'}]
                    }

                    // if(state.inputValue === 'male'){
                    //     return [{label: 'foo'}]
                    // }
                    return options;
                }}

                
                
                isOptionEqualToValue={(originalOptionsArray: any, selectedDropDownValue: any) => {
                   

                    console.log('originalOptionsArray', originalOptionsArray);
                    console.log('selectedDropDownValue', selectedDropDownValue);

                    if(originalOptionsArray.label === selectedDropDownValue.label){
                        return true;
                    }

                    if(selectedDropDownValue.label === 'one' && originalOptionsArray.label === 'The Shawshank Redemption'){
                        return true;
                    }

                    if(selectedDropDownValue.label === 'two' && originalOptionsArray.label === 'The Godfather: Part II'){
                        return true;
                    }

                    return false;

                }}
                freeSolo
                // disableCloseOnSelect
            />
        </Box>
    );
};

export default Blah;
