import React from 'react';
import ProductCard from '../CardProduct/ProductCard';
import './offers.scss'
import Watch from './Timer/Timer';

const Offers = () => {

    let URL = 'http://localhost:3000/api/product/offer'
    return (
        <section className='offerSection'>
            <div>
                <h2>Ofertas del mes</h2>
            </div>
            
            <div className='offerContainer'>
                <Watch />
                <div className='offerBox'>
                    <ProductCard url={URL} method={'GET'} />
                </div>
            </div>
        </section>
    );
};

export default Offers;
