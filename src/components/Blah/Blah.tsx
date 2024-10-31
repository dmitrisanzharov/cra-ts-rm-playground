import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { useCustomHook, useMyHook2 } from './hooks';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const myHook = useMyHook2('hello');

    return (
        <div>
            <h1>Parent component, count is: {myHook.number}</h1>
            <button onClick={myHook.handleClick}>inc</button>
            <hr />
        </div>
    );
};

export default Blah;

function slowFunction(num: any) {
    console.log('Calling slow function');
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
}
