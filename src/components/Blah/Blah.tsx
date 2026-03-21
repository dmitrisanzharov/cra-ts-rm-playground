import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Box, Skeleton, Typography } from '@mui/material';

// store
// @ts-ignore
import { counterSlice, countSelector } from '../../store/countSlice';
import usersApi from '../../store/api/usersApi';



type Props = any;


const Blah: React.FC<any> = (props: Props) => {

    // console.log('counterSlice', counterSlice);

    const skipApi = false; 

    const usersData = usersApi.useGetUsersQuery({} as any, {
        skip: skipApi
    });
    console.log("usersData: ", usersData);

    const dispatch = useDispatch();

    const countState2 = useSelector(countSelector);

    const count = useSelector((state: any) => {
        // console.log("state: ", state);

        return state.counterInStore.count
    });

    const countArr = useSelector((state: any) => {
        // console.log("state: ", state);

        return state.counterInStore.countArr
    });

    return <div>
        <h1>count: {count}, and the second one: {countState2}</h1>
        <button onClick={()=> dispatch(counterSlice.actions.increment())}>inc</button>
         <button onClick={()=> dispatch(counterSlice.actions.decrement())}>dec</button>
         <hr />
         <h3>{JSON.stringify(countArr)}</h3>
         <button onClick={()=> dispatch(counterSlice.actions.addToArr(count))}>add</button>
    </div>;
};

export default Blah;
