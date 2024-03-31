import React from 'react';
import {ContextSyntax3Context} from "src/components/ContextSyntax3/ContextSyntax3";

type Props = {}

const Comp1Syntax3 = (props: Props) => {

    const values = React.useContext(ContextSyntax3Context)
    console.log("values: ", values);


  return (
    <div>
        The name is: {values.name}
    </div>
  )
}

export default Comp1Syntax3