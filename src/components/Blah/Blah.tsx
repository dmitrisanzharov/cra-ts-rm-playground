import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Skeleton, Typography } from '@mui/material';

// store
// @ts-ignore
import { counterSlice, countSelector } from '../../store/countSlice';
import usersApi from '../../store/api/usersApi';
import dimApi from '../../store/api/dimApi';

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    // const postParams = dimApi.usePostParamsMutation();
    // React.useEffect(() => {
    //     postParams[0]();
    // }, []);

    // console.log('counterSlice', counterSlice);
    const dimiApiData = dimApi.useGetDimiDataQuery({} as any);
    console.log('dimiApiData: ', dimiApiData);

    const postOne = dimApi.usePostOneMutation();
    console.log('postOne: ', postOne);

    const usersData = usersApi.useLazyGetUsersQuery({} as any);
    // console.log("usersData: ", usersData);

    React.useEffect(() => {
        usersData[0]({} as any);
        postOne[0]({ body: { name: Date.now() }, params: { id: Math.random(), anyKey: Date.now() / 1000 } } as any);
    }, []);

    const dispatch = useDispatch();

    const countState2 = useSelector(countSelector);

    const count = useSelector((state: any) => {
        // console.log("state: ", state);

        return state.counterInStore.count;
    });

    const countArr = useSelector((state: any) => {
        // console.log("state: ", state);

        return state.counterInStore.countArr;
    });

    return (
        <div>
            <h1>
                count: {count}, and the second one: {countState2}
            </h1>
            <button onClick={() => dispatch(counterSlice.actions.increment())}>inc</button>
            <button onClick={() => dispatch(counterSlice.actions.decrement())}>dec</button>
            <hr />
            <h3>{JSON.stringify(countArr)}</h3>
            <button onClick={() => dispatch(counterSlice.actions.addToArr(count))}>add</button>
            <hr />
            <Typography variant='h4'>users api data:</Typography>
            <pre>{JSON.stringify(dimiApiData.data, null, 2)}</pre>
        </div>
    );
};

export default Blah;
