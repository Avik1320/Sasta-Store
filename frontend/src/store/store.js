import { combineReducers, configureStore } from "@reduxjs/toolkit";
import buyerReducers from "./buyersSlice";
import productReducers from './productSlice';
import userreducer from "./userSlice";
import cartReducer from "./cartSlice";



const store = configureStore({
    reducer: {
        product: productReducers,
        buyer: buyerReducers,
        user: userreducer,
        cart: cartReducer
        
    }
})

export default store;