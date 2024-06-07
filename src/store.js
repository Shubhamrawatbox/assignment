import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './redux/features/counter/counterSlice.js'
export const store=configureStore({
    reducer:{
        pageValue:counterReducer,
    }
})