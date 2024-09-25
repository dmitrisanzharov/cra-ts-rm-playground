import React from 'react'
import { Block1ContextVar } from './Block1Context';

type Props = {}

const Foo = (props: Props) => {

    const data = React.useContext(Block1ContextVar);
    console.log("data foo: ", data);

     (data as any).blah = 'blah var';

  return (
    <div>Foo</div>
  )
}

export default Foo