import React from 'react';
import { Box } from '@mui/material';


type Props = any;


// SX
const containerSx: any = {
    border: '2px solid violet',
    height: '80vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'start',
    alignContent: 'start',
    // justifyContent: 'right',
    // border: '10px solid black',
    // height: '90vh',
    // alignItems: 'center',
    // margin: '10px'
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


const Blah: React.FC<any> = (props: Props) => {

    return <Box sx={containerSx}>
        <Box sx={{ ...boxSx, backgroundColor: 'red' }}>1</Box>
        <Box sx={{ ...boxSx, backgroundColor: 'yellow' }}>2</Box>
        <Box sx={{ ...boxSx, backgroundColor: 'green' }}>3</Box>
        <Box sx={{ ...boxSx, backgroundColor: 'blue' }}>4</Box>
    </Box>;
};


export default Blah;
