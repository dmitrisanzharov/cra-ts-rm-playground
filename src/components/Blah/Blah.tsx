import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    const [re, setRe] = React.useState(0);

    console.log('parent');

    return <div>
        <h1>hello</h1>
        <button onClick={()=> setRe(re+1)}>click me</button>
        <hr />
        <Child1 />
    </div>;
};


const Child1: any = React.memo((props: any) => {
    console.log('child1');
    return <div>child</div>
})

export default Blah;
