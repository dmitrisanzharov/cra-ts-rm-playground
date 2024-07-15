import { configureStore, combineReducers  } from '@reduxjs/toolkit';

// persistor
// @ts-ignore
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// reducers
import countSlice from './slices/countSlice';

// persistor setup
const persistConfig = {
    key: 'dmitriPersistorRoot',
    version: 1,
    storage: storage
}

const rootReducer: any = combineReducers({
    countSliceStates: countSlice.reducer // these are actually STATES from Slices, NOT reducers
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


const storeConfig: any = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }),
});

export default storeConfig;