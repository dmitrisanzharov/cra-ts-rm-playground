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
    const data = usersApiSlice.useLazyGetAllUsersQuery({}); // { data, currentData, isLoading } ... { triggerFn, {data, currentData, isLoading}, originalArgs }
    const singleUser = usersApiSlice.useGetAllUsersQuery({id: 1});

    React.useEffect(() => {
        console.log('data', data);
        console.log('data actual', data[1].data);
    }, [JSON.stringify(data[1].status)]);

    
    // React.useEffect(() => {
    //     console.log('singleUser', singleUser);
    // }, [JSON.stringify(singleUser.data)]);

    function myFunction(){
        console.log('triggered')
        data[0]({myArg: 'alalalal'})
    }
    


    return <div>
        <h1>Hello, this is count: {count2}</h1>
        <h1>{JSON.stringify(myArr)}</h1>
        <hr />
        <button onClick={()=> dispatch(countSlice.actions.incCount())}>inc</button>
        <button onClick={()=> dispatch(countSlice.actions.decCount())}>dec</button>
        <button onClick={()=> dispatch(countSlice.actions.resetCount())}>reset</button>
        <button onClick={()=> dispatch(countSlice.actions.addToArrInCount('omg'))}>add to array</button>
        <hr />
        <button onClick={myFunction}>refetch</button>
    </div>;
};

export default Blah;
