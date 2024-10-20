import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import {useHookOne} from './hooks';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const [count, setCount] = React.useState(0);

    const omg = useHookOne();

    return <div>
        <h1>Hello</h1>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>inc</button>
    </div>;
};

export default Blah;
