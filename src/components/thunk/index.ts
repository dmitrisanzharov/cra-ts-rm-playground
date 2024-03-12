import { configureStore } from '@reduxjs/toolkit';
import {vehiclesSliceReducerInitialState} from 'src/components/thunk/vehiclesSliceWithThunk';

const configStore = configureStore({
    reducer: {
        vehiclesSliceState: vehiclesSliceReducerInitialState
    }
});

export default configStore;