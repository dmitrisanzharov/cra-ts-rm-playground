import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    let a = 5;

    const { number, handleClick } = useCustomHook(a);


    return <div>
        <h1>Parent component, count is: {number}</h1>
        <button onClick={handleClick}>inc</button>
        <>{useCustomHook(3).number}</>
        <hr />
    </div>;
};

const useCustomHook = (a: number) => {
    console.log('a', a);
    const [number, setNumber] = React.useState(0);

    function handleClick() {
        setNumber(number + 1);
    }

    return { number, handleClick };
}

export default Blah;
