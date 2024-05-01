import React from 'react'

import '../styles/slider.scss'
import Carousel from './Carousel';
import 'animate.css';

const SliderComponent = () => {

  const arrText = [
    { text: 'Paga con Visa, Mastercard y Cabal' },
    { text: 'Envio a domicilio' },
    { text: 'Registrate y compra online' },
    { text: 'Consulta sobre tu producto' }

  ]

  return (
    <section className='slider-container'>
      <Carousel items={arrText} autoSlide={true} />
    </section>
  )
}

export default SliderComponent;