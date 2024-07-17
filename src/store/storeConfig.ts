import { configureStore, combineReducers, createListenerMiddleware  } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';

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
    key: 'app',
    version: 1,
    storage: storage
}

const listenerMiddleware = createListenerMiddleware();


listenerMiddleware.startListening({
    // predicate: (action, currentState, previousState) => true, // will listen to ALL
    type: 'countSliceName/incCountByAmount',
    effect: (action: any, listenerApi: any) => {
        console.log('============================');
        console.log('action', action);
        console.log('listenerApi', listenerApi);
        console.log('store state', listenerApi.getState());
        listenerApi.dispatch(countSlice.actions.incCount());
    }
});



const rootReducer: any = combineReducers({
    // app: appReducer,
    countSliceStates: countSlice.reducer, // these are actually STATES from Slices, NOT reducers
    [userApiSlice.reducerPath]: userApiSlice.reducer // apiSlice import is identical, only we use reducer.Pathname for the name, from the slice.
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


const storeConfig: any = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
        serializableCheck: false
      }).concat([userApiSlice.middleware]).prepend(listenerMiddleware.middleware) // here we also need to add: middleware, for the apiSlice ... 
} as any);

export default storeConfig;