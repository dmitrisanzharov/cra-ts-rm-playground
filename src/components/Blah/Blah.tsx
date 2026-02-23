import React, { useEffect } from "react";
import { Box, Skeleton, Typography } from "@mui/material";
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    const [count, setCount] = React.useState(0);
    console.log("App render");

    React.useEffect(() => {
        console.log("App useEffect");
        setCount(count);
    }, [count]);

    return (
        <div>
            <h1>Hello: {count}</h1>
        </div>
    );
};

export default Blah;
