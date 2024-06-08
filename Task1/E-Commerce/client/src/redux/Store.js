import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import productReducer from './productSlice';
import orderReducer from './orderSlice'
const store= configureStore({
    reducer:{
        cart:cartReducer,
        order:orderReducer,
        product:productReducer
        // other reducers
    },
});

export default store;
