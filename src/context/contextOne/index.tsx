import React from 'react';

import CompOne from './CompOne';
import CompTwo from './CompTwo';

export const ContextOne: any = React.createContext<any>({} as any);
console.log("ContextOne: ", ContextOne);

const ContextOneWrapper: React.FC<any> = ({nameProps, children}) => {
    const myObj = {
        name: nameProps
    };

    console.log('myObj: ', myObj);

    return <ContextOne.Provider value={myObj}>
        <CompOne />
        <CompTwo />
        {children}
    </ContextOne.Provider>;
};

export default ContextOneWrapper;
