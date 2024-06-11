import React from 'react';
import { Box, Skeleton, Typography, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const hoverStyleForBtn: SxProps = { boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" };

    const hoverStyle = {
        boxShadow: "rgba(25, 118, 210, 0.04) 0px 0px 0px 8px" // color offsetRight/PushRight offsetTop/PushBottom blurAround borderAround
    }

    return (
        <div>
            <h1>hello</h1>
            <Box sx={{ padding: 3 }}>
                <IconButton aria-label='delete'>
                    <DeleteIcon />
                </IconButton>
                <Button sx={{border: '1px solid black', marginLeft: 3, '&:hover': hoverStyle}}>
                <DeleteIcon />
                </Button>
            </Box>
        </div>
    );
};

export default Blah;
