import React from 'react'
import ProductCard from './ProductCard';

/* Styles */
import '../styles/offers.scss'
let producto = [
    {
        img: '/shampoo.jpg',
        title: 'Shampoo Pantene',
        desc: 'Shampoo 2 en 1 Pantene, multi accion',
        price: 3500,
        offer: '2x1'
    },
    {
        img: '/colgateDeEsta.jpg',
        title: 'Pasta dental',
        desc: 'Colgate proteccion total por 12 horas',
        price: 1500,
        offer: '2x1'
    }, {
        img: '',
        title: 'titulo3',
        desc: 'el producto modelo numero 3',
        price: 1500,
        offer: '2x1'
    },
]
const Offers = () => {

    return (
        <section className='offers-section' >
            <div>
                <h2>Ofertas del mes</h2>
            </div>
            <div className='offers-container'>
                <ProductCard products={producto} />
            </div>
        </section>
    )
}

export default Offers;