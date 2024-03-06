import { configureStore } from '@reduxjs/toolkit';
import { counterSliceState } from './countSlice'; 
import { listArraySliceReducer } from './listArraySlice';


const configStore = configureStore({
    reducer: {
        counterStatesFromStore: counterSliceState,
        listArrayInStore: listArraySliceReducer
    }
});

export default configStore; 