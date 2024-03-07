import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// store stuff
import { useSelector, useDispatch } from 'react-redux'; 
import { counterSliceActions, getInitialStateFromCounterSlice } from 'src/store/countSlice';



type Props = any;

const Blah: React.FC<any> = ({ ...rest }: Props) => {

    const dispatch = useDispatch();

    const countInSliceState = useSelector((state: any) => {
        // console.log('counterInStore from Blah', state);
        return state.counterStatesFromStore.countFromInitialState;
    });

    console.log('initialState', getInitialStateFromCounterSlice);

    return (
        <div {...rest}>
            <h1>Store is here</h1>
            <h2>This is count: {countInSliceState}</h2>
            <button onClick={()=> dispatch(counterSliceActions.inc({}))}>inc</button>
        </div>
    );
};

export default Blah;
