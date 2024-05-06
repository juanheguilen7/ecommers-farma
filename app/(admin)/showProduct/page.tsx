'use client'

import React, { useEffect, useState } from 'react'

const ShowProduct = () => {
  const [arrProduct, setArrProduct] = useState<any[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch('/api/product', {
          method: 'GET'
        });
        const data = await response.json();
        setArrProduct(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    dataFetch();
  }, []);

  

  return (
    <div>
      {arrProduct?.length > 0 ? (
        arrProduct.map(product => (
          <div key={product._id}>
            <h3> {product.name}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <span>{product.offer}</span>
            <span>{product.stock}</span>
          </div>
        ))
      ) : (
        <span>No hay productos</span>
      )}
    </div>
  )
}

export default ShowProduct