import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

// SX
const containerSx: any = {
    margin: '15px',
    boxSizing: 'border-box',
    border: '5px solid orange',
    height: '90vh',
    display: 'flex',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignContent: 'start'
}

const boxSx: any = {
    width: '150px',
    height: '150px',
    fontSize: '2rem',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const Blah: React.FC<any> = (props: Props) => {

    return <Box sx={containerSx}>
        <Box sx={{...boxSx, backgroundColor: 'red'}}>1</Box>
        <Box sx={{...boxSx, backgroundColor: 'yellow'}}>2</Box>
        <Box sx={{...boxSx, backgroundColor: 'green'}}>3</Box>
        <Box sx={{...boxSx, backgroundColor: 'blue', flexShrink: 1}}>4</Box>
    </Box>;
};

export default Blah;



