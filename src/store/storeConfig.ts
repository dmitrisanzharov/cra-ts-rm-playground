import { configureStore } from '@reduxjs/toolkit';
import countSlice from './countSlice';

const storeConfig = configureStore({
    reducer: {
        storeConfigCountSlice: countSlice.reducer
    }
});

export default storeConfig;