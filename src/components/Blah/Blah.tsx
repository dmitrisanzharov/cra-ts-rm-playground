import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore
// store stuff
import { useSelector, useDispatch } from 'react-redux';
import { countSliceActions } from 'src/store/countSlice'; 


// api stuff
// api stuff
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSliceForUsers } from 'src/store/api/apiSliceForUsers';


type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const dispatch = useDispatch(); 
    const count = useSelector((state: any) => state.countSliceStateInStore.count);

    const data = (apiSliceForUsers as any).useGetAllQuery();
    console.log("data: ", data);



    return <div>
        <h1>Hello This is Blah</h1>
        <h2>The count is: {count ?? 'loading'}</h2>
        <button onClick={()=> dispatch(countSliceActions.addToCount() as any)}>increase count</button>
        <hr />
    </div>;
};

export default Blah;
