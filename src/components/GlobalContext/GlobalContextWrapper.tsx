import React from 'react'

type Props = {}

export const GlobalContext = React.createContext<any>(undefined); 

const GlobalContextWrapper = ({children}: any) => {

  const objValue = {
    name: 'mah man'
  }

  return (
    <GlobalContext.Provider value={objValue}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextWrapper