import React from 'react'
import { MyContextOneWrapper } from './ContextOneWrapper';

type Props = {}

const Foo1 = (props: Props) => {

    const data = React.useContext(MyContextOneWrapper);
    console.log("data: ", data);

    data.blah = 'yo';
    console.log("data: ", data);

  return (
    <div>
        <h1>Foo1, count: {data.count}</h1>
        <button onClick={()=> data.countFn(data.count + 1)}>inc</button>
        <hr />
    </div>
  )
}

export default Foo1