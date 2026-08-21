import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

// SX
const containerSx: any = {
    border: '10px solid black',

    display: 'flex',

    flexDirection: 'row'
    // justifyContent: 'right',
    // columnGap: '10px'

    // height: '90vh',
    // alignItems: 'center',
    // margin: '10px',
    // flexWrap: 'wrap',
    // alignContent: 'end',
    // alignItems: 'start',
    // padding: '10px'
};

const boxSx: any = {
    width: '250px',
    // height: '150px',
    fontSize: '8rem',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '5px solid purple',
    flex: 1,
    height: '400px'
};

const smallBox = {
    height: '150px',
    flex: 1
};

const Blah: React.FC<any> = (props: Props) => {
    return (
        <>
            <Box sx={{ border: '1px solid gray', padding: 2 }}>
                <Box sx={{ width: '462px', gap: 1, display: 'flex' }}>
                    <Box sx={{ ...smallBox, backgroundColor: 'red' }}>1</Box>
                    <Box sx={{ ...smallBox, backgroundColor: 'yellow' }}>2</Box>
                    <Box sx={{ ...smallBox, backgroundColor: 'green' }}>3</Box>
                </Box>

                <Box sx={{ mt: 1, gap: 1, display: 'flex' }}>
                    <Box sx={{ ...boxSx, backgroundColor: 'red', flexGrow: 2 }}>1</Box>
                    <Box sx={{ ...boxSx, backgroundColor: 'yellow', flexGrow: 2 }}>2</Box>
                    <Box sx={{ ...boxSx, backgroundColor: 'green' }}>3</Box>
                    <Box sx={{ ...boxSx, backgroundColor: 'blue' }}>4</Box>
                </Box>

                <Box sx={{ mt: 1, gap: 1, display: 'flex' }}>
                    <Box sx={{ ...boxSx, backgroundColor: 'red', flexGrow: 1 }}>1</Box>
                    <Box sx={{ ...boxSx, backgroundColor: 'yellow', flexGrow: 3 }}>2</Box>
                    <Box sx={{ ...boxSx, backgroundColor: 'green', flexGrow: 2 }}>3</Box>

                </Box>
            </Box>

            {/* <hr />
            <Box sx={{ ...boxSx, backgroundColor: 'red' }}>1</Box>
            <Box sx={{ ...boxSx, backgroundColor: 'yellow' }}>2</Box>
            <Box sx={{ ...boxSx, backgroundColor: 'green' }}>3</Box>
            <Box sx={{ ...boxSx, backgroundColor: 'blue' }}>4</Box> */}
        </>
    );
};

export default Blah;
