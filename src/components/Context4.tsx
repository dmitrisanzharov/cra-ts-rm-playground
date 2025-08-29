import React from 'react'

type Props = {}

export const Context4Const = React.createContext({});

const Context4 = (props: any) => {
    console.log("props: ", props);

    const valueIn4 = { someValue4: 'value4' };

    return (
        <Context4Const.Provider value={valueIn4}>{props.children}</Context4Const.Provider>
    )
}

export default Context4;