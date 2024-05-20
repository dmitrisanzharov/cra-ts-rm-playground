import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    countInCountSliceState: 0,
    arrInCountSliceState: ['a']
}

export const countSlice = createSlice({
    name: 'countSliceName',
    initialState: initialState,
    reducers: {
        increaseCount: (state: any) => {
            state.countInCountSliceState = state.countInCountSliceState + 1;
        }
    }
});

console.log('countSlice in the countSlice file: ', countSlice);

export const countSliceReducer = countSlice.reducer;
export const countSliceActions = countSlice.actions;