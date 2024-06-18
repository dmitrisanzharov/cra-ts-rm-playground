import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import ChildNew from './Child'
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    return <div>
        <h1>Parent</h1>
        <hr />
        <ChildNew message='foo' style={{color: 'red'}} />
    </div>;
};

export default Blah;
