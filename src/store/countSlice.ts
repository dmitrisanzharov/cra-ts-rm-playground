import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
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
        }
    }
}); 