import React from 'react'
import CompInTwo from './CompInTwo'

type Props = {}

export const Context2Const = React.createContext({});

const Context2 = (props: Props) => {
    return (
        <Context2Const.Provider value={{ lala: 'omg' }}>
            <CompInTwo />
        </Context2Const.Provider>
    )
}

export default Context2;