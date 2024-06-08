import React, { useEffect } from 'react';
import ProductList from '../product/ProductList';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-blue-600 font-bold text-center mt-8 mb-4">Welcome to CartEase</h1>
      <ProductList />
    </div>
  );
};

export default Home;
