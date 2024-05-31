import React from 'react';
import {MyContextVersionOne} from 'src/context/ContextVersionOne';

type Props = {}

const ComponentTwo = (props: Props) => {

    const data = React.useContext(MyContextVersionOne); 
    console.log('data two', data);

  return (
    <div>ComponentTwo - {data.componentTwoValue}</div>
  )
}

export default ComponentTwo