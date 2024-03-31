import React from 'react';
import {MyMainContextWrapperContext} from './MainContextWrapper'; 

type Props = {}

const Comp2Syntax2 = (props: Props) => {

    const objInComp2 = React.useContext(MyMainContextWrapperContext)
    console.log("objInComp2: ", objInComp2);

  return (
    <div>Comp2Syntax2</div>
  )
}

export default Comp2Syntax2