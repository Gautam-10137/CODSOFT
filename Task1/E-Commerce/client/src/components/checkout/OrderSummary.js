import React, { useDeferredValue } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/CartSlice';
import { addToCart } from '../../redux/CartSlice';
const OrderSummary = ({ onNextStep,updateOrderItems}) => {
  const cartItems=useSelector((state)=>state.cart.items||[]);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleShippingClick=()=>{  
    // Navigate to the next step
    updateOrderItems(cartItems);
    onNextStep();
    
  }
  const handleIncrement=(item)=>{
     dispatch(addToCart(item));
  }
  const handleDecrement=(item)=>{
    const decrementedItem={...item,operation:'dec'};
       dispatch(addToCart(decrementedItem));
  }
  const handleGoToHome=()=>{
    navigate('/');
  }
  const handleCancel=()=>{
    dispatch(clearCart());
    navigate("/");
}
  return (
    <div className=''>
      <div className='bg-slate-200  h-10 flex justify-around text-xl font-medium '>
        <div className="font-bold text-2xl ml-2  mt-1 h-8">
              <Link to="/"></Link>
        </div>
        <div className=' text-slate-600 '>Order Summary </div>
        <div>
          <button className='bg-white w-28 rounded mt-1' onClick={handleCancel} >Cancel</button>
        </div>
      </div>
      <div className="border-4 bg-red-100 mb-5 w-1/2 mx-auto mt-5 shadow-md">

      {cartItems.length>0?
      <div>
      <div className=" " >{cartItems.map((item,index)=>(

        <div className=" bg-slate-200 mb-5 h-72" key={index}>
          <div className='flex h-72'>
            <div className=' w-1/3  '>
             <img className=' h-5/6 mt-5 ml-2 w-full  border-2 shadow-md' src={item.product.imageUrl} alt={item.product.name}></img>
            </div>
            <div className="w-2/3 text-center my-auto ">
             <h3 className="text-2xl font-bold p-2">{item.product.name}</h3>
             <h4 className='p-2'>Price: {item.product.price}</h4>
             <p className='p-2'>{item.product.description}</p>
             <p className='p-2 '><strong>quanitiy selected : </strong> 
             {/* <button className='w-8 mx-2 bg-white rounded-md hover:bg-slate-50 hover: shadow-lg' onClick={(e)=>handleIncrement(item)}>+</button > */}
             {item.quantity}
             {/* <button className='w-8 mx-2 bg-white rounded-md hover:bg-slate-50 hover: shadow-lg' onClick={()=>handleDecrement(item)}>-</button> */}
             </p>
             
            </div>
          </div>
        </div>
        ))}
        </div>
        <div className='w-52 mx-auto m-8 font-medium '>
       <button className='bg-slate-200 w-full h-8 rounded-md hover:shadow-lg' onClick={handleShippingClick}>Add Shipping Information</button>
       </div>
       </div>:
       <div className='h-20'>
       <div className='text-center m-5'>
       <strong>Oops Cart is Empty!</strong>
       </div>
       <div className='w-40 mx-auto'>
       <button className='bg-slate-200 w-28 rounded ' onClick={handleGoToHome}>Go To Home</button>
       </div>
       </div>}
      </div>
      
    </div>
  )
}

export default OrderSummary
