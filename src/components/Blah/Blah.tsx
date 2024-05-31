import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore
import {ContextAsBlockContext} from 'src/context3/ContextAsBlock';

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const dataInBlah = React.useContext(ContextAsBlockContext);
    console.log("dataInBlah: ", dataInBlah);

    return <div>hello, with name: {dataInBlah.name}</div>;
};

export default Blah;
