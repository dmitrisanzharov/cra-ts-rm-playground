import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
    countFromStore: 0
}

export const counterSlice: any = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        inc: state => {
            state.countFromStore = state.countFromStore + 1;
        },
        dec: state => {
            state.countFromStore = state.countFromStore - 1;
        },
        incByAmount: (state, action) => {
            state.countFromStore = state.countFromStore + action.payload;
        }
    }
})

// console.log('counterSlice', counterSlice);

export default counterSlice;