import React from 'react'
// compos
import Comp1 from './Comp1';
import Comp2 from './Comp2';

type Props = {}

type ContextBlockOneContextType = {
    name: string
}

const myObj = {
    name: 'me mahn'
}

export const ContextBlockOneContext = React.createContext<any>(myObj);

const ContextBlockOne = (props: Props) => {

  return (
    <ContextBlockOneContext.Provider value={myObj}>
        {/* children go here */}
        <Comp1 />
        <Comp2 />
    </ContextBlockOneContext.Provider>
  )
}

export default ContextBlockOne;