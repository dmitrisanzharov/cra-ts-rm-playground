import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const urlToFetch = 'http://localhost:5000/fleet-rental-type-allaaa'; 

const initialState = {
    data: []
}

function consoleLog(process: string, state: any, action: any){
    console.log('process', process);
    console.log('thunk state', state);
    console.log('thunk action', action);
    console.log('============================');
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

        console.log('fetchFleetData', fetchFleetData);

        builder.addCase(fetchFleetData.pending, (state, action) => {
            consoleLog('pending', state, action);
        });

        builder.addCase(fetchFleetData.rejected, (state, action) => { // this one is useless, cause if there is an error it will FULFILL and give you message from Axios... and you get fulfilled with no data
            consoleLog('rejected', state, action);
        })

        builder.addCase(fetchFleetData.fulfilled, (state, action) => {
            consoleLog('fulfilled', state, action)
            state.data = action.payload
        })
    }
});

export const apiSliceFleetReportReducerForStore = apiSliceFleetReport.reducer;
