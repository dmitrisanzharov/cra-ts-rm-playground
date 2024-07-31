import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import {useMyHook} from './hooks';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const {count, setCount, data} = useMyHook(slowFunction);

    return <div>
        <h1>Hello, {data.fnReturn}</h1>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>inc</button>
    </div>;
};

export default Blah;



function slowFunction(num: any){
    console.log('Calling slow function');
    for(let i = 0; i <= 1000000000; i++){}
    return num * 2;
}
