import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// @ts-ignore

type Props = any;

const topFilms = [
   { label: "The Shawshank Redemption", year: 1994 },
   { label: "The Godfather", year: 1972 },
   { label: "The Godfather: Part II", year: 1974 },
   { label: "The Dark Knight", year: 2008 },
   { label: "12 Angry Men", year: 1957 },
   { label: "Schindler's List", year: 1993 },
   { label: "Pulp Fiction", year: 1994 },
]



const Blah: React.FC<any> = (props: Props) => {

    return <Box sx={{ m:2, p: 2, border: '1px solid black' }}>
        <Autocomplete 
            options={topFilms}
            renderInput={(params) => <TextField {...params} label="Movie" />}
        />
    </Box>;
};

export default Blah;
