import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart(state, action){
      const findProduct = state.data.find(item => item.id === action.payload.id);
      if(findProduct){
        const newCart = state.data.map(item => {
          if(item.id === action.payload.id){
            let newQty = item.quantity + action.payload.quantity;
            let newTotalPrice = newQty * item.price;
            return { ...item, quantity: newQty, totalPrice: newTotalPrice };
          } else {
            return item;
          }
        });
        state.data = newCart;
      } else {
        state.data.push(action.payload);
      }
    },
    removeFromCart(state, action){
      const newCart = state.data.filter(item => item.id !== action.payload);
      state.data = newCart;
    },
    clearCart(state){
      state.data = [];
    },
    getCartTotalPrice(state){
      state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
          return cartTotal += cartItem.totalPrice;
      }, 0);
    }
  }
})

export const {addToCart, removeFromCart, getCartTotalPrice, clearCart} = cartSlice.actions;
export default cartSlice.reducer;