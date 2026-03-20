import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';

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

const storeConfig = configureStore({
    reducer: {
        app: baseReducer,
        counterInStore: counterSlice.reducer
    },
    middleware: (getDefaultMiddleWare: any) => getDefaultMiddleWare().prepend(listenerMiddleware.middleware)
});

export default storeConfig;
