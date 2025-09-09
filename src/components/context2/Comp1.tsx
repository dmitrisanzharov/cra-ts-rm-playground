import React from 'react'
import { Context2Const } from '.';

const Comp1 = () => {

  const value = React.useContext(Context2Const);
  console.log('not in useEffect',value);

  React.useEffect(() => {
    console.log('in useEffect',value);
  }, [value]);


  return (
    <div>Comp1 {JSON.stringify(value)}</div>
  )
}

export default Comp1