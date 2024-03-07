import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    list: ['one']
}


const listArraySlice = createSlice({
    name: 'listArraySlice',
    initialState: initialState,
    reducers: {
        addToArray: (state: any, action: any) => void(state.list = [...state.list, action.payload])
    }
} as any);

// console.log('list object', listArraySlice);

export const listArraySliceReducer = listArraySlice.reducer; // it is inside the Slice Object
export const listArraySliceActions = listArraySlice.actions; // it is indside the Slice Object too
