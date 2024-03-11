import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const urlToFetch = 'http://localhost:5000/fleet-rental-type-all'; 

const initialState = {
    data: []
}


export const fetchFleetData = createAsyncThunk("", () => {
    return axios.get(urlToFetch).then(items => items.data).catch(err => console.log(err));
})


const apiSliceFleetReport = createSlice({
    name: 'apiSliceFleetReport',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        console.log('this is builder', builder);
        builder.addCase(fetchFleetData.fulfilled, (state, action) => {
            console.log('thunk state', state);
            console.log('thunk action', action);
            state.data = action.payload
        })
    }
});

export const apiSliceFleetReportReducerForStore = apiSliceFleetReport.reducer;
