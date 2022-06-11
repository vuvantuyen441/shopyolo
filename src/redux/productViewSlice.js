import { createSlice } from "@reduxjs/toolkit";


const product = localStorage.getItem('cartItem') !== null ? JSON.parse(localStorage.getItem('cartItem')) : []

export const cartItemsSlice = createSlice({
    name:'cartItems',
    initialState:{
        items:product,
    },
    reducers:{
        addItem:(state,action) => {
            const newItems = action.payload
            const dulicate = state.items.filter(item => item.title === newItems.title && item.color === newItems.color && item.size === newItems.size)
            if(dulicate.length > 0){
                state.items = state.items.filter(item => item.title !== newItems.title && item.color !== newItems.color && item.size !== newItems.size)
                state.items = [...state.items, { 
                    id: dulicate[0].id ,    
                    image01: newItems.image01,
                    title:newItems.title,
                    price:newItems.price,
                    color:newItems.color,
                    size:newItems.size,
                    quantity:newItems.quantity + dulicate[0].quantity
                }]
            } else {
                state.items = [...state.items,{...action.payload,
                id: state.items.length > 0 ? state.items[state.items.length - 1].id + 1 : 1 
                }]
            }
            localStorage.setItem('cartItem',JSON.stringify(state.items.sort((a,b) => a.id - b.id )))
        },
        removeItem: (state,action) => {
            const item = action.payload
            state.items = state.items.filter(e => e.title !== item.title || e.color !== item.color || e.size !== item.size )       
            localStorage.setItem('cartItem',JSON.stringify(state.items.sort((a,b) => a.id - b.id )))
        },
        updateItem: (state,action) => {
            const newItems = action.payload
            const item = state.items.filter(item => item.title === newItems.title && item.color === newItems.color && item.size === newItems.size)
            if(item.length > 0){
                state.items = state.items.filter(item => item.title !== newItems.title || item.color !== newItems.color || item.size !== newItems.size)
                state.items = [...state.items, { 
                    id: item[0].id ,        
                    image01: newItems.image01,
                    title:newItems.title,
                    price:newItems.price,
                    color:newItems.color,
                    size:newItems.size,
                    quantity:newItems.quantity 
                }]
            }
            localStorage.setItem('cartItem',JSON.stringify(state.items.sort((a,b) => a.id - b.id )))
        }
    }
})

export const  {addItem, removeItem, updateItem} = cartItemsSlice.actions
export default cartItemsSlice.reducer