import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore
// tables
import BlahTable from './BlahTable';

type Props = any;




const Blah: React.FC<any> = (props: Props) => {

    return <div>
       <BlahTable />
    </div>;
};

export default Blah;
