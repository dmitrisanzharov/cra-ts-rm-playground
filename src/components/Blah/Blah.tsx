import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore
import { useCountIncrease, incCount2 } from './hooks';

type Props = any;

const Blah: React.FC<any> = ({ ...rest }: Props) => {
    const [count, setCount] = React.useState<any>(0);

    function incCount() {
        incCount2(count, setCount);
    }

    return (
        <div {...rest}>
            <h1>{count}</h1>
            <button onClick={incCount}>inc</button>
        </div>
    );
};

export default Blah;
