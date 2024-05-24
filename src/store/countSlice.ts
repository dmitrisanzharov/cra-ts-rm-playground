import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
	countInCountSliceState: 0,
	arrInCountSliceState: ["a"],
};

export const countSlice = createSlice({
	name: "countSliceName",
	initialState: initialState,
	reducers: {
		increaseCount: (state: any) => {
			state.countInCountSliceState = state.countInCountSliceState + 1;
		},
		decreaseCount: (state: any) => {
			state.countInCountSliceState = state.countInCountSliceState - 1;
		},
		addToArr: (state: any, action: any) => {
			state.arrInCountSliceState.push(action.payload);
		},
	},
});

// console.log("countSlice in the countSlice file: ", countSlice);

export const countSliceReducer = countSlice.reducer;
export const countSliceActions = countSlice.actions;

// selectors
const selectSelf = (state: any) => {
	return state.countSliceStoreConfigReducer;
}

export const countAsASelector = createSelector(selectSelf, (state: any) => state.countInCountSliceState);
export const arrAsASelector = createSelector(selectSelf, (state: any) => state.arrInCountSliceState);
