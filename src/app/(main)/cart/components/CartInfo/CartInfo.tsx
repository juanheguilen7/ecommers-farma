'use client'
import React, { useContext, useState, useEffect } from 'react';
import './cartInfo.scss';
import { CartContext } from '@/context/CartContext';

const CartInfo = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>No existe cart context</div>;
  }

  const { cart } = cartContext;

  if (cart.length === 0) {
    return <div>El carrito está vacío</div>;
  }

  const handleCalculateTotalPrice = (products:any) => {
    const totalPrice = products.reduce((acc:any, product:any) => {
      const { price, offer, cantidad } = product;
      const finalPrice = offer ? price - (price * offer / 100) : price;
      return acc + (finalPrice * cantidad);
    }, 0);
    return totalPrice;
  };

  const totalPrice = handleCalculateTotalPrice(cart);

  return (
    <div className='containerInfo'>
      <h4>Resumen de compra</h4>
      <div className='boxContent'>
        <div className='container'>
          <p>productos: ({cart.length})</p>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className='container'>
          <p>envio</p>
          <span>{totalPrice > 23000 ? 'Envio gratis' : 'Envio no gratis'}</span>
        </div>
        <div className='container'>
          <p>total</p>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <button className='btnSell'>Continuar compra</button>
    </div>
  );
};

export default CartInfo;
