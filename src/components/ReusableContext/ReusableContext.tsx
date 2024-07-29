import React from 'react'

type Props = {}

export const MyReusableContext = React.createContext<any>({});

const ReusableContext = (props: any) => {

    const [count, setCount] = React.useState(0);

    const myVal = {
        name: props.name,
        foo: 'bar',
        count: count,
        changeCountFn: setCount
    }


  return (
    <MyReusableContext.Provider value={myVal}>{props.children}</MyReusableContext.Provider>
  )
}

export default ReusableContext; 