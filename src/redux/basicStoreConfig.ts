import { configureStore, combineReducers } from '@reduxjs/toolkit';

// persistor
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// slices
import countSlice from 'src/redux/countSlice'; 
import inputSlice from 'src/redux/inputSlice';


const persistConfigOne = {
    key: 'youtubeKey',
    storage
};

const myCombinedReducer = combineReducers({
    shakeAndBake: countSlice.reducer,
    inputThingy: inputSlice.reducer
});

const localStorageReducer = persistReducer(persistConfigOne, myCombinedReducer); 


const basicStoreConfig: any = configureStore({
    reducer: localStorageReducer
});

export default basicStoreConfig; 
