import { configureStore, combineReducers } from "@reduxjs/toolkit";
// persistor
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// slice reducers
import { countSliceReducer } from 'src/store/countSlice';

// api slice reducers
import usersApiSlice from 'src/store/api/usersApi';

const persistConfig = {
    key: 'rootStore',
    version: 1,
    storage: storage
}

const rootReducer = combineReducers({
    countSliceStoreConfigReducer: countSliceReducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeConfig = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }).concat([usersApiSlice.middleware])
});

export default storeConfig;