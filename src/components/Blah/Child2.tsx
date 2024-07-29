import React from 'react'
import Child3 from './Child3'

import {BlahContext} from './Blah';



type Props = {}

const Child2 = (props: any) => {

    const myContextInBlah = React.useContext(BlahContext); 
    console.log("myContextInBlah: ", myContextInBlah);

  return (
    <div>
        <h1>Child2</h1>
        <hr />
        <Child3 color={props.color}/>
    </div>
  )
}

export default Child2