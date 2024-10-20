import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import Foo from './Foo';
// @ts-ignore

// memo component
const FooMemo = React.memo(()=> <Foo />);


type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const [count, setCount] = React.useState(0);

  


    return <div>
        <h1>Hello</h1>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>inc</button>
        <hr />
        <FooMemo />

    </div>;
};

export default Blah;
