import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// store stuff
import { useSelector, useDispatch } from 'react-redux'
import countSlice from '../../store/countSlice';

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const count = useSelector((state: any)=> state.storeConfigCountSlice.countInSlice);
    const myArr = useSelector((state: any)=> state.storeConfigCountSlice.arrInSlice);
    const dispatch = useDispatch();

    return <div>
        <h1>Hello, this is count: {count}</h1>
        <h1>{JSON.stringify(myArr)}</h1>
        <hr />
        <button onClick={()=> dispatch(countSlice.actions.incCount())}>inc</button>
        <button onClick={()=> dispatch(countSlice.actions.decCount())}>dec</button>
        <button onClick={()=> dispatch(countSlice.actions.resetCount())}>reset</button>
        <button onClick={()=> dispatch(countSlice.actions.addToArrInCount('omg'))}>add to array</button>
    </div>;
};

export default Blah;
