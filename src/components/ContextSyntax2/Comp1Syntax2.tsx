import React from 'react';
import { MyMainContextWrapperContext } from 'src/components/ContextSyntax2/MainContextWrapper';

type Props = {}

const Comp1Syntax2 = (props: Props) => {

    const obj = React.useContext(MyMainContextWrapperContext);
    console.log("obj: ", obj);


  return (
    <div>Comp1Syntax2</div>
  )
}

export default Comp1Syntax2