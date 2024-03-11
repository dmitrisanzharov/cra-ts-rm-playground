import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { counterSliceState } from './countSlice'; 
import { listArraySliceReducer } from './listArraySlice';
import { apiSliceFleetReportReducerForStore } from 'src/store/apiSliceFleetReport';

// persistor stuff
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';



const persistConfig = {
    key: 'myMagicKey',
    version: 1,
    storage: storage
}

const rootReducer = combineReducers({
    counterStatesFromStore: counterSliceState, // you can NOT access Action from here only Initial State
    listArrayInStore: listArraySliceReducer,
    apiSliceFleetReportInitialState: apiSliceFleetReportReducerForStore
});

const persistedReducer = persistReducer(persistConfig, rootReducer); 


const configStore = configureStore({
    reducer: persistedReducer
});

export default configStore;