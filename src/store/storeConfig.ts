import { configureStore, combineReducers, createListenerMiddleware  } from '@reduxjs/toolkit';
// @ts-ignore
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// standard slices
import countSlice from './countSlice';

// api slices
import usersApiSlice from './api/usersApiSlice'

// persistor

const persistConfig = {
    key: 'myPersistorKeyForLocalStorage',
    version: 1,
    storage: storage,
    blacklist: [usersApiSlice.reducerPath]
 }
 


// listener stuff / middleware stuff
const listenerMiddleware: any = createListenerMiddleware();

listenerMiddleware.startListening({
    // predicate: (action: any, currentState: any, previousState: any) => true, 
    type: 'countSliceNameVic/addToArrInCount',
    effect: (action: any, listenerApi: any) => {
    }
});

// App reducer stuff
const appReducer = (state: any = {}, action: any) => {
    if(action.type === 'persist/PERSIST'){
        return state;
    }
    return state;
}

const rootReducer = combineReducers({
    app: appReducer,
    storeConfigCountSlice: countSlice.reducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);



const storeConfig = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST']
        }
    }).prepend(listenerMiddleware.middleware).concat([usersApiSlice.middleware])
})
export default storeConfig;