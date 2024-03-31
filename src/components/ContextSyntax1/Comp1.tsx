import React from 'react'
import { Syntax1Context } from './MainContext';

type Props = {}

const Comp1 = (props: Props) => {

    const myValues = React.useContext(Syntax1Context);
    console.log("myValues: ", myValues);

    myValues.omg = 'omg';
    


  return (
    <div>
        <button onClick={()=> {
            console.log('button clicked')
            myValues.omg = 'yoyo';
        }}>{myValues.omg}</button>
    </div>
  )
}

export default Comp1