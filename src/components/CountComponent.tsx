import React from 'react'

// redux stuff
import { useSelector, useDispatch } from 'react-redux'
import { countSliceActions, countAsASelector, arrAsASelector } from 'src/store/countSlice';
import usersApiSlice from 'src/store/api/usersApi';

const CountComponent = () => {

  const dispatch = useDispatch();
  const count = useSelector(countAsASelector);
  const arrInCount = useSelector(arrAsASelector);
  // const foo = useSelector((state: any) => {
  //   console.log('full state', state);
    
  // })

  // const userQuery = usersApiSlice.useGetAllUsersQuery({});
  // console.log("userQuery: ", userQuery);

  // const userQueryLazy = usersApiSlice.useLazyGetAllUsersQuery();
  // console.log("userQueryLazy: ", userQueryLazy);

  const getSingleUserByIdLazy = usersApiSlice.useLazyGetOneUserByIdQuery();
  console.log("getSingleUserByIdLazy: ", getSingleUserByIdLazy);
  

  React.useEffect(() => {
    getSingleUserByIdLazy[0](1).then(el=> console.log(el));
    let a = getSingleUserByIdLazy[1];
    console.log('a', a);
    console.log(getSingleUserByIdLazy[2])
  }, []);


  return (
    <div>
      <h1>This is count: {count}</h1>
      <button onClick={()=> dispatch(countSliceActions.increaseCount())}>inc</button>
      <button onClick={()=> dispatch(countSliceActions.decreaseCount())}>dec</button>
      <hr />
      <h2>This is array: {JSON.stringify(arrInCount)}</h2>
      <button onClick={()=> dispatch(countSliceActions.addToArr('b' as any))}>change the arr</button>
    </div>
  )
}

export default CountComponent;