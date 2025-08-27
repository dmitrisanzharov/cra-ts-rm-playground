import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { MainContextConst } from 'src/components/context';
// @ts-ignore 

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const values = React.useContext(MainContextConst);
    console.log("values: ", values);

    return <div>
        <h1>Hello</h1>
    </div>;
};

export default Blah;
