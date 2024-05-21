import React from 'react'
import './slider.scss'
import Carousel from '../../Carrousel/Carousel'

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