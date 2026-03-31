import React, { useEffect } from 'react';
import { ContextOne } from 'src/context/contextOne';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;


const Blah: React.FC<any> = (props: Props) => {

    const contextOne = React.useContext(ContextOne);
    console.log("contextOne: ", contextOne);

    return <div>
        <h1>Hello</h1>
    </div>;
};

export default Blah;
