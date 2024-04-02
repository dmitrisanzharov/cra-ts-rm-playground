import React from 'react';
// store stuff
import { useSelector, useDispatch } from 'react-redux'; 
import { countSliceActions } from 'src/store/countSlice';

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const dispatch = useDispatch();
    const count = useSelector((state: any) => {
        console.log('state', state);
        return state.countSliceState.count
    });

    return <div>
        <h1>This is the main store</h1>
        <hr />
        <h2>Count is: {count}</h2>
        <button onClick={()=> dispatch(countSliceActions.inc())}>inc</button>
        <button onClick={()=> dispatch(countSliceActions.dec())}>dec</button>
        <button onClick={()=> dispatch(countSliceActions.res())}>reset</button>
        <button onClick={()=> dispatch(countSliceActions.addAmount(5 as any))}>add 5</button>
    </div>;
};

export default Blah;
