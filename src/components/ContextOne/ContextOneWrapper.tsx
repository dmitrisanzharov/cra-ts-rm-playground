import React from 'react'
import Foo1 from './Foo1'
import Foo2 from './Foo2'

type Props = {}

export const MyContextOneWrapper = React.createContext<any>({});

const ContextOneWrapper = (props: Props) => {

    const [count, setCount] = React.useState(1);

    const myVal = {
        name: 'Dmitri',
        age: 30,
        count: count,
        countFn: setCount
    }

  return (
    <MyContextOneWrapper.Provider value={myVal}>
        <Foo1 />
        <Foo2 />
    </MyContextOneWrapper.Provider>
  )
}

export default ContextOneWrapper