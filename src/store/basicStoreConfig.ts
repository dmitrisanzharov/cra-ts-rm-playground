import { configureStore, combineReducers } from '@reduxjs/toolkit';

// redux persistor
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// reducers
import counterSlice from './counterSlice';
import inputSlice from './inputSlice';


const persistConfig = {
    key: 'myKey1',
    storage
}

const rootReducer = combineReducers({
    counterSlice: counterSlice.reducer,
    inputSlice: inputSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const basicStoreConfig = configureStore({
    reducer: persistedReducer
})

console.log('basicStoreConfig', basicStoreConfig);


export default basicStoreConfig; 