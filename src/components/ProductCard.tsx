'use client'
import Image from 'next/image';
import React from 'react'

/* STYLE */
import '@/styles/productCard.scss';

interface ProductCardProps {
  products: Product[];
}

type Product = {
  img: string;
  imageUrl: string;
  title: string;
  desc: string;
  price: number;
  offer?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {

  return (
    <>
      {products && products.length !== 0 ? products.map((item, index) => {
        return (
          <div key={index} className='product-box'>
            <div className='visual-box'>
              <Image src={`${item.imageUrl}`} alt='imagen producto' width={150} height={150} />
              <button className='btnAddToList' onClick={() => { }}>
                <Image src={'/icons/heart.svg'} alt='svg corazon guardar carrito' width={25} height={25} />
              </button>
            </div>
            <div className='info-box'>
              <span>{item.title}</span>
              <p>{item.desc}</p>
            </div>
            <div className='price-box'>
              <span>${item.price}</span>
              <p>{item.offer}</p>
            </div>
            <button type='submit' className='btnAddToCart'>
              <Image src={'/icons/shopping-cart.svg'} width={20} height={20} alt='svg carrito' />
              <span>Agregar</span>
            </button>
          </div>
        )
      }) : null}
    </>
  )
}

export default ProductCard;

