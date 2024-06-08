import {createSlice} from '@reduxjs/toolkit'

const cartSlice= createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addToCart: (state,action)=>{
            const {product,operation}=action.payload;
            const existingItemIndex=state.items.length>0?state.items.findIndex(item=>item.product._id===product._id):-1;
            if(operation=='dec'){
                if(state.items[existingItemIndex].quantity==1){
                   state.items=state.items.filter((item)=>item.product._id!=product._id);
                }
                else{
                    state.items[existingItemIndex].quantity-=1;
                }
            }
            else if(existingItemIndex!=-1 ){
                state.items[existingItemIndex].quantity+=1;
            }
            else{
                state.items.push({
                    product,
                    quantity:1,
                });

            }
            
            
        },
        clearCart:(state,action)=>{
            state.items=[];
        }
    },
});

export const {addToCart}=cartSlice.actions;
export const {clearCart}=cartSlice.actions;

export default cartSlice.reducer;