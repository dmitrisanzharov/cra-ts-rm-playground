import { configureStore } from "@reduxjs/toolkit";
// empty api
import { emptyApi } from './api/emptyApi';


const storeConfig = configureStore({
    reducer: {
        [emptyApi.reducerPath]: emptyApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(emptyApi.middleware),
});


export default storeConfig;