import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    countFromStore: 0
}


const countSlice: any = createSlice({
    name: 'Count Slice',
    initialState: initialState,
    reducers: {
        increment: state => {
            state.countFromStore = state.countFromStore + 1;
        },
        incrementByAmount: (state, action) => {
            console.log('action', action);
            state.countFromStore = state.countFromStore + action.payload; 
        }
    }
});

// console.log('countSlice', countSlice);

export default countSlice;