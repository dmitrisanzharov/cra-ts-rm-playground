import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore
import usersApi from '../../store/api/usersApi';

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const data = usersApi.useGetUsersQuery({});
    console.log("data: ", data);

    return <div>
        <h1>Hello</h1>
    </div>;
};

export default Blah;
