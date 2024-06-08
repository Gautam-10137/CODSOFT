import {createSlice} from '@reduxjs/toolkit';

const orderSlice=createSlice({
    name:'order',
    initialState:{
        orders:[]
    },
    reducers:{
       addOrders: (state,action)=>{
                state.orders.push(action.payload);
       }

    }

})

export const {addOrders}=orderSlice.actions;

export default orderSlice.reducer;