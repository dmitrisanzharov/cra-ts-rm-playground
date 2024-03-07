import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState: any = {
    countFromInitialState: 0
}


const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: initialState,
    reducers: {
        inc: (state: any) => {
            console.log('triggered');
            state.countFromInitialState = state.countFromInitialState + 1
        },
        dec: (state: any) => {
            state.countFromInitialState = state.countFromInitialState - 1
        }
    }
} as any);

// console.log('counterSlice object', counterSlice); 

export const counterSliceState = counterSlice.reducer;

export const counterSliceActions = counterSlice.actions;

export const getInitialStateFromCounterSlice = counterSlice.getInitialState(); 



const selectSelf = (state: any) => {
    console.log('selectSelf state', state); // this gives access to the STORE config reducers, so I can select the correct InitialState
    return state;
};

// Selectors
export const countFromCounterSlice = createSelector(selectSelf, (state: any) => {
    console.log('state in createSelector fn2', state); // this is basically: state.counterStatesFromStore... i.e. the store Config
    return state.counterStatesFromStore.countFromInitialState
}); 
