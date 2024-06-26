import React from 'react'

type Props = {}

const ChildComp = (props: any) => {
    console.log('props', props)
  return (
    <div>
        <h1>{props.myProp1}</h1>
        <button onClick={()=> props.myFn()}>from parent</button>
    </div>
  )
}

export default ChildComp