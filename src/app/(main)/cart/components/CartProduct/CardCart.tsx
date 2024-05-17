'use client'

import React, { useContext } from 'react'
import { CartContext } from '@/context/CartContext'

import './cardCart.scss';
import Image from 'next/image';

const CardCart = () => {
  const cartContext = useContext<any>(CartContext);
  if (!cartContext) {
    return <div>No existe cart context</div>;
  }

  const { cart } = cartContext;

  if (cart.length === 0) {
    return <div>El carrito está vacío</div>;
  }

  const product = cart;

  return (
    <>
      {product ?
        product?.map((product: any) => {
          return (<div className='cardContainer'>
            <div className='imageBox'>
              <div className='image'>
                <Image src={product.imageUrl} alt='imgProduct' width={65} height={65} />
              </div>
              <div className='datos'>
                <div className='infoText'>
                  <p>{product.name}</p>
                  <span> {product.category}</span>
                </div>
                <div className='actionProduct'>
                  <button>
                    Eliminar
                  </button>
                  <button>
                    Guardar
                  </button>
                </div>
              </div>
            </div>
            <div className='boxAmount'>
              <button>
                -
              </button>
              <span>1</span>
              <button>
                +
              </button>
            </div>
            <div className='boxDataPrice'>
              {product.offer && product.offer != 0 ?
                <div className='dataPriceOffer'>
                  <span className='offer'>
                    -20%{product.offer}
                  </span>
                  <span className='oldPrice'>
                    ${product.price}
                  </span>
                </div> :
                null
              }
              <span className='dataPrice'>${product.price}</span>
            </div>
          </div>
          )
        })
        : null}


    </>
  )
}

export default CardCart