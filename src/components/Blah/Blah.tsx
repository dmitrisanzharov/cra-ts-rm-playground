import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import Child1 from './Child1';
// @ts-ignore

type Props = any;

const ChildMemo = React.memo(Child1);

const Blah: React.FC<any> = (props: Props) => {

    const [count, setCount] = React.useState(0);
    return <div>
        <h1>Hello</h1>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>inc</button>
        <ChildMemo countProp={count} />
    </div>;
};

export default Blah;


