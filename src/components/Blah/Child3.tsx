import React from 'react'
import {BlahContext} from './Blah';

type Props = {}

const Child3 = (props: any) => {

    const contextValues = React.useContext(BlahContext);
    console.log("contextValues: ", contextValues);


  return (
    <div>
        <h1 style={{color: contextValues.color}}>Child3</h1>
    </div>
  )
}

export default Child3