import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore
import { useSelector, useDispatch } from 'react-redux'
// @ts-ignore
import { fetchData } from 'src/components/thunk/vehiclesSliceWithThunk'; 

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const dispatch = useDispatch();
    const data = useSelector((state: any)=> state.vehiclesSliceState.data)
    console.log("data: ", data);


    React.useEffect(() => {
        dispatch(fetchData() as any);
    }, []);

    return <div>hello</div>;
};

export default Blah;
