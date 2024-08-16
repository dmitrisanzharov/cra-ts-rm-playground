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
import expressUsersApi from 'src/store/api/expressUsersApi'

const persistConfig = {
    key: 'rootStore',
    version: 1,
    storage: storage
}

const rootReducer = combineReducers({
    countSliceStoreConfigReducer: countSliceReducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
    [myApiSlice.reducerPath]: myApiSlice.reducer,
    [expressUsersApi.reducerPath]: expressUsersApi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeConfig = configureStore({
    reducer: {
        [expressUsersApi.reducerPath]: expressUsersApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }).concat([/* usersApiSlice.middleware, myApiSlice.middleware, */ expressUsersApi.middleware])
});

export default storeConfig;