import React from 'react';
import { Box } from '@mui/material';

type Props = {};

const SideMenu = (props: any) => {
    return (
        <Box
            sx={{
                position: 'fixed',
                left: 0,
                border: '1px solid',
                height: '100vh',
                width: props.isSideMenuOpen ? '300px' : '68px',
                // 300px when open + 45px for margin left
                backgroundColor: 'lightgray',
            }}
        >
            <button onClick={props.sideMenuControl}>
                {props.isSideMenuOpen ? 'close' : 'open'}
            </button>
        </Box>
    );
};

export default SideMenu;
