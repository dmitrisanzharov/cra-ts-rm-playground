import React from 'react';
import {ContextBlockOneContext} from './ContextBlockOne'; 

type Props = {}

const Comp1 = (props: Props) => {

  const values = React.useContext(ContextBlockOneContext)

  values.blah = 'yoyo';

  function handleClick(){
    values.blah = 'yoyo2'
    console.log('values', values);
  }

  return (
    <div>
      <h1>Comp 1</h1>
      {values.name}
      <br />
      {values.blah}
      <br />
      <button onClick={handleClick}>check</button>
    </div>
  )
}

export default Comp1