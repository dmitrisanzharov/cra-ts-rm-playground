import { configureStore, createListenerMiddleware, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// reducers
import countSlice from "./countSlice";

// query slices
import generalApiSlice from './api/generalApiSlice';
import postsApiSlice from './api/postsApiSlice';


const persistConfig: any = {
	key: "myPersistorKey",
	storage: storage
};

const rootReducer = combineReducers({
	countSliceStoreObj: countSlice.reducer,
    [generalApiSlice.reducerPath]: generalApiSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeConfig: any = configureStore({
	reducer: {
		countSliceStoreObj: countSlice.reducer,
		[generalApiSlice.reducerPath]: generalApiSlice.reducer,
    [postsApiSlice.reducerPath]: postsApiSlice.reducer
	},
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
        serializableCheck: {
          // Ignore actions from redux-persist
          ignoredActions: ['persist/PERSIST']
        },
      }).concat([generalApiSlice.middleware, postsApiSlice.middleware]),
});

export default storeConfig;
