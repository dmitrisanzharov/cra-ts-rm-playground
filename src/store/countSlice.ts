import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialStateObj = {
    countInSlice: 0,
    arrInSlice: []
}

export const countSlice: any = createSlice({
    name: 'countSliceNameVic',
    initialState: initialStateObj,
    reducers: { // i.e. these are our functions, states
        incCount: (state) => {
            state.countInSlice = state.countInSlice + 1;
        },
        decCount: (state) => {
            state.countInSlice = state.countInSlice - 1;
        },
        resetCount: (state) => {
            state.countInSlice = 0;
        },

        addToArrInCount: (state, action) => { // action is actually packageObject with payload in it
            console.log('state', state);
            console.log('action', action);
            state.arrInSlice = [...state.arrInSlice, action.payload] as any;
        }
    }
});

console.log('countSlice', countSlice);

const selectSelf = (state: any) => {
    return state.storeConfigCountSlice;
}

export const countSelector = createSelector(selectSelf, (state: any) => state.countInSlice);

export const countSelectorLong = createSelector((stateGlobal: any)=> stateGlobal.storeConfigCountSlice, (stateLocal: any) => stateLocal.countInSlice)

export default countSlice;