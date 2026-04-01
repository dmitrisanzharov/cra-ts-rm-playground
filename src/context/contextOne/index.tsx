import React from 'react';

import CompOne from './CompOne';
import CompTwo from './CompTwo';

export const ContextOne = React.createContext({});

const ContextOneWrapper: React.FC<any> = () => {
    const myObj = {
        name: 'Dmitri'
    };

    return <ContextOne.Provider value={myObj}>
        <CompOne />
        <CompTwo />
    </ContextOne.Provider>;
};

export default ContextOneWrapper;
