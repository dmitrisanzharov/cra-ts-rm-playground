import React, { useEffect } from "react";
import { Box, Skeleton, Typography } from "@mui/material";
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    const [count, setCount] = React.useState(0);
    console.log("App render 1");

    React.useEffect(() => {
        console.log('blah useEffect 4');
    }, [count]);

    return (
        <div>
            <h1>Hello: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Child count={count}/>
        </div>
    );
};

export default Blah;

const Child = ({count}: any) => {

     console.log('child mounted 2');

    useEffect(() => {
        console.log('Child useEffect 3');
    }, [count]);
    
    return (<div>Child: {count}</div>);
}
