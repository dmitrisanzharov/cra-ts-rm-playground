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

    const data = generalApiSlice.useGetTestQuery();
    console.log("data: ", data);

    // const dataLazy = generalApiSlice.useLazyGetTestQuery();
    // console.log("dataLazy: ", dataLazy);

    const dataPost = generalApiSlice.usePostTestMutation();
    console.log("dataPost: ", dataPost);

    // React.useEffect(() => {
    //     dataPost[0]({mahMan: 'mahMan'});
    // }, []);

    // React.useEffect(() => {
    //     dataLazy[0]()
    // }, []);

    function triggerPost(){
        dataPost[0]({letter: 'd1'});
    }



    return <div>
        <h1>Hello to count: {count2}</h1>
        <button onClick={()=> dispatch(countSlice.actions.inc({}))}>inc</button>
        <button onClick={()=> dispatch(countSlice.actions.dec({}))}>dec</button>
        <button onClick={()=> dispatch(countSlice.actions.incByArgNum(10))}>inc by 10</button>

        <button onClick={triggerPost}>trigger post</button>
        {JSON.stringify(data?.data?.myArr)}
    </div>;
};

export default Blah;
