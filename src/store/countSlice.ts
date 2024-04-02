import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}


const countSlice = createSlice({
    name: 'countSlice',
    initialState: initialState,
    reducers: {
        inc: (state: any) => {
            state.count = state.count + 1;
        },
        dec: (state: any) => {
            if(state.count === 0) {
                console.log('cant go lower than zero')
                return;
            }
            state.count = state.count - 1;
        },
        res: (state: any) => {
            state.count = 0
        }, 
        addAmount: (state: any, action: any) => {
            console.log('action', action)
            state.count = state.count + action.payload; 
        }
    }
});

console.log('countSlice', countSlice);

export const countSliceReducer = countSlice.reducer;
export const countSliceActions = countSlice.actions;