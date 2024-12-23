import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// store stuff
import { useSelector, useDispatch } from 'react-redux'
import countSlice, { countSelector, countSelectorLong } from '../../store/countSlice';

// api stuff
import usersApiSlice from '../../store/api/usersApiSlice';

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    // store usual slices
    const count = useSelector((state: any)=> {
        return state.storeConfigCountSlice.countInSlice
    });
    const count2 = useSelector(countSelectorLong);

    const myArr = useSelector((state: any)=> state.storeConfigCountSlice.arrInSlice);
    const dispatch = useDispatch();

    // store api slices
    const data = usersApiSlice.useGetAllUsersQuery({});

    React.useEffect(() => {
        console.log('data', data);
    }, [JSON.stringify(data.data)]);
    


    return <div>
        <h1>Hello, this is count: {count2}</h1>
        <h1>{JSON.stringify(myArr)}</h1>
        <hr />
        <button onClick={()=> dispatch(countSlice.actions.incCount())}>inc</button>
        <button onClick={()=> dispatch(countSlice.actions.decCount())}>dec</button>
        <button onClick={()=> dispatch(countSlice.actions.resetCount())}>reset</button>
        <button onClick={()=> dispatch(countSlice.actions.addToArrInCount('omg'))}>add to array</button>
    </div>;
};

export default Blah;
