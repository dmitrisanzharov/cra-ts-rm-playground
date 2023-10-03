import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    inputFromStore: ''
}


const inputSlice: any = createSlice({
    name: 'inputSlice',
    initialState: initialState,
    reducers: {
        changeInp: (state, action) => {
            state.inputFromStore = action.payload
        }
    }
})


export default inputSlice;