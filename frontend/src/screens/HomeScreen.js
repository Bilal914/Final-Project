import React, { useEffect, useState } from 'react';

import Product from '../components/Product';
import axios from 'axios'//for requesting data from backend to frontend
export default function HomeScreen() {//fetcing data using backend to frontend
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchdata();

  }, [])
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
