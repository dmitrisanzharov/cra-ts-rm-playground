import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    list: []
}


const listArraySlice = createSlice({
    name: 'listArraySlice'
} as any)