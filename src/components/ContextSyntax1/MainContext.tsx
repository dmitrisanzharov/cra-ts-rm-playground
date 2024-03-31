import React from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

export const Syntax1Context = React.createContext<any>(undefined);

const MainContext = () => {

    let objValues = {
        var1: 'var1'
    }


  return (
    <Syntax1Context.Provider value={objValues}>
        <h1>Holy Smokes this is syntax one</h1>

        <Comp1 />
        <Comp2 />

        <hr />
    </Syntax1Context.Provider>
  )
}

export default MainContext