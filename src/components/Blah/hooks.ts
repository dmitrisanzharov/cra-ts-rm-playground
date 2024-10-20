import React from 'react';

export const useCountIncrease = (state: any, setState: any) => {
    setState(state + 1);
};

export const incCount2 = (state: any, setState: any): any => {
    setState(state + 1);
};


export const useHookOne = () => {
    React.useMemo(()=> console.log('omg'), [])

    console.log('omg2')
}