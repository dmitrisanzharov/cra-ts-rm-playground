import React from 'react'
import CompInTwo from './CompInTwo'
import CompInTwoB from './CompInTwoB'
import CompInTwoC from './CompInTwoC'

type Props = {}

export const Context2Const = React.createContext({});

const Context2 = (props: Props) => {

    React.useEffect(() => {
        console.log('context useEffect');
    }, []);


    return (
        <Context2Const.Provider value={{ lala: 'omg' }}>
            {/* comp 2 */}
            <CompInTwoB /> 
            {/* comp 1 */}
            <CompInTwo />   
        </Context2Const.Provider>
    )
}

export default Context2;