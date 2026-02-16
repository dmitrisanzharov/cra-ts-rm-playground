import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore


type Props = any;


// SX
const containerSx: any = {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    // justifyContent: 'right',
    border: '10px solid black',
        gap: '30px',
        flexWrap: 'wrap',
    // flexWrap: 'wrap',
    // alignContent: 'flex-end',
    // alignItems: 'flex-start',
    // margin: '10px',
    // marginLeft: '25vw',
    // '@media (max-width: 700px)': {
    //     flexDirection: 'column',
    //     // alignItems: 'center',
    //     // justifyContent: 'center',
    // },


}


const boxSx: any = {
    width: '450px',
    height: '150px',
    fontSize: '10rem',
    lineHeight: '10rem',
    borderRadius: '15px',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,

}


const Blah: React.FC<any> = (props: Props) => {


    return <Box sx={containerSx}>
        <Box sx={{...boxSx, backgroundColor: 'red'}}>1</Box>
        <Box sx={{...boxSx, backgroundColor: 'yellow'}}>2</Box>
        {/* <Box sx={{...boxSx, backgroundColor: 'green'}}>3</Box>
        <Box sx={{...boxSx, backgroundColor: 'blue'}}>4</Box> */}
    </Box>;
};


export default Blah;
