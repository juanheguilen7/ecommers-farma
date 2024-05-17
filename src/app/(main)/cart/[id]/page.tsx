import React from 'react'
import './cart.scss'
import CardCart from '../components/CartProduct/CardCart'
import CartInfo from '../components/CartInfo/CartInfo'
const CartById = ({ params }: any) => {

  return (
    <section className='cartContainer'>
      <div className='cartListProduct'>
        <CardCart />
      </div>
      <div className='cartInfoOrder'>
        <CartInfo />
      </div>

    </section>
  )
}

export default CartById