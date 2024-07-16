import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import countSlice, { countSelected, countArrSelected } from '../../store/slices/countSlice';
import userApiSlice, { useGetAllUsersQuery } from '../../store/api/usersApi';

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    // const allUsers = userApiSlice.useGetAllUsersQuery({}); // this is much easier to use, cause you just call the Hook and then all is Gucci... it does NOT re-fetch, if the request if fulfilled...
    // console.log("allUsers: ", allUsers); // 5NMn-8qrAbOqRbnC3GbPG

    // const oneDude = userApiSlice.useGetOneByIdQuery({id: '2'});
    // console.log("oneDude: ", oneDude);

    // let query1 = 'http://pds.local.rentalmatics.com/TENANT/stock-anomalies/notes?vid=46945&per_page=7&page=1'


    // // const [initFn, data, lastPromise] = userApiSlice.useLazyGetAllUsersQuery({});

    // const count: any = useSelector(countSelected);
    // const myArr: any = useSelector(countArrSelected);
    // const dispatch = useDispatch();

    // React.useEffect(() => {
    //     allUsers.refetch();
    //     oneDude.refetch();
    // }, []);

    // let a = allUsers[1];
    // console.log('a', a);

    // let a1 = allUsers[2];
    // console.log('a1', a1);
    
    return <div>
        {/* <h1>Here is my store</h1>
        <h2>This is count: {count}</h2>
        <h2>This is the array: {JSON.stringify(myArr)}</h2>
        <ul>
            <li><button onClick={()=> dispatch(countSlice.actions.incCount())}>add</button></li>
            <li><button onClick={()=> dispatch(countSlice.actions.decCount())}>dec</button></li>
            <li><button onClick={()=> dispatch(countSlice.actions.incCountByAmount(10))}>add 10</button></li>
            <li><button onClick={()=> dispatch(countSlice.actions.arrAddStuff('added'))}>add to arr</button></li>
        </ul> */}
    </div>;
};

export default Blah;