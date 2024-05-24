import React from 'react';
import ProductCard from '../CardProduct/ProductCard';
import './allProduct.scss';
import Filter from './filter/Filter';

const AllProducts = () => {
  
    let URL = 'http://localhost:3000/api/product'
    return (
        <section className='allProducts-section'>
            <div>
                <h2>Todos los productos</h2>
            </div>
            <Filter/>
            <div className='box-products'>
                <ProductCard method={'GET'} url={URL} />
            </div>
        </section>
    );
}

export default AllProducts;
