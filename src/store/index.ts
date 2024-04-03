import { configureStore, combineReducers } from "@reduxjs/toolkit";
// persistor
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers
import { countSliceReducer } from "./countSlice";

const persistConfig = {
	key: "userData",
	storage: storage,
};

const rootReducer = combineReducers({
	countSliceState: countSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeConfig = configureStore({
	reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }),
});

export default storeConfig;
