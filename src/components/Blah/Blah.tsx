import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore


// all tables
import BasicTable from './BasicTable';
import BasicTableAccessTraining from './BasicTableAccessTraining';
import GroupingHeaders from './GroupingHeaders';




type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    return <Box sx={{p: 2}}>
        <h1>Hello</h1>
        <hr />
        {/* <BasicTable /> */}
        <GroupingHeaders />
    </Box>;
};

export default Blah;
