import { configureStore } from '@reduxjs/toolkit';

// slices
import { counterSlice } from './countSlice';

const storeConfig = configureStore({
    reducer: {
        counterInStore: counterSlice.reducer,
    },
});

export default storeConfig;