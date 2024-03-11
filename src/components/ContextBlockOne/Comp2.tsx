import React from 'react'
import {ContextBlockOneContext} from './ContextBlockOne';
import {GlobalContext} from 'src/components/GlobalContext/GlobalContextWrapper';

type Props = {}

const Comp2 = (props: Props) => {

    const values = React.useContext(ContextBlockOneContext)
    console.log("values: ", values);

    const globalVal = React.useContext(GlobalContext); 
    console.log("globalVal: ", globalVal);

    console.log('re-rendered');

  return (
    <div>
    <h1>Comp 2</h1>
    {values.name}
  </div>
  )
}

export default Comp2