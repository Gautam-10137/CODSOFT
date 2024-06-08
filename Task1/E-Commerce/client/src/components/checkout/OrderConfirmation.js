import React,{useState,useEffect} from 'react'
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { clearCart } from '../../redux/CartSlice';
import { useDispatch } from 'react-redux';
const OrderConfirmation = ({orderData}) => {
   const dispatch=useDispatch();
   const navigate=useNavigate();
   const [items,setItems]=useState(orderData.items);
   const [shippingAddress,setShippingInfo]=useState(orderData.shippingAddress);
  //  const [paymentDetails,setPaymentDetails]=useState(orderData.paymentDetails);
  const [amount,setAmount]=useState(0);
  const [newOrderId,setNewOrderId]=useState('');
  const [totalItems,setTotalItems]=useState(0);
  
   useEffect(()=>{
    let totalAmount=0;
    let totalItems=0
    for(let item of orderData.items){
       totalAmount+=item.product.price;   
       totalItems+=item.quantity;
    }
    setAmount(totalAmount);
    setTotalItems(totalItems);
    const token=localStorage.getItem('token');

    const getUserIdFromToken=(token)=>{
      try{ 
      const decode=jwtDecode(token);
      return decode.id;
      }
      catch(error){
        console.error('Error decoding token:'+error);
        return null;
      }
    }
    orderData.userId=getUserIdFromToken(token);
    console.log("orderData "+orderData);
    const createOrder=async ()=>{
      const response=await axios.post('http://127.0.0.1:7000/api/order/create-order',{orderData},{
            headers:{
              'Content-type':'application/json'
            }
          });
          // const newOrder=await response.json();
          
          setNewOrderId(response.data._id);

    }
    createOrder();
   },[]);
   
   const handleConfirmOrder=async()=>{
    try{
 
        
          const {data:{order}}=await axios.post('http://127.0.0.1:7000/api/payment/create-order',{amount,newOrderId},{
            headers:{
              'Content-type':'application/json'
            }
          })
          const {data:{key}}=await axios.get('http://127.0.0.1:7000/api/get-key');
          console.log(key);
          
          const options={
            key: key, // Enter the Key ID generated from the Dashboard
            amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "CartEase", //your business name
            description: "Test Transaction",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOCFPRI7w3dKX-GSwBL5-KVJqEGn0P4Pc6w&usqp=CAU",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: `http://127.0.0.1:7000/api/payment-success`,
            prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                name: "Gautam Pahwa", //your customer's name
                email: "gautampahwa47@gmail.com",
                contact: "8689014713" //Provide the customer's phone number for better conversion rates 
            },
            notes: {
                address: "Razorpay Corporate Office",
               
            },
             theme: {
            color: "#3399cc"
            }
          }
        const razor=new window.Razorpay(options);
        razor.open();
              
    }
    catch(error){
         console.log(error);
    }
   }

  const handleCancel=()=>{
      dispatch(clearCart());
      navigate("/");
  }
   console.log("orderData",orderData);
  return (
    <div>
      <div className='bg-slate-200  h-10 flex justify-around text-xl font-medium '>
        <div className="font-bold text-2xl    rounded   ml-2  mt-1 h-8">
              <Link to="/"></Link>
        </div>
        <div className=' text-slate-600 '>Checkout</div>
        <div>
          <button className='bg-white w-28 rounded mt-1' onClick={handleCancel} >Cancel</button>
        </div>
      </div>
      
       
      <div className=" w-1/2 mx-auto border-4 border-red-100 mt-5 shadow-md"> 
      <div className="text-center text-xl font-medium"> Order Summary</div>
     
        {items.length>0?
        items.map((item,index)=>(
        <div className=' flex h-72 bg-slate-300 my-5' key={index}>
             <div className=' w-1/3'>
             <img className=' h-5/6 mt-5 ml-2 w-full  border-2 shadow-md' src={item.product.imageUrl} alt={item.product.name}></img>
            </div>
            <div className='w-2/3 text-center my-auto'>
             <h3 className='text-2xl font-bold my-2 p-2'>{item.product.name}</h3>
             <h4 className='my-2 p-1' ><strong>Price:</strong> {item.product.price}</h4>
             <p className='p-1'>{item.product.description}</p>
             <p><strong>quanitity: </strong> {item.quantity}</p>
            </div>
        </div>
        )):'No Item in Cart!!'}
      </div>

      <div className='w-1/2 mx-auto my-5 border-4 border-red-100 shadow-md'>
        <div className="text-center text-xl font-medium">
        Shipping Information:
        </div>
        <div className='bg-slate-300 my-3'>
        <p className='p-2'><strong>Fullname:</strong> {shippingAddress.fullName}</p>
        <p className='p-2'><strong>Address Line 1:</strong> {shippingAddress.addressLine1}</p>
        <p className='p-2'><strong>Address Line 2:</strong> {shippingAddress.addressLine2}</p>
        <p className='p-2'><strong>City:</strong> {shippingAddress.city}</p>
        <p className='p-2'><strong>State:</strong> {shippingAddress.state}</p>
        <p className='p-2'><strong>PostalCode:</strong> {shippingAddress.postalCode}</p>
        <p className='p-2'><strong>Country:</strong> {shippingAddress.country}</p>

        </div>
      </div>

      <div className='text-center w-1/2 mx-auto border-4 border-red-100 bg-slate-300 mb-20 shadow-md' >
        <div>
          <p className='p-1'><strong>Subtotal Items: </strong>{totalItems}</p>
          <p className='p-1'><strong>Total Amount: </strong>{amount}</p>
        </div>
        <div className='p-2 '>
          <button className='bg-white w-20 hover:bg-gray-400 rounded-md hover:shadow-md' onClick={handleConfirmOrder}>Checkout</button>
        </div>
      </div>
      
      
    </div>
  )
}

export default OrderConfirmation
