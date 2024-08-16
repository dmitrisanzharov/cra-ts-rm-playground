import { configureStore, combineReducers } from "@reduxjs/toolkit";
// persistor
import storage from 'redux-persist/lib/storage'; // localStorage
// import storage from 'redux-persist/lib/storage/session'; // sessionStorage
import { persistReducer, persistStore } from 'redux-persist';

// slice reducers
import { countSliceReducer } from 'src/store/countSlice';

// api slice reducers
import usersApiSlice from 'src/store/api/usersApi';
import myApiSlice from 'src/store/api/myApi';
import expressUsersApi from 'src/store/api/expressUsersApi'
import youtubeUsersApi from 'src/store/api/youtubeUsersApi'

const persistConfig = {
    key: 'rootStore',
    version: 1,
    storage: storage,
    blacklist: [youtubeUsersApi.reducerPath]
}

const rootReducer = combineReducers({
    countSliceStoreConfigReducer: countSliceReducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
    [myApiSlice.reducerPath]: myApiSlice.reducer,
    [expressUsersApi.reducerPath]: expressUsersApi.reducer,
    [youtubeUsersApi.reducerPath]: youtubeUsersApi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeConfig = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }).concat([usersApiSlice.middleware, myApiSlice.middleware, expressUsersApi.middleware, youtubeUsersApi.middleware])
});

// const persistor = persistStore(storeConfig);

// persistor.subscribe(() => {
//   if (persistor.getState().bootstrapped) {
//     // Manually invalidate the query cache
//     storeConfig.dispatch(youtubeUsersApi.util.invalidateTags(['MyMagicTag']));
//   }
// });

export default storeConfig;

