import React from 'react';

export const ContextOne = React.createContext({});

const ContextOneWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const myObj = {
        name: 'Dmitri'
    };

    return <ContextOne.Provider value={myObj}>{children}</ContextOne.Provider>;
};

export default ContextOneWrapper;
