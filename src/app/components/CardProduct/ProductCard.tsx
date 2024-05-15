'use client'
import Image from 'next/image';
import React from 'react'

/* STYLE */
import './productCard.scss';

interface ProductCardProps {
  products: Product[];
}

type Product = {
  [x: string]: any;
  img: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  offer?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  const handleCalculate = (price: any, offer: any) => {
    return price - (price * (offer / 100));
  };


  return (
    <>
      {products && products.length !== 0 ? products.map((item, index) => {
        const priceOffer = item.offer && item.offer !== 0 ? handleCalculate(item.price, item.offer) : null;
        return (
          <div key={index} className='productBox'>
            <div className='productImage'>
              <Image src={item.imageUrl} alt={`image-product${item.title}`} width={200} height={200} />
            </div>
            <div className='productText'>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
            <div className='productBoxAction'>
              {item.offer && item.offer !== 0 ?
                <div className='productPriceOffer'>
                  <span className='productPriceOld'>
                    ${item.price}
                  </span>
                  <span className='productPrice'>
                    ${priceOffer}
                  </span>
                </div>
                :
                <span className='productPrice'>
                  ${item.price}
                </span>
              }
              <div className='productAction'>
                <button>
                  <Image src={'/icons/heart.svg'} alt='iconHeart' width={20} height={20} />
                </button>
                <button>
                  <Image src={'/icons/copi.svg'} alt='iconCopie' width={20} height={20} />
                </button>
                <button>
                  <Image src={'/icons/shopping-cart.svg'} alt='iconCart' width={20} height={20} />
                </button>
              </div>
            </div>
          </div >
        )
      }) : null}
    </>
  )
}

export default ProductCard;

