import React from 'react'

type Props = any;

export const ContextSyntax3Context = React.createContext<any>(undefined); 

const ContextSyntax3 = (props: Props) => {

    const obj = {
        name: props.name
    }


  return (
    <ContextSyntax3Context.Provider value={obj}>
        {props.children}
    </ContextSyntax3Context.Provider>
  )
}

export default ContextSyntax3