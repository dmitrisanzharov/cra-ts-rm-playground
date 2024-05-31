import React from 'react'
import {MyContextVersionOne} from 'src/context/ContextVersionOne';
import {MainContextWrapper} from 'src/context2/ContextAppWrapper';

type Props = {}

const ComponentOne = (props: Props) => {

    const data = React.useContext(MyContextVersionOne);
    data.blah2 = 'blah2';
    console.log('data one', data);

    const dataMain = React.useContext(MainContextWrapper);
    console.log("dataMain: ", dataMain);


  return (
    <div>ComponentOne - {data.componentOneValue}, and the name is: {dataMain.name}</div>
  )
}

export default ComponentOne