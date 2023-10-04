import { createSlice, createSelector } from '@reduxjs/toolkit'

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
            state.countFromStore = state.countFromStore + action.payload; 
        }
    }
});

const selectSelf = (state: any) => state.shakeAndBake;
export const selectCountFromStore = createSelector(selectSelf, (state: any)=> state.countFromStore); 


export default countSlice;