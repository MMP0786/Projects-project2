import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItem: [],
    subTotal: 0,
    shippin: 0,
    tax: 0,
    total: 0,
  },
  {
    addToCart:(state, action)=>{
        const item = action.payload;
        const existItem = state.cartItem.find(i=> i.id === item.id)

        if(existItem){
            state.cartItem.forEach(i=>{
                if(i.id=== item.id){
                    i.qty +=1;
                }
            })

        }else{
            state.cartItem.push(item)
        }
    },

    decreament: (state, action)=>{
        const item = state.cartItem.find((i)=>i.id === action.payload);
        if(item.qty>1){
            state.cartItem.forEach(i=>{
                if(i.id=== item.id){
                    i.qty -=1;
                }
            })

        }
    },

    delete: (state, action)=>{
        state.cartItem=  state.cartItem.filter((i)=>i.id !== action.payload);
    },

    calculatePrice: (state)=>{
        let sum =0;
        state.cartItem.forEach(i=> sum+= (i.price * i.qty));
        state.subTotal = sum;
        state.shippin = state.subTotal >1000 ?0: 200;
        state.tax = +(state.subTotal*0.18).toFixed()
        state.total = state.subTotal + state.tax + state.shippin;
    }
  }
);
