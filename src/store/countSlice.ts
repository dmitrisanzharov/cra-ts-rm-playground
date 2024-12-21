import { createSlice } from '@reduxjs/toolkit';

const initialStateObj = {
    countInSlice: 0,
    arrInSlice: []
}

export const countSlice: any = createSlice({
    name: 'countSlice',
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
            state.arrInSlice = [...state.arrInSlice, action.payload] as any;
        }
    }
});

console.log('countSlice', countSlice);

export default countSlice;