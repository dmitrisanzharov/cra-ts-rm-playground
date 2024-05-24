import React from 'react'

// redux stuff
import { useSelector, useDispatch } from 'react-redux'
import { countSliceActions } from 'src/store/countSlice';

const CountComponent = () => {

  const dispatch = useDispatch();
  const countSlice = useSelector((store: any) => store.countSliceStoreConfigReducer);


  return (
    <div>
      <h1>This is count: {countSlice.countInCountSliceState}</h1>
      <button onClick={()=> dispatch(countSliceActions.increaseCount())}>inc</button>
      <button onClick={()=> dispatch(countSliceActions.decreaseCount())}>dec</button>
      <hr />
      <h2>This is array: {JSON.stringify(countSlice.arrInCountSliceState)}</h2>
      <button onClick={()=> dispatch(countSliceActions.addToArr('b' as any))}>change the arr</button>
    </div>
  )
}

export default CountComponent;