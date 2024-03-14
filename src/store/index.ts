import { configureStore } from "@reduxjs/toolkit";
// reducers
// @ts-ignore
import { countSliceReducerWithState } from "src/store/countSlice"; 

// apiSlice
import { apiSliceForUsers } from 'src/store/api/apiSliceForUsers';


const storeConfig = configureStore({
    reducer: {
        countSliceStateInStore: countSliceReducerWithState,
        [apiSliceForUsers.reducerPath]: apiSliceForUsers.reducer
    },
    middleware: ( getDefaultMiddleware: any ) => {
        return getDefaultMiddleware({}).concat([apiSliceForUsers.middleware])
    }
} as any);


export default storeConfig; 