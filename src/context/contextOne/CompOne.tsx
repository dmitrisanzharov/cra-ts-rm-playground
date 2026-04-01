import React from 'react'
import { ContextOne } from './index';

type Props = {}

const CompOne: React.FC<Props> = (props: Props) => {

    const data = React.useContext(ContextOne);
    console.log("data from Comp One: ", data);

  return (
    <div>CompOne</div>
  )
}

export default CompOne