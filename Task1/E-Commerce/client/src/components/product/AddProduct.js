import React,{useState} from 'react'

const AddProduct = () => {
    const [product,setProduct]=useState({
         name:'',
         price:0,
         description:'',
         imageUrl:'',
         category:'',
         user:'6593677dc1245f646925b71e'
         
    });
    const categories=["Electronics","Clothing and Fashion","Home and Furniture","Beauty and Personal Care","Books and Stationery","Sports and Outdoors","Toys and Games","Health and Wellness","Automotive","Jewelry and Accessories"]

    const handleInputChange=(e)=>{
          const {name,value}=e.target;
          setProduct({
            ...product,
            [name]:value,
          });

    };

    const handleFormSubmit=async (e)=>{
        e.preventDefault();
       try{
        const response=await fetch('http://127.0.0.1:7000/api/product/add',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        if(response.ok){
            const data=await response.json();
            console.log(data);
        }
        else{
            console.log('Error adding product');
        }
       }
       catch(error){
        console.error("Error :"+error);
       }
    }
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
    <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
            <label className="block text-gray-700">Name:</label>
            <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
        </div>
        <div>
            <label className="block text-gray-700">Price:</label>
            <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
        </div>
        <div>
            <label className="block text-gray-700">Description:</label>
            <textarea
                rows="3"
                name="description"
                value={product.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
        </div>
        <div>
            <label className="block text-gray-700">Image URL:</label>
            <input
                type="text"
                name="imageUrl"
                value={product.imageUrl}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
        </div>
        <div>
            <label className="block text-gray-700">Category:</label>
            <select
                value={product.category}
                onChange={(e) => setProduct({ ...product, category: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md"
            >
                <option value="" disabled>Select a category</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>
        <div className="text-center">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Submit
                    </button>
        </div>
    </form>
</div>
  )
}

export default AddProduct
