import { configureStore } from "@reduxjs/toolkit";
// slice reducers
import { countSliceReducer } from 'src/store/countSlice';

const storeConfig = configureStore({
    reducer: {
        countSliceStoreConfigReducer: countSliceReducer
    }
});

export default storeConfig;