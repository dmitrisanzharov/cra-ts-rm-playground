import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { usersApiSlice } from 'src/store/api/usersApi';
import {myApiSlice} from 'src/store/api/myApi';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    // const data = usersApiSlice.useGetOneUserByIdQuery({id: 4});
    // console.log("data final: ", data.data);


    const myApiData = myApiSlice.useGetMyResQuery({});
    console.log("myApiData: ", myApiData);


    React.useEffect(() => {
        myApiData.refetch();
    }, []);

    return <div>hello</div>;
};

export default Blah;
