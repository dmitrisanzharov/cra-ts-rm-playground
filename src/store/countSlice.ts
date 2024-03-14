import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
};


const countSlice = createSlice({
    name: 'countSlice',
    initialState: initialState,
    reducers: {
        addToCount: (state) => {
            state.count = state.count + 1;
        }
    }
});


export const countSliceReducerWithState = countSlice.reducer;

export const countSliceActions = countSlice.actions;