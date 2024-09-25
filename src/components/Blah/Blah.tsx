import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { MyContextOne } from '../UseContextOne'
import {MyGlobalContext} from '../GlobalContextOne'

// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const data: any = React.useContext(MyGlobalContext);
    console.log("data in Blah: ", data);

    return <div>
        <h1>Hello count: </h1>
    </div>;
};

export default Blah;