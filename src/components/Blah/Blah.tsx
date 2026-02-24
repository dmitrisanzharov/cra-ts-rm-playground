import React, { useEffect } from "react";
import { Box, Skeleton, Typography } from "@mui/material";
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    const [count, setCount] = React.useState(0);
    console.log("App render");

    React.useEffect(() => {
        console.log('blah useEffect');
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

    useEffect(() => {
        console.log('Child useEffect');
    }, [count]);
    
    return (<div>Child: {count}</div>);
}
