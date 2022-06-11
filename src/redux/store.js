import { configureStore } from "@reduxjs/toolkit"; 

import cartItemsReducer from './productViewSlice';

export const store = configureStore({
    reducer:{
        cartItems:cartItemsReducer,
    }
})