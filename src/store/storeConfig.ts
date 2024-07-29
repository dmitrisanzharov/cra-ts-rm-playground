import { configureStore, combineReducers } from "@reduxjs/toolkit";
// persistor
// import storage from 'redux-persist/lib/storage'; // localStorage
import storage from 'redux-persist/lib/storage/session'; // sessionStorage
import { persistReducer } from 'redux-persist';

// slice reducers
import { countSliceReducer } from 'src/store/countSlice';

// api slice reducers
import usersApiSlice from 'src/store/api/usersApi';
import myApiSlice from 'src/store/api/myApi';

const persistConfig = {
    key: 'rootStore',
    version: 1,
    storage: storage
}

const rootReducer = combineReducers({
    countSliceStoreConfigReducer: countSliceReducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
    [myApiSlice.reducerPath]: myApiSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeConfig = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }).concat([usersApiSlice.middleware, myApiSlice.middleware])
});

export default storeConfig;