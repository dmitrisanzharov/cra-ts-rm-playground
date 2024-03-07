import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// store stuff
import { useSelector, useDispatch } from 'react-redux'; 
import { counterSliceActions, getInitialStateFromCounterSlice, countFromCounterSlice } from 'src/store/countSlice';
import { listArraySliceActions } from 'src/store/listArraySlice'; 



type Props = any;

const Blah: React.FC<any> = ({ ...rest }: Props) => {

    const [input, setInput] = React.useState(''); 

    const dispatch = useDispatch();

    const countInSliceState = useSelector(countFromCounterSlice);

    const listArray = useSelector((state: any) => {
        return state.listArrayInStore.list
    });

    function handleSubmit(){
        dispatch(listArraySliceActions.addToArray(input));
        setInput('')
    }

   // console.log('listArray', listArray);

   // console.log('initialState', getInitialStateFromCounterSlice);

    return (
        <div {...rest}>
            <h1>Store is here</h1>
            <h2>This is count: {countInSliceState}</h2>
            <button onClick={()=> dispatch(counterSliceActions.inc({}))}>inc</button>
            <hr />
            <h4>Array items</h4>
            <input {...{value: input, placeholder: 'add to input', onChange: (e) => setInput(e.target.value)}} />
            <button onClick={handleSubmit}>add to input</button>
            <ul>
                {listArray.map((item: string) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    );
};

export default Blah;
