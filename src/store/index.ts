import { configureStore, combineReducers } from "@reduxjs/toolkit";
// persistor
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers
import { countSliceReducer } from "./countSlice";

// api reducers
import usersApiSlice from 'src/store/api/usersApiSlice';
console.log("usersApiSlice: ", usersApiSlice);

const persistConfig = {
	key: "userData",
	storage: storage,
};

const rootReducer = combineReducers({
	countSliceState: countSliceReducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeConfig = configureStore({
	reducer: persistedReducer,
    middleware: ( getDefaultMiddleware ) => {
        return getDefaultMiddleware({
            serializableCheck: false
          }).concat([usersApiSlice.middleware]);
    }
});

export default storeConfig;
