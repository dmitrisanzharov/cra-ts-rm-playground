import React from 'react'
import Foo from './Foo';
import Foo2 from './Foo2';

type Props = {}

export const Block1ContextVar = React.createContext({});

const Block1Context: React.FC<any> = (props: Props) => {

    const myObj = {
        name: 'Block1ContextVar'
    }

  return (
    <Block1ContextVar.Provider value={myObj}>
        <Foo />
        <Foo2 />
    </Block1ContextVar.Provider>
  )
}

export default Block1Context