/* eslint-disable no-cond-assign */
import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";



export const CartSlice =createSlice({
    name : "Cart",
    initialState : [],
    reducers :{
        AddToCart : (state, action) => {

            const findCart = state.find((product) => product.id === action.payload.id)

            if (findCart) {
                findCart.quantity += 1;
                Swal.fire("Good job!", "Now You updated the quantity of product in the cart!", "success")
            } else {
                const cloneCart = { ...action.payload, quantity: 1 }
                state.push(cloneCart)
                Swal.fire("Excellent Work!", "You add the product in the cart!", "success")
            }
        },

        deleteCart: (state, action) => {

            Swal.fire("Good Job!", "You are deleted the product from the cart!", "success")
            return state.filter((cart) => cart.id !== action.payload.id)
            
        
        },

        clearCart: (state, action) => {
            Swal.fire("Good Job!", "You are cleared the cart!", "success")
            return [];
        },

        increase: (state, action) => {

            const findCart = state.find((product) => product.id === action.payload.id)

            if (findCart) {
                findCart.quantity += 1;
            } else {
                const cloneCart = { ...action.payload, quantity: 1 }
                state.push(cloneCart)
            }
        
        },
        decrease: (state, action) => {

            const findCart = state.find((product) => product.id === action.payload.id)

            if (findCart.quantity > 1) {
                findCart.quantity--;
            }
             else if(findCart.quantity = 1) {
                // const cloneCart = { ...action.payload, quantity: 1 }
                // state.push(cloneCart)
                return state.filter((cart) => cart.id !== action.payload.id)
            }
        
        }
    }
});

export  const {AddToCart , clearCart , increase , decrease , deleteCart} = CartSlice.actions;
export default CartSlice.reducer;
