import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const [count, setCount] = React.useState(0);

    return <div>
        <h1>Parent, {count}</h1>
        <button onClick={()=> setCount(count+1)}>inc</button>
        <hr />
        <Child />
    </div>;
};


const Child: any = React.memo((props: any) => {
    console.log('child re-rendered');
    return <h1>Child</h1>
});

export default Blah;
