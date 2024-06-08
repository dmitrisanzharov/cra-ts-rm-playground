import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { usersApiSlice } from 'src/store/api/usersApi';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const data = usersApiSlice.useGetOneUserByIdQuery({id: 2});
    console.log("data: ", data);
    console.log("data final: ", data.data);

    return <div>hello</div>;
};

export default Blah;
