import React from 'react';

type Props = {}

export const Context3Const = React.createContext({});

const Context3 = (props: any) => {

    const valueIn3 = { someValue3: 'value3' };

    return (
        <Context3Const.Provider value={valueIn3}>{props.children}</Context3Const.Provider>
    )
}

export default Context3;