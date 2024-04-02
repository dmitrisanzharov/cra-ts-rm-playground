import { configureStore } from "@reduxjs/toolkit";

// reducers
import { countSliceReducer } from './countSlice';

const storeConfig = configureStore({
	reducer: {
        countSliceState: countSliceReducer
    },
});

export default storeConfig;
