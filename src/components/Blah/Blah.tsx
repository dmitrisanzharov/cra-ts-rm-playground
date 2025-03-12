import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore


type Props = any;


// SX
const containerSx: any = {
    // display: 'flex',
    border: '5px solid blue',
    padding: '5px'
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // alignContent: 'center',
    // alignItems: 'start',
    // margin: '10px',
    // width: '400px',
    // minWidth: '100px'
}


const boxSx: any = {
    width: '150px',
    height: '150px',
    fontSize: '8rem',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const flexDisp = {
display: 'flex', gap: '5px', mt: 1
}

const box1 = {
    width: '200px',
    height: '100px',
    border: '1px solid black'
}

const stBox = {
    border: '1px solid black',
    height: '175px'
}


const Blah: React.FC<any> = (props: Props) => {

    return <Box sx={containerSx}>
        <Box sx={flexDisp}>
            <Box sx={box1}>1</Box>
            <Box sx={box1}>2</Box>
            <Box sx={box1}>3</Box>
        </Box>
        <Box sx={flexDisp}>
            <Box sx={{...stBox, flex: 2}}>1</Box>
            <Box sx={{...stBox, flex: 1}}>2</Box>
        </Box>
        <Box sx={flexDisp}>
            <Box sx={{...stBox, flex: 1}}>1</Box>
            <Box sx={{...stBox, flex: 1}}>2</Box>
            <Box sx={{...stBox, flex: 1}}>3</Box>
        </Box>
        <Box sx={flexDisp}>
            <Box sx={{...stBox, flex: 1}}>1</Box>
        </Box>
        <Box sx={flexDisp}>
            <Box sx={{...stBox, flex: 1}}>1</Box>
        </Box>
    </Box>;
};


export default Blah;
