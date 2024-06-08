import React,{ useEffect, useState }  from 'react'
import ProductCard from './ProductCard';
import SearchBar from '../search/SearchBar';
import { useSelector } from 'react-redux';

const ProductList = () => {
   const [products,setProducts]=useState([]);
   const [filteredProducts,setFilteredProducts]=useState([]);
   const [currentPage,setCurrentPage]=useState(1);
   const [productsPerPage]=useState(10);
   const [searchTerm,setSearchTerm]=useState('');
   
   var productItems=useSelector((state)=>state.product.items|| []);

   console.log(products);
  //  Fetching products from backend
  useEffect(()=>{
      setProducts(productItems);
  },[])

  useEffect(()=>{
    const filteredProduct=searchTerm!==''?productItems.filter((product)=>product.name.toLowerCase().includes(searchTerm.toLowerCase())):productItems;
    setProducts(filteredProduct);

  },[searchTerm,products,productItems]);

  const showAllProducts=()=>{
    setProducts(productItems);
    setSearchTerm('');
  }

  const indexOfLastProduct=currentPage*productsPerPage;
  const indexOfFirstProduct=indexOfLastProduct-productsPerPage;
  const currentProducts=products.slice(indexOfFirstProduct,indexOfLastProduct);
 

  const handlePageChange=(pageNumber)=>{
    setCurrentPage(pageNumber);
  }
  const renderPaginationControls=()=>{
    const pageNumbers=Math.ceil(products.length/productsPerPage);

    return (
      <div className='pagination '> 
        {
         Array.from({ length: pageNumbers }).map((_, index) => index + 1).map((pageNumber) => (
           <span
            key={pageNumber}
            className={`page-number${currentPage === pageNumber ? 'active' : ''}`}
           onClick={() => handlePageChange(pageNumber)}
           >
           {pageNumber}
          </span>
         ))
        }
      </div>
    )
  }
  
 {if(products.length==0){
  return <div>...Loading Products</div>
 }}
  return (
    <div className="bg-gray-100 mt-5">
      <button className='text-xl bg-slate-300 w-fit rounded h-8 border-2 border-red-200 mx-2 my-2 shadow-md hover:shadow-lg' onClick={showAllProducts}>All Products</button>
      <div className='text-center pt-2'>
        <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ml-8'>
        {currentProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {renderPaginationControls()}
    </div>
  );
  
 }

export default ProductList;
