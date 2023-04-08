import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";





export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
})


export const addToCart = createAsyncThunk('cart/add', async (cred) => {

    const result = await fetch('http://localhost:8020/api/cart/add', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
        },
        body: JSON.stringify({
            id: cred.id,
            title: cred.title,
            price: cred.price,
            imageurl: cred.image
        })
    });
})


export const checkIfItemIsInCart = createAsyncThunk('cart/checkIfItemIsInCart', async (id) => {
    const result = await fetch(`http://localhost:8020/api/cart/checkIfItemIsInCart/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
        }
    });
    const json = await result.json();
    return json.msg;
})
export const fetchCart = createAsyncThunk('cart/fetch', async () => {

    const result = await fetch('http://localhost:8020/api/cart/fetch', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
        }
    });
    const json = await result.json();
    return json.cart;
})
export const removeFromCart = createAsyncThunk('cart/remove', async (id) => {

    const result = await fetch(`http://localhost:8020/api/cart/del/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
        }
    });
    const json = await result.json();
    return json.cart;
})


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(isAnyOf(removeFromCart.pending,addToCart.pending, fetchCart.pending), (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addMatcher(isAnyOf(removeFromCart.fulfilled,addToCart.fulfilled, fetchCart.fulfilled), (state, action) => {
                state.data = action.payload
                state.status = STATUSES.IDLE
            })
            .addMatcher(isAnyOf(checkIfItemIsInCart.fulfilled), (state, action) => {
                state.chk = action.payload
                state.status = STATUSES.IDLE
            })
            .addMatcher(isAnyOf(removeFromCart.rejected, addToCart.rejected, fetchCart.rejected), (state, action) => {
                state.status = STATUSES.ERROR
            })
    },
})

export default cartSlice.reducer;

