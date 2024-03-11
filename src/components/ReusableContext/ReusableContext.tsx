import React from 'react';


export const ReusableContext = React.createContext<any>(null);


const ReusableContextWrapper = (props: any) => {

    const [state, setState] = React.useState<any>({count: 0})


    const objValue = {
        name: props.name,
        count: state,
        setCount: setState
    }

    return <ReusableContext.Provider value={objValue}>
        {props.children}
    </ReusableContext.Provider>

}

export default ReusableContextWrapper; 