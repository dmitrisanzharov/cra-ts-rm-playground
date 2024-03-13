import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlToUse = 'http://localhost:5000/fleet-rental-type-all'; 

function consoleLog(process: string, state: any, action: any){
    console.log('process', process);
    console.log('state', state);
    console.log('action', action);
    console.log('============================');
}

// this is basically Axios wrapper, cause you can NOT use Axios inside Redux Actions/Reducer functions directly
export const fetchData: any = createAsyncThunk(
    'thisIsPrefixForActionType', // action Object in extraReducers will have TYPE in the object, which can be /pending or /fulfilled... so this is a Prefix to it, so it becomes:  thisIsPrefixForActionType/pending
    async (arg1, arg2) => {
        console.log('arg1', arg1); // argument that I pass into the Thunk Function
        console.log('arg2', arg2); // useless object, BUT has requestID and getState() in it
        console.log('test', arg2.getState()); // will return STORE object with access to all STORE states in it
        const responds = await axios.get(urlToUse);
        return responds.data;
    }
)

const initialState = {
    data: []
}

const vehiclesSlice = createSlice({
    name: 'vehiclesSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {

        console.log('builder', builder); // this has: .addCase in here, runs 1 time and doesn't do much... it also has: addDefaultCase and addMatcher, but I dunno what they do


        // builder.addCase  then  fetchData.[pending, fulfilled, rejected]
        // pending = when requests starts
        // fulfilled = when request fullfills
        // rejected = when there is ERROR sent from SERVER side

        builder.addCase(fetchData.pending, (state: any, action: any) => {
            // state = does nothing here
            // action = IMPORTANT = return object that has:
            // meta:  requestid and requestStatus
            // payload: which is our DATA
            // type: which is: thisIsPrefixForActionType + / + requestStatus
            // NOTE: requestID is consistent accross ALL
            consoleLog('pending', state, action)
        });

        builder.addCase(fetchData.fulfilled, (state: any, action: any) => {
            consoleLog('fulfilled', state, action)
            state.data.push(action.payload)
        })
    }
});
console.log('vehiclesSlice', vehiclesSlice);

export const vehiclesSliceReducerInitialState = vehiclesSlice.reducer; 