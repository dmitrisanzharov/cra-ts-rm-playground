import React from 'react';
import { Box } from '@mui/material';
import { border, borderRadius, boxSizing, minWidth, width } from '@mui/system';


type Props = any;


// SX
const containerSx: any = {
    border: '2px solid violet',
    padding: '20px',
    height: '1500px',

    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
}


const boxSx: any = {
    flex: 1,
    borderRadius: '8px',
}


const Blah: React.FC<any> = (props: Props) => {

    return <Box sx={containerSx}>
        <Box sx={{ ...boxSx, backgroundColor: 'red', flex: 2 }}>1</Box>
        <Box sx={{ ...boxSx, backgroundColor: 'yellow'}}>2</Box>
        <Box sx={{ ...boxSx, backgroundColor: 'green' }}>3</Box>
        <Box sx={{ ...boxSx, backgroundColor: 'blue' }}>4</Box>
    </Box>;
};


export default Blah;
