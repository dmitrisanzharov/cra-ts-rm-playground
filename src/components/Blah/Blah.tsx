import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import counterSlice from 'src/store/counterSlice';
import inputSlice from 'src/store/inputSlice';


type Props = any;

const Blah: React.FC<any> = ({ ...rest }: Props) => {

    const count: any = useSelector((state: any) => {
        console.log('globalStore', state);
        return state.counterSlice.countFromStore
    });

    const myInput: string = useSelector((state: any) => state.inputSlice.inputFromStore)

    const dispatch = useDispatch();

    function handleInc(){
        dispatch(counterSlice.actions.inc());
    }

    function handleWithPayload(){
        dispatch(counterSlice.actions.incByAmount(3))
    }

    function handleInputChange(arg: any){
        dispatch(inputSlice.actions.changeInp(arg))
    }

    return (
        <div {...rest}>
            <h1>{count}</h1>
            <button onClick={handleInc}>inc</button>
            <button onClick={handleWithPayload}>with payload</button>
            <hr />
            <input value={myInput} onChange={(e)=> handleInputChange(e.target.value)}/>
            <hr />
            {myInput}
        </div>
    );
};

export default Blah;
