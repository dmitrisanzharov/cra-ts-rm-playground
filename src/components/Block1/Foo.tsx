import React from 'react'
import { Block1ContextVar } from './Block1Context';
import { MyGlobalContextWrapperVar } from '../GlobalContextWrapper';

type Props = {}

const Foo = (props: Props) => {

    const data = React.useContext(MyGlobalContextWrapperVar);
    console.log("data in Foo: ", data);

  return (
    <div>Foo</div>
  )
}

export default Foo