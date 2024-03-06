import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    countInSlice: 0
}


const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: initialState,
    reducers: {
        inc2: (state: any) => state.countInSlice = state.countInSlice + 1,
        inc: (state: any) => {
            state.countInSlice = state.countInSlice + 1
        },
        dec: (state: any) => {
            state.countInSlice = state.countInSlice - 1
        }
    }
} as any);

console.log('counterSlice object', counterSlice); 

export const counterSliceActions = counterSlice.actions;

export const counterSliceReducer = counterSlice.reducer;