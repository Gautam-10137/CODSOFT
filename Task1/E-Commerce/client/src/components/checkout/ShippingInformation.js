import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { clearCart } from '../../redux/CartSlice';
import { useDispatch } from 'react-redux';
const ShippingInformation = ({onNextStep,onPrevStep,updateShippingAddress}) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const [shippingAddress,setShippingAddress]=useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  })

  const handleInputChange=(e)=>{
       const {name,value}=e.target;
       setShippingAddress({
        ...shippingAddress,
        [name]:value
       });
  }

  const handleOrderSummary=()=>{
    onPrevStep();
    navigate('/checkout');
  }
  const handleConfirmOrder=(e)=>{
    e.preventDefault();
    updateShippingAddress(shippingAddress);
    onNextStep();
    // navigate('/checkout');
  }

  const handleCancel=()=>{
    dispatch(clearCart());
    navigate("/");
}
  return (
   <div className='border-4 border-red-100'>
     <div className='bg-slate-100  h-10 flex justify-around text-xl font-medium '>
        <div className="font-bold text-2xl border-2  border-red-200 rounded  bg-red-100 ml-2  mt-1 h-8">
              <Link to="/">CartEase</Link>
        </div>
        <div className=' text-slate-600 '>Shipping Information</div>
        <div>
          <button className='bg-white w-28 rounded mt-1' onClick={handleCancel} >Cancel</button>
        </div>
      </div>
      <div className='border-4 bg-red-100 w-1/2 mx-auto my-10 shadow-md'>
        <div className=' mx-auto my-5 w-4/5'>
    <form 
     
      // onSubmit={(e)=>{handlePaymentDetails(e)}}
      >
      <div className='mb-4'>
        <label className='block text-gray-500 text-lg'>FullName:</label>
        <input
          name='fullName'
          type='text'
          value={shippingAddress.fullName}
          onChange={(e)=>handleInputChange(e)}
          className='w-full border  rounded-md p-2 mt-1 '
          required
        ></input>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-500 text-lg'>AddressLine1:</label>
        <input
          name='addressLine1'
          type='text'
          value={shippingAddress.addressLine1}
          onChange={(e)=>handleInputChange(e)}
          className='w-full border  rounded-md p-2 mt-1 '
          required
        ></input>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-500 text-lg'>AddressLine2:</label>
        <input
          name='addressLine2'
          type='text'
          value={shippingAddress.addressLine2}
          onChange={(e)=>handleInputChange(e)}
          className='w-full border  rounded-md p-2 mt-1 '
          required
        ></input>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-500 text-lg'>City:</label>
        <input
          name='city'
          type='text'
          value={shippingAddress.city}
          onChange={(e)=>handleInputChange(e)}
          className='w-full border  rounded-md p-2 mt-1 '
          required
        ></input>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-500 text-lg'>State:</label>
        <input
          name='state'
          type='text'
          value={shippingAddress.state}
          onChange={(e)=>handleInputChange(e)}
          className='w-full border  rounded-md p-2 mt-1 '
          required
        ></input>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-500 text-lg'>Postal-Code:</label>
        <input
          name='postalCode'
          type='text'
          value={shippingAddress.postalCode}
          onChange={(e)=>handleInputChange(e)}
          className='w-full border  rounded-md p-2 mt-1 '
          required
        ></input>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-500 text-lg'>Country:</label>
        <input
          name='country'
          type='text'
          value={shippingAddress.country}
          onChange={(e)=>handleInputChange(e)}
          className='w-full border  rounded-md p-2 mt-1 '
          required
        ></input>
      </div>
      <div>
        <button className='w-40 h-8 rounded-md bg-slate-200 mx-2 font-medium' onClick={handleOrderSummary}>{"<- Order Summary"}</button>
        <button className='w-40 h-8 rounded-md bg-slate-200 mx-2 font-medium' type="submit" onClick={handleConfirmOrder}>{"Confirm Order ->"}</button>
      </div>
      </form >
      </div>
      </div>
      
    </div>
  )
}

export default ShippingInformation
