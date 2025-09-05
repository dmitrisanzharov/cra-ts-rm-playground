import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import Child1 from './Child1';
// @ts-ignore

type Props = any;

function myFn(prevProps: any, nextProps: any) {
    console.log("nextProps: ", nextProps);
    console.log("prevProps: ", prevProps);

    return false;
}

const Child1Memo = React.memo(Child1, myFn);

const Blah: React.FC<any> = (props: Props) => {

    const [count, setCount] = React.useState(0);
    const [count2, setCount2] = React.useState(0);

    return <div>
        <h1>count 1: {count}</h1>
        <h1>count 2: {count2}</h1>
        <button onClick={() => setCount(count + 1)}>Increment 1</button>
        <button onClick={() => setCount2(count2 + 1)}>Increment 2</button>
        <hr />
        <Child1Memo />
    </div>;
};

export default Blah;



