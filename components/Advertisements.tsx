import React from 'react'
import '../styles/advertisements.scss'
import Image from 'next/image';

const Advertisements = () => {
    return (
        <section className='advertisements-grid'>
            <div className='card'>
                <div className='box-card'>
                    <Image src={'/icons/credit-card.svg'} alt='credit-card' width={80} height={80} />
                    <div>
                        <span>
                            Cuotas sin Interes
                        </span>
                        <p>
                            con tarjetas de credito en fragancias, Dermocosmetica, y mas!.
                        </p>
                    </div>

                </div>

            </div>
            <div className='card'>
                <div className='box-card'>
                    <Image src={'/icons/send.svg'} alt='icono de envio' width={80} height={80} />
                    <div>

                        <span>
                            Contactanos
                        </span>
                        <p>
                            despejamos dudas, y acesoramos a travez de nuestros profesionales.
                        </p>
                    </div>

                </div>

            </div>
            <div className='card'>
                <div className='box-card'>
                    <Image src={'/icons/car.svg'} alt='car image' width={80} height={80} />
                    <div>

                        <span>
                            Envios a domicilio disponible
                        </span>
                        <p>
                            en todos nuestros productos superando una compra de $23.000.
                        </p>
                    </div>

                </div>
            </div>
            <div className='card'>
                <div className='box-card'>
                    <Image src={'/icons/alert.svg'} alt='alert icon' width={80} height={80} />
                    <div>

                        <span>
                            Ofretas diarias
                        </span>
                        <p>
                            en nuestros productos seleccionados de calidad.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Advertisements;