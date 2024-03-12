import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore


type Props = any;

const Blah: React.FC<any> = ({ ...rest }: Props) => {

    const [count2, setCount2] = React.useState(0); 

    let count = 0;

    function handleClick(){
        count = count + 1; 
        console.log('this is count', count);
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>inc</button>
        </div>
    );
};

export default Blah;
