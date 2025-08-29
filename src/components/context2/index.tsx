import React from 'react'
import CompInTwo from './CompInTwo'
import CompInTwoB from './CompInTwoB'
import CompInTwoC from './CompInTwoC'

type Props = {}

export const Context2Const = React.createContext({});

const Context2 = (props: Props) => {

    const [state, setState] = React.useState({ lala: 'omg' });


    return (
        <Context2Const.Provider value={{state, setState}}>
            {/* comp 2 */}
            <CompInTwoB /> 
            {/* comp 1 */}
            <CompInTwo />   
        </Context2Const.Provider>
    )
}

export default Context2;