import React from 'react'
import Child2 from './Child2'

type Props = {}

const Child1 = (props: any) => {
  return (
    <div>
        <h1>Child1</h1>
        <hr />
        <Child2 color={props.color}/>
    </div>
  )
}

export default Child1