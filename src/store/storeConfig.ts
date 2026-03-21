import { configureStore, createListenerMiddleware, combineReducers } from '@reduxjs/toolkit';
// @ts-ignore
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// api slices
import usersApi from './api/usersApi';

// slices
import { counterSlice } from './countSlice';
// console.log('counterSlice: ', counterSlice);


// middleware
const listenerMiddleware = createListenerMiddleware();

const listeners: any = [
    // {
    //     type: 'counterSlice' + '/addToArr',
    //     effect: (action: any, listenerApi: any) => {
    //         console.log('addToArr! ', action);
    //         console.log('listenerApi: ', listenerApi);
    //     }
    // },
    // {
    //     predicate: (action: any, currentState: any, previousState: any) => true,
    //     effect: (action: any, listenerApi: any) => {
    //         console.log('action: ', action);
    //         console.log('currentState: ', listenerApi.getState());
    //     }
    // }
];

listeners.forEach((listener: any) => {
    listenerMiddleware.startListening(listener);
});


// baseReducer

const baseReducer = (state = {}, action: any) => {
    // console.log('baseReducer state: ', state);
    // console.log('baseReducer action: ', action);
    return state;
}




// store config

const rootReducer = combineReducers({
    // apis
    [usersApi.reducerPath]: usersApi.reducer,

    // non api
    app: baseReducer,
    counterInStore: counterSlice.reducer
});
// console.log('rootReducer', rootReducer)

const persistConfig = {
    key: 'myPersistorOne',
    storage: storage,
    // blacklist: ['counterInStore']
}


const persistedReducer = persistReducer(persistConfig, rootReducer);

console.log('usersApi',usersApi)

const storeConfig = configureStore({
    // non apis
    reducer: persistedReducer,
    middleware: (getDefaultMiddleWare: any) => getDefaultMiddleWare({
        serializableCheck: {
            ignoreActions: ['persist/PERSIST']
        }
    }).prepend(listenerMiddleware.middleware).concat([usersApi.middleware])
});

export default storeConfig;
