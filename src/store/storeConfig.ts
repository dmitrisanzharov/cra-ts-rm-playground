import { configureStore, combineReducers  } from '@reduxjs/toolkit';

// persistor
// @ts-ignore
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// reducers
import countSlice from './slices/countSlice';

// apiReducers
// @ts-ignore
import userApiSlice from './api/usersApi';

// persistor setup
const persistConfig = {
    key: 'dmitriPersistorRoot',
    version: 1,
    storage: storage
}

const rootReducer: any = combineReducers({
    countSliceStates: countSlice.reducer, // these are actually STATES from Slices, NOT reducers
    [userApiSlice.reducerPath]: userApiSlice.reducer // apiSlice import is identical, only we use reducer.Pathname for the name, from the slice.
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


const storeConfig: any = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
        serializableCheck: false
      }).concat([userApiSlice.middleware]), // here we also need to add: middleware, for the apiSlice ... 
} as any);

export default storeConfig;