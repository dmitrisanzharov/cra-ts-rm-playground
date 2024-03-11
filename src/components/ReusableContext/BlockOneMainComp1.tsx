import React from 'react'
import { ReusableContext } from 'src/components/ReusableContext/ReusableContext';

type Props = {}

const BlockOneMainComp1 = (props: Props) => {

    const values = React.useContext(ReusableContext); 
    console.log("values: Block 1", values);

  return (
    <div>
        <h1>BlockOneMainComp1</h1>
        <p>Value has been found and it is: {values.name}</p>
        <h3>This is count: {values.count.count}</h3>
        <button onClick={()=> values.setCount({...values.count, count: values.count.count + 1})}>add to count</button>
    </div>
  )
}

export default BlockOneMainComp1; 