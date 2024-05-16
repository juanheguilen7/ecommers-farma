'use client'

import React, { useContext } from 'react'
import { CartContext } from '@/context/CartContext'

const CartById = ({ params }: any) => {
  const cartContext = useContext(CartContext);
  
  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }
  const { cart } = cartContext;

  return (
    <div>CartById</div>
  )
}

export default CartById