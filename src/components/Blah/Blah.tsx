import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const [count, setCount] = React.useState(0)

    const [myObj, setMyObj] = React.useState({name: 1}); // x0xx

    const myObj2 = {name: 1}; // a0aa -> a1aa -> a2aa

    React.useEffect(() => {
        console.log('ran');
        setCount(count + 1)
    }, [JSON.stringify(myObj)]);

    return <div>
        <h1>Hello, {myObj.name} ... count: {count}</h1>
        <button onClick={()=> setMyObj({name: Math.random()})}>change</button>
    </div>;
};

export default Blah;
