import React from 'react'

type Props = {}

export const MyGlobalContext = React.createContext<any>({});

const GlobalContextWrapper = (props: any) => {

    const myVal = {
        name: 'Miss Chief', 
        occupation: 'cry baby'
    }


  return (
     <MyGlobalContext.Provider value={myVal}>
        {props.children}
     </MyGlobalContext.Provider>
  )
}

export default GlobalContextWrapper