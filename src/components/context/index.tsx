import React, { createContext } from 'react';

type Props = {
  children: React.ReactNode
}

export const MainContextConst = createContext({});

const MainContextWrapper = (props: Props) => {


  const valueObj = {
    name: 'nameOne'
  }

  return (
    <MainContextConst.Provider value={valueObj}>
      {props.children}
    </MainContextConst.Provider>
  )
}

export default MainContextWrapper