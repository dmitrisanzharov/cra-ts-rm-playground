import { createSlice, createSelector } from '@reduxjs/toolkit';


const initialStateVar = {
    count: 0,
    myArr: []
}


const countSlice = createSlice({
    name: 'countSlice',
    initialState: initialStateVar,
    reducers: {
        inc: (state: any) => {
            state.count = state.count + 1
        },
        dec: (state: any) => {
            state.count = state.count - 1
        },
        incByArgNum: (state: any, actionPackage: any) => {
            state.count = state.count + actionPackage.payload
        }
    }
} as any);

// console.log('countSlice', countSlice);

const selectSelf = (state: any) => state.countSliceStoreObj;
export const countSelector = createSelector((state: any) => state.countSliceStoreObj, (state: any) => state.count); 


export default countSlice;

