import { configureStore } from '@reduxjs/toolkit';
// reducers
import countSlice from './countSlice';


const storeConfig: any = configureStore({
    reducer: {
        countSliceStoreObj: countSlice.reducer
    }
})


export default storeConfig;