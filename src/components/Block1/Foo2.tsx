import React from 'react'
import { Block1ContextVar } from './Block1Context';

type Props = {}

const Foo = (props: Props) => {

    const data: any = React.useContext(Block1ContextVar);
    console.log("data foo2: ", data);
   

  return (
    <div>Foo2 {data.blah || 'lalala'}</div>
  )
}

export default Foo