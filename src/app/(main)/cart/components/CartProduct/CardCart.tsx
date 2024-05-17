'use client'

import React, { useContext, useState } from 'react'
import { CartContext } from '@/context/CartContext'

import './cardCart.scss';
import Image from 'next/image';

const CardCart = () => {
  const cartContext = useContext<any>(CartContext);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({}); if (!cartContext) {
    return <div>No existe cart context</div>;
  }
  const { cart, removeFromCart } = cartContext;
  if (cart.length === 0) {
    return <div>El carrito está vacío</div>;
  }

  const product = cart;

  const handleCalculate = (price: number, offer: number) => {
    return price - (price * (offer / 100));
  };

  const handleChangeAmount = (productId: string, stock: number, operation: string) => {
    setQuantities((prevQuantities) => {
      const currentAmount = prevQuantities[productId] || 1;
      let newAmount = currentAmount;

      switch (operation) {
        case 'increment':
          newAmount = currentAmount < stock ? currentAmount + 1 : stock;
          break;
        case 'decrement':
          newAmount = currentAmount > 1 ? currentAmount - 1 : 1;
          break;
        default:
          break;
      }
      return {
        ...prevQuantities,
        [productId]: newAmount
      };
    });
  }

  return (
    <>
      {product ?
        product?.map((product: any, index:number) => {
          const productAmount = quantities[product.id] || 1;
          return (
          <div className='cardContainer' key={index}>
            <div className='imageBox'>
              <div className='image'>
                <Image src={product.image} alt='imgProduct' width={65} height={65} />
              </div>
              <div className='datos'>
                <div className='infoText'>
                  <p>{product.name}</p>
                  <span> {product.category}</span>
                </div>
                <div className='actionProduct'>
                  <button onClick={() => {
                    removeFromCart(product.id)
                  }}>
                    Eliminar
                  </button>
                  <button> {/* FALTA FUNCION */}
                    Guardar
                  </button>
                </div>
              </div>
            </div>
            <div className='boxAmount'>
              <button onClick={() => handleChangeAmount(product.id, product.stock, 'decrement')}>
                -
              </button>
              <span>{productAmount}</span>
              <button onClick={() => handleChangeAmount(product.id, product.stock, 'increment')}>
                +
              </button>
            </div>
            <div className='boxDataPrice'>
              {product.offer ?
                <>
                  <div className='dataPriceOffer'>
                    <span className='offer'>
                      -{product.offer}%
                    </span>
                    <span className='oldPrice'>
                      ${product.price}
                    </span>
                  </div>
                  <span className='dataPrice'>${handleCalculate(product.price, product.offer)}</span>
                </>
                :
                <span className='dataPrice'>${product.price}</span>
              }

            </div>
          </div>
          )
        })
        : null}


    </>
  )
}

export default CardCart