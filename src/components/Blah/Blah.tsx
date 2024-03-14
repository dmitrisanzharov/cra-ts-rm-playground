import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore
// store stuff
import { useSelector, useDispatch } from 'react-redux';
import { countSliceActions } from 'src/store/countSlice'; 


// api stuff
// api stuff
import { apiSliceForUsers, useGetAllQuery } from 'src/store/api/apiSliceForUsers';


type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const dispatch = useDispatch(); 
    const count = useSelector((state: any) => state.countSliceStateInStore.count);

    const { isLoading, data, status } = useGetAllQuery();

    const oneDate = (apiSliceForUsers as any).useGetOneByIdQuery(1); // simply use hook with an argument to pass argument into query
    console.log("oneDate: ", oneDate);



    return <div>
        <h1>Hello This is Blah</h1>
        <h2>The count is: {count}</h2>
        <button onClick={()=> dispatch(countSliceActions.addToCount() as any)}>increase count</button>
        <hr />
    </div>;
};

export default Blah;
