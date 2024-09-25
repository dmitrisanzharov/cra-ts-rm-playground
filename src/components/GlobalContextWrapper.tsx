import React from 'react'

type Props = {}

export const MyGlobalContextWrapperVar: any = React.createContext({})

const GlobalContextWrapper = (props: any) => {

    console.log('props', props)

    const myObj = {
        name: 'MyGlobalContextWrapperVar',
        final: props.bar
    }

  return (
    <MyGlobalContextWrapperVar.Provider value={myObj}>{props.children}</MyGlobalContextWrapperVar.Provider>
  )
}

export default GlobalContextWrapper