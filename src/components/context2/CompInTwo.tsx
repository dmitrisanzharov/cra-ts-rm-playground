import React from 'react'
import { Context2Const } from '.'

type Props = {}

const CompInTwo = (props: Props) => {

    const compInTwoValues = React.useContext(Context2Const);
    console.log("compInTwoValues: ", compInTwoValues);

  return (
    <div>CompInTwo</div>
  )
}

export default CompInTwo;