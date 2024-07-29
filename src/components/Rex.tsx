import React from 'react'
import {MyGlobalContext} from './GlobalContextWrapper';

type Props = {}

const Rex = (props: Props) => {

    const dataInRex = React.useContext(MyGlobalContext);
    console.log("dataInRex: ", dataInRex);


  return (
    <div>Rex</div>
  )
}

export default Rex