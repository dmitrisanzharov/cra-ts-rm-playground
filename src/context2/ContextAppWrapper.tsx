import React from "react";

export const MainContextWrapper = React.createContext<any>({});

const MainContextWrapperComponent = ({children}: any) => {
    const myValues = {
        name: 'blah is the name'
    }

    return (
        <MainContextWrapper.Provider value={myValues}>
            {children}
        </MainContextWrapper.Provider>
    )
}

export default MainContextWrapperComponent; 