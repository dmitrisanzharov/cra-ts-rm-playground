import React from 'react'
import { Context2Const } from '.'

type Props = {}

const CompInTwo = (props: Props) => {

    const compInTwoValues = React.useContext(Context2Const) as any;

    console.log("comp 1: before", compInTwoValues);
   

    compInTwoValues.newKey = 'newVal';

    console.log("comp 1: after", compInTwoValues);

  return (
    <div>Comp1</div>
  )
}

export default CompInTwo;