import { createSlice } from '@reduxjs/toolkit';

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

console.log('counterSlice object', counterSlice); 

console.log('getInitialState', )

export const counterSliceActions = counterSlice.actions;

export const counterSliceState = counterSlice.reducer;