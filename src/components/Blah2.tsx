import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import { fetchFleetData } from 'src/store/apiSliceFleetReport';

type Props = {}

const Blah2 = (props: Props) => {

    const dispatch = useDispatch(); 
    const data = useSelector((state: any) => state.apiSliceFleetReportInitialState.data)
    console.log("data: ", data);


    React.useEffect(() => {
        dispatch(fetchFleetData() as any)
    }, []);

  return (
    <div>Blah2</div>
  )
}

export default Blah2; 