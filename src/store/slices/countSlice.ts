import { createSlice, createSelector } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';

type InitialState = {
    count: number,
    countArr: any[]
}

const initialState: InitialState = {
    count: 0,
    countArr: []
}

const countSlice: any = createSlice({
    name: 'countSliceName',
    initialState: initialState,
    reducers: { // these are actually ACTION FUNCTIONS, called ACTIONS
        arrAddStuff: (state, action) => {
            // console.log('state', state);
            // console.log('action', action);
            state.countArr = [...state.countArr, action.payload];
        },
        incCount: (state) => {
            state.count = state.count + 1;
        },
        decCount: (state) => {
            state.count = state.count - 1;
        },
        incCountByAmount: (state, action) => { // action is actually a PACKAGE
            // console.log('action', action);
            state.count = state.count + action.payload;
        },
    },
});

const selectSelf: any = (state: any) => state.countSliceStates;

export const countSelected: any = createSelector(selectSelf, (state: any) => state.count);
export const countArrSelected: any = createSelector(selectSelf, (state: any) => state.countArr);

export default countSlice; 