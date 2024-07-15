import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import countSlice, { countSelected, countArrSelected } from '../../store/slices/countSlice';

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const count: any = useSelector(countSelected);
    const myArr: any = useSelector(countArrSelected);
    const dispatch = useDispatch();
    

    return <div>
        <h1>Here is my store</h1>
        <h2>This is count: {count}</h2>
        <h2>This is the array: {JSON.stringify(myArr)}</h2>
        <ul>
            <li><button onClick={()=> dispatch(countSlice.actions.incCount())}>add</button></li>
            <li><button onClick={()=> dispatch(countSlice.actions.decCount())}>dec</button></li>
            <li><button onClick={()=> dispatch(countSlice.actions.incCountByAmount(10))}>add 10</button></li>
            <li><button onClick={()=> dispatch(countSlice.actions.arrAddStuff('added'))}>add to arr</button></li>
        </ul>
    </div>;
};

export default Blah;
