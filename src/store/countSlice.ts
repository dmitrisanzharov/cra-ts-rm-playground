import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    countArr: []
}

export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
        },
        decrement: (state) => {
            state.count = state.count - 1
        },
        reset: (state) => {
            state.count = 0
        },
        addToArr: (state, action) => {
            
            // console.log('action.payload', action);
            // @ts-ignore
            state.countArr.push(action.payload);
        }
    }
}); 

// console.log('counterSlice in file', counterSlice);

const selectSelf = (state: any) => {
    // console.log('selectSelf state: ', state);
    return state.counterInStore;
}

export const countSelector = createSelector(selectSelf, (counterInStore) => {
    // console.log('selector1 counterInStore: ', counterInStore);
    return counterInStore.count;
});

