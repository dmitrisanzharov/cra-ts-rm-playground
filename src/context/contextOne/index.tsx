import React from 'react';

import CompOne from './CompOne';
import CompTwo from './CompTwo';

export const ContextOne: any = React.createContext({} as any);

const ContextOneWrapper: React.FC<any> = ({children}) => {
    const myObj = {
        name: 'Dmitri'
    };

    console.log('myObj: ', myObj);

    return <ContextOne.Provider value={myObj}>
        <CompOne />
        <CompTwo />
        {children}
    </ContextOne.Provider>;
};

export default ContextOneWrapper;
