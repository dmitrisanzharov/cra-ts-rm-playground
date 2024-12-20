import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore


// all tables
import BasicTable from './BasicTable';
import BasicTableAccessTraining from './BasicTableAccessTraining';
import GroupingHeaders from './GroupingHeaders';
import SortingTable from './SortingTable';
import GlobalFilter from './GlobalFilter';
import ColumnFilter from './ColumnFilter';
import Pagination from './Pagination';
import RowSelection from './RowSelection';




type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    return <Box sx={{p: 2}}>
        <h1>Hello</h1>
        <hr />
        {/* <BasicTable /> */}
        <RowSelection />
    </Box>;
};

export default Blah;
