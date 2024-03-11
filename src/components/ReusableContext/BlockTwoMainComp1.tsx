import React from 'react';
import { ReusableContext } from 'src/components/ReusableContext/ReusableContext';

type Props = {}

const BlockTwoMainComp1 = (props: Props) => {

    const values = React.useContext(ReusableContext); 
    // console.log("values 2: ", values);

    console.log('BlockTwoMainComp1 re-rendered');

  return (
    <div>
        <h1>BlockTwoMainComp1</h1>
        <p>The name has been found: {values.name}</p>
    </div>
  )
}

export default BlockTwoMainComp1