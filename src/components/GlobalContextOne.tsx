import React from 'react'

type Props = {}

export const MyGlobalContext: any = React.createContext({})

const GlobalContextOne = (props: any) => {

    const myObj = {
        name: 'GlobalContextOne'
    }

  return (
    <MyGlobalContext.Provider value={myObj}>{props.children}</MyGlobalContext.Provider>
  )
}

export default GlobalContextOne