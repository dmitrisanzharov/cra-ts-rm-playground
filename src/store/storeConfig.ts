import { configureStore, combineReducers, createListenerMiddleware  } from '@reduxjs/toolkit';
import countSlice from './countSlice';


// listener stuff / middleware stuff
const listenerMiddleware: any = createListenerMiddleware();

listenerMiddleware.startListening({
    // predicate: (action: any, currentState: any, previousState: any) => true, 
    type: 'countSliceNameVic/addToArrInCount',
    effect: (action: any, listenerApi: any) => {
        console.log('============================');
        console.log('action', action);
        console.log('listenerApi', listenerApi);
        console.log('listenerApi.state', listenerApi.getState());
        console.log('--------------------------------------------------------');
    }
});

// App reducer stuff
const appReducer = (state: any = {}, action: any) => {
    console.log('++++++++++++++++++++++++++++');
    console.log('appReducer_state', state);
    console.log('appReducer_action', action);
    console.log('++++++++++++++++++++++++++++');
    if(action.type === 'persist/PERSIST'){
        return state;
    }
    return state;
}


const storeConfig = configureStore({
    reducer: {
        app: appReducer,
        storeConfigCountSlice: countSlice.reducer
    },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
});

export default storeConfig;