import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import countSlice, { countSelector } from '../../store/countSlice';
import generalApiSlice from '../../store/api/generalApiSlice';

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const dispatch = useDispatch();
    const count = useSelector((storeStateObj: any) => storeStateObj.countSliceStoreObj.count);
    const count2 = useSelector(countSelector);

    const data = generalApiSlice.useGetTestQuery({});
    console.log("data: ", data);



    return <div>
        <h1>Hello to count: {count2}</h1>
        <button onClick={()=> dispatch(countSlice.actions.inc({}))}>inc</button>
        <button onClick={()=> dispatch(countSlice.actions.dec({}))}>dec</button>
        <button onClick={()=> dispatch(countSlice.actions.incByArgNum(10))}>inc by 10</button>
    </div>;
};

export default Blah;
