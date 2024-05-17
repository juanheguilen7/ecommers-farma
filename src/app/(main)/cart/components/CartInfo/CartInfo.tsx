import React from 'react';
import './cartInfo.scss';
const CartInfo = () => {

  return (
    <div className='containerInfo'>
      <h4>
        Resumen de compra
      </h4>
      <div className='boxContent'>
        <div className='container' >
          <p>productos cantidad</p>
          <span>precio total</span>
        </div>
        <div className='container'>
          <p>
            envio
          </p>
          <span>
            gratis o no
          </span>
        </div>
        <div className='container'>
          <p>total</p>
          <span>$35000</span>
        </div>
      </div>

      <button className='btnSell'>Continuar compra</button>


    </div>
  )
}

export default CartInfo