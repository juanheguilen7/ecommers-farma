'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { CartContext } from '@/context/CartContext'

const CartIcon = () => {
    const [count, setCount] = useState(0);
    const cartContext = useContext(CartContext);
    useEffect(() => {
        if (cartContext) {
            const { cart } = cartContext
            setCount(cart.length);
        }
    }, [cartContext])

    return (
        <>
            <Image src={'/icons/shopping-cart.svg'} width={25} height={25} alt='iconCart' />
            <span>{count != 0 ? count : null}</span>
        </>
    )
}

export default CartIcon