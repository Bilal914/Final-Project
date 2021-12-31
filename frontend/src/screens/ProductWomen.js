import React, { useEffect, useState, } from 'react';

import Product from '../components/Product';
//for requesting data from backend to frontend

import axios from 'axios';
export default function ProductWomen() {//fetcing data using backend to frontend
  const [products,setProducts]=useState([]);
  useEffect(()=>{
      const fetchData=async()=>{
      const {data}=await axios.get('/api/productswomen');
      setProducts(data);
      }
      fetchData();
  },[]);

  return (
    <div>
      
      
      <div className="row center">
        {
          products.map((product) => (
            <Product key={product._id} product={product}></Product>//extracting component from product
          ))}

      </div>
    </div>
  );
}
