import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// store stuff
import { useSelector, useDispatch } from 'react-redux'; 
import { counterSliceActions } from 'src/store/countSlice';



type Props = any;

const Blah: React.FC<any> = ({ ...rest }: Props) => {

    const dispatch = useDispatch();

    const countInSliceState = useSelector((state: any) => {
        console.log(state); 
        return state.counterInStore.countInSlice;
    });

    console.log('counterSliceObject: ', counterSliceActions);


    return (
        <div {...rest}>
            <h1>Store is here</h1>
            <h2>This is count: {countInSliceState}</h2>
            <button onClick={()=> dispatch(counterSliceActions.inc('test'))}>inc</button>
        </div>
    );
};

export default Blah;
