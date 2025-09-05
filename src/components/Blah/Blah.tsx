import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const [count, setCount] = React.useState(0);

    setCount(0);

    return <div>
        <h1>Hello</h1>
    </div>;
};

export default Blah;
