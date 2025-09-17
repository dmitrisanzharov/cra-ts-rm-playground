import React from 'react'
import { Context2Const } from '.';

const Comp2 = () => {

  const value: any = React.useContext(Context2Const);
  console.log('SECOND', value);

  value.boo = 'booStr'


  return (
    <div>Comp2</div>
  )
}

export default Comp2