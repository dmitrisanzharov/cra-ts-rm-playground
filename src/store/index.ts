import { configureStore } from '@reduxjs/toolkit';
import { counterSliceState } from './countSlice'; 
import { listArraySliceReducer } from './listArraySlice';


const configStore = configureStore({
    reducer: {
        counterStatesFromStore: counterSliceState, // you can NOT access Action from here only Initial State
        listArrayInStore: listArraySliceReducer
    }
});

export default configStore; 