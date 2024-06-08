import React, {useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/CartSlice';
import Cart from '../cart/Cart';
const ProductDetail = () => {
    const dispatch=useDispatch();
    const {productID}=useParams();
 
    const [product,setProduct]=useState({});
//         _id:'',
//         name:'',
//         price:0,
//         description:'',
//         imageUrl:'',
//         user:''
//    });
   let productImage = "";

   useEffect(()=>{
    const fetchProduct= async()=>{
        try{
            const response=await fetch(`http://127.0.0.1:7000/api/product/${productID}`,{
                method:'GET',
                headers:{
                    'Content-type':'application/json'
                }
            });
            const data=await response.json();
            setProduct(data);
            console.log(data);
           productImage = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D";

        }
        catch(error){
            console.log("Error fetching product data :"+error);
        }
    }
    fetchProduct();
   },[]);
   
   const handleAddToCart=()=>{
     console.log({product});
     dispatch(addToCart({product}));
    

   }
  return (
    <div className="border-4 border-red-100 bg-slate-300 w-1/2 m-auto flex mt-8">
        <div className=' w-1/2'>
        <img src={product.imageUrl} alt={product.name} ></img>
        </div>
        <div className=" m-auto text-center">
        <h3 className="py-3 text-3xl font-bold">{product.name}</h3>
        <p className='py-3'>{product.description}</p>
        <p className='text-xl'><strong>Price: </strong>{product.price}</p>
    
        <button className='bg-white m-5 w-28 rounded-md h-8 text-xl  hover:shadow-xl hover:bg-slate-200 focus:bg-slate-300' onClick={handleAddToCart}>Add to Cart</button>
        
        <Link to="/cart"><button className='bg-white m-5 w-16 rounded-md h-8 text-xl hover:shadow-xl hover:bg-slate-200 focus:bg-slate-300'>Cart</button></Link>
        </div>
        {/* user reviews */}
    </div>

  )
}

export default ProductDetail
