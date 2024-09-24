import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { MyContextOne } from '../UseContextOne'
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const data: any = React.useContext(MyContextOne);
    console.log("data: ", data);

    return <div>
        <h1>Hello count: {data.countVar}</h1>
        <button onClick={()=> data.setCountFn(data.countVar+1)}>inc</button>
    </div>;
};

export default Blah;