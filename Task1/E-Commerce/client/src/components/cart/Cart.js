import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/CartSlice';
const Cart = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const cartItems=useSelector((state)=>state.cart.items || []);
  
 
  const handleCheckout=()=>{
    navigate('/checkout');
  }
  const handleGoToHome=()=>{
    navigate('/');
  }
  const handleIncrement=(item)=>{   
    dispatch(addToCart(item));
 }
 const handleDecrement=(item)=>{
   const decrementedItem={...item,operation:'dec'};
      dispatch(addToCart(decrementedItem));
 }
  return (
    <div >
      <div className='mt-10 border-4 border-red-100 w-1/2 shadow-lg mx-auto'>
       {cartItems.length>0?<div>
       <div className="">{cartItems.map((item,index)=>(
        <div className=" bg-slate-300 mb-5 h-72 " key={index}>
          <div className='flex h-72'>
            <div className=' w-1/3  '>
             <img className=' h-5/6 mt-5 ml-2 w-full  border-2 shadow-md' src={item.product.imageUrl} alt={item.product.name}></img>
            </div>
           <div className=" w-2/3 text-center my-auto mx-auto">
             <h3 className="text-2xl font-bold p-2">{item.product.name}</h3>
             <h4 className='p-2'>Price: {item.product.price}</h4>
             <p className='p-2'>{item.product.description}</p>
             <p className='p-2 '><strong>quanitiy:</strong> 
             <button className='w-8 mx-2 bg-white rounded-md hover:bg-slate-50 hover: shadow-lg' onClick={(e)=>handleIncrement(item)}>+</button >
             {item.quantity}
             <button className='w-8 mx-2 bg-white rounded-md hover:bg-slate-50 hover: shadow-lg' onClick={()=>handleDecrement(item)}>-</button></p>
             
          </div>
         </div>
        </div>
        ))}
        </div>
        <div className='w-36 mx-auto mt-6'>
        <button className='w-32 h-8 bg-slate-100 mx-auto m-6 rounded-md hover:bg-slate-200 focus:bg-slate-300 hover:shadow-lg' onClick={handleCheckout}>Proceed To Buy</button>
        </div>
        </div>
        :<div className='h-20'>
          <div className='text-center m-5'>
          <strong>Oops Cart is Empty!</strong>
          </div>
          <div className='w-40 mx-auto'>
          <button className='bg-slate-100 w-28 rounded shadow-md hover:shadow-lg ' onClick={handleGoToHome}>Go To Home</button>
          </div>
          </div>}
      
     
        


      </div>
    </div>
  )
}

export default Cart
