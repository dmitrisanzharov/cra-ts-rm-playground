import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore
import { useCountIncrease, incCount2 } from './hooks';


type Props = any;

const Blah: React.FC<any> = ({ ...rest }: Props) => {

    const [value, setValue] = React.useState('')


    function handleInput(e: any){
        console.log(e.target.value)
        setValue(e.target.value)
    }


    return (
        <div {...rest}>
            <input type='text' value={value} onChange={handleInput}/>
        </div>
    );
};

export default Blah;
