import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Box, Skeleton, Typography } from '@mui/material';

// store
// @ts-ignore
import { counterSlice } from '../../store/countSlice';



type Props = any;


const Blah: React.FC<any> = (props: Props) => {

    console.log('counterSlice', counterSlice);

    const dispatch = useDispatch();

    const count = useSelector((state: any) => {
        console.log("state: ", state);

        return state.counterInStore.count
    });

    return <div>
        <h1>count: {count}</h1>
        <button onClick={()=> dispatch(counterSlice.actions.increment())}>inc</button>
    </div>;
};

export default Blah;
