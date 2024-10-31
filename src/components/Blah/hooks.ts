import React from 'react';

export const useCountIncrease = (state: any, setState: any) => {
    setState(state + 1);
};

export const incCount2 = (state: any, setState: any): any => {
    setState(state + 1);
};


export const useCustomHook = (fn: any, arg: number) => {
    return React.useMemo(()=> {
        console.log('fn called')
        return fn(2)
    }, [])
}

export const useMyHook2 = (arg: string) => {
    const [number, setNumber] = React.useState(0);

    function handleClick() {
        setNumber(number + 1);
    }

    console.log('arg', arg);

    return {number, handleClick}
}