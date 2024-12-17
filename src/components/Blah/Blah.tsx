import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore


// all tables
import BasicTable from './BasicTable';




type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    return <Box sx={{p: 2}}>
        <h1>Hello</h1>
        <hr />
        <BasicTable />
    </Box>;
};

export default Blah;
