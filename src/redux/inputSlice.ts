import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    inputFromStore: ''
}

const inputSlice = createSlice({
    name: 'Input Slice',
    initialState: initialState,
    reducers: {
        handleInputChange: (state, action) => {
            state.inputFromStore = action.payload;
        }
    }
})

// console.log('inputSlice', inputSlice);

export default inputSlice;