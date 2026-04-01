import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { ContextOne } from 'src/context/contextOne';

// @ts-ignore

type Props = any;


const Blah: React.FC<any> = (props: Props) => {

    const dataInBlah = React.useContext(ContextOne);

    console.log('dataInBlah: ', dataInBlah);

    return <div>
        <h1>Hello</h1>
    </div>;
};

export default Blah;
