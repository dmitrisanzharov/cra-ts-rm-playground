import React from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'

type Props = {}

export const Context2Const = React.createContext({});

const Context2 = (props: Props) => {

    const valueObj: any = {
        name: 'myName'
    }


    return (
        <Context2Const.Provider value={valueObj}>
            <Comp1 />  
            <Comp2 /> 
            {/* sequence -> comp2 changes value -> comp1 useEffect sees it, but comp1 non-useEffect code does NOT */}
        </Context2Const.Provider>
    )
}

export default Context2;