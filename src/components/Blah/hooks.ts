import React from 'react';


export const useMyHook = (slowFn: (arg: number)=> number) => {
    const [count, setCount] = React.useState(0);

    const data = React.useMemo(() => {
        
        const myObj = {name: 'victor'};

        const fnReturn = slowFn(2);
    
        return {myObj, fnReturn}
    }, [slowFn]);

    return {count, setCount, data}
    }
