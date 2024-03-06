import { configureStore } from '@reduxjs/toolkit';
import { counterSliceReducer } from './countSlice'; 


const configStore = configureStore({
    reducer: {
        counterInStore: counterSliceReducer
    }
});

export default configStore; 