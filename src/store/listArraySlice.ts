import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    list: []
}


const listArraySlice = createSlice({
    name: 'listArraySlice',
    initialState: initialState,
    reducers: {
        addToArray: (state: any, action: any) => void(state.list = [...state.list, action.payload])
    }
} as any);


export const listArraySliceReducer = listArraySlice.reducer; // it is inside the Slice Object
export const listArraySliceActions = listArraySlice.actions; // it is indside the Slice Object too
