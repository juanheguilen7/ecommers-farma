'use client'

import React, { useContext, useState } from 'react';
import { CartContext } from '@/context/CartContext';
import './cardCart.scss';
import Image from 'next/image';

const CardCart = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    return <div>No existe cart context</div>;
  }
  const { cart, removeFromCart, updateQuantity } = cartContext;

  if (cart.length === 0) {
    return <div>El carrito está vacío</div>;
  }

  const handleCalculate = (price: number, offer: number) => {
    return price - (price * (offer / 100));
  };

  const handleChangeAmount = (productId: number, stock: number, operation: string) => {
    const product = cart.find(p => p.id === productId);
    if (!product) return;

    let newAmount = product.cantidad;

    switch (operation) {
      case 'increment':
        newAmount = product.cantidad < stock ? product.cantidad + 1 : stock;
        break;
      case 'decrement':
        newAmount = product.cantidad > 1 ? product.cantidad - 1 : 1;
        break;
      default:
        break;
    }

    updateQuantity(productId, newAmount);
  };

  return (
    <>
      {cart.map((product:any) => {
        return (
          <div className='cardContainer' key={product.id}>
            <div className='imageBox'>
              <div className='image'>
                <Image src={product.image} alt='imgProduct' width={65} height={65} />
              </div>
              <div className='datos'>
                <div className='infoText'>
                  <p>{product.name}</p>
                  <span>{product.category}</span>
                </div>
                <div className='actionProduct'>
                  <button onClick={() => removeFromCart(product.id)}>
                    Eliminar
                  </button>
                  <button>
                    Guardar
                  </button>
                </div>
              </div>
            </div>
            <div className='boxAmount'>
              <button onClick={() => handleChangeAmount(product.id, product.stock, 'decrement')}>
                -
              </button>
              <span>{product.cantidad}</span>
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
                  <span className='dataPrice'>${handleCalculate(product.price, product.offer) * product.cantidad}</span>
                </>
                :
                <span className='dataPrice'>${product.price * product.cantidad}</span>
              }
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CardCart;
