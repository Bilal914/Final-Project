import React, { useEffect, } from 'react';

import Product from '../components/Product';
//for requesting data from backend to frontend
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
export default function HomeScreen() {//fetcing data using backend to frontend
  const dispatch= useDispatch();
  const productList= useSelector((state) => state.productList);
  const {loading,error,products}=productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch])
  return (
    <div>
      
      
      <div className="row center">
        {
         products && products.map((product) => (
            <Product key={product._id} product={product}></Product>//extracting component from product
          ))}

      </div>
    </div>
  );
}
