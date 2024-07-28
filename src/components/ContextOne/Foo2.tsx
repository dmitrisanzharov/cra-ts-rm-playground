import React from 'react';
import { MyContextOneWrapper } from './ContextOneWrapper';

type Props = {}

const Foo2 = React.memo((props: Props) => {

    const data = React.useContext(MyContextOneWrapper);
    console.log("data in 2: ", data);

    console.log('re-rendere foo2');

  return (
    <div>Foo2</div>
  )
})

export default Foo2