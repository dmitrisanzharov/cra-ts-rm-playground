import React from 'react';
import { Syntax1Context } from './MainContext';


type Props = {}

const Comp2 = (props: Props) => {

    const mySyntex1ContextValues = React.useContext(Syntax1Context);
    console.log("mySyntex1ContextValues: ", mySyntex1ContextValues);


  return (
    <div>Comp2</div>
  )
}

export default Comp2