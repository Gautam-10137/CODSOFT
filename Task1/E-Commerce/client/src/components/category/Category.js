import React from 'react'
import { Link } from 'react-router-dom'
const Category = () => {
    const categories=["Electronics","Clothing and Fashion","Home and Furniture","Beauty and Personal Care","Books and Stationery","Sports and Outdoors","Toys and Games","Health and Wellness","Automotive","Jewelry and Accessories"]
 
  return (
    <div>
      {categories.map((category ,index)=>(
       <div key={index}>
        <Link to={`/product/category/${category}`}>{category}</Link>
       </div>
      ))}
    </div>
  )
}

export default Category
