import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../product/ProductCard';
import axios from 'axios';
import Cart from '../cart/Cart';
const CategoryProducts = () => {
    const {categoryId}=useParams();
    const [products,setProducts]=useState([]);
   
    useEffect(()=>{
        const fetchProducts=async()=>{
           const response=await axios.get(`http://127.0.0.1:7000/api/product/category/${categoryId}`);
        //    const data= await response.json();
           setProducts(response.data);

        }
        fetchProducts();
    },[])

    return (
    <div>
        <Cart/>
    <div className='product-list'>
        {products.map((product)=>(
            <ProductCard key={product._id} product={product} ></ProductCard>
        ))}
      
    </div>
    </div>
  )
}

export default CategoryProducts
