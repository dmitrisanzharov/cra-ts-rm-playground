import React from 'react';
import { Box, Skeleton, Typography, Autocomplete, TextField } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const filmsData = React.useMemo(
        () => [
            { label: "The Shawshank Redemption", year: 1994 },
            { label: "The Godfather", year: 1972 },
            { label: "The Godfather: Part II", year: 1974 },
            { label: "The Dark Knight", year: 2008 },
            { label: "12 Angry Men", year: 1957 },
            { label: "Schindler's List", year: 1993 },
            { label: "Pulp Fiction", year: 1994 },
        ],
        []
    );


    return <div>
        <h1>Autocomplete component</h1>
        <Autocomplete
            options={filmsData}
            renderInput={(params)=> {
                console.log('params', params)
                return <TextField {...params} />;
            }}
            sx={{width: 300}}
        />

    </div>;
};

export default Blah;
