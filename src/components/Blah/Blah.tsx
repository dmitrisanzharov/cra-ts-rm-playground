import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const {number, handleClick} = useMyHook('hello');


    return <div>
        <h1>Parent component, count is: {number}</h1>
        <button onClick={handleClick}>inc</button>
        <hr />
    </div>;
};

const useMyHook = (arg: any) => {
    const [number, setNumber] = React.useState(0);

    function handleClick(){
        setNumber(number + 1);
    }

    console.log('arg', arg);

    return {number, handleClick}
}

export default Blah;
