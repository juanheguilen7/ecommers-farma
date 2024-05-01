import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import '../styles/footer.scss'
const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='container-firstPart'>
        <div className='container-redes'>

          <Link href='/'>
            <Image src='/icons/facebook.svg' alt='icono de facebook' width={30} height={30} />
          </Link>
          <Link href='/'>
            <Image src='/icons/instagram.svg' alt='icono de instagram' width={30} height={30} />
          </Link>
          <Link href='/'>
            <Image src='/icons/wp.svg' alt='icono de whatssap' width={30} height={30} />
          </Link>
        </div>
        <div className='box-footer'>
          <ul>
          <span>Atencion al cliente</span>
            <li>Contacto</li>
            <li>Medios de pago</li>
            <li>Como comprar</li>
            <li>Preguntas Frecuentes</li>
            <li>Termino y condiciones</li>
            <li>Promociones</li>
            <li>Politica de Privacidad</li>
          </ul>
        </div>
        <div className='box-footer'>
          
          <ul>
          <span>Categorias</span>
            <li>
              Dermocosmetica
            </li>
            <li>
              Skin Care
            </li>
            <li>
              Combos
            </li>
            <li>
              Perfumes y Fragancias
            </li>
            <li>
              Maquillajes
            </li>
            <li>
              Bebes y Maternidad
            </li>
          </ul>
        </div>
        <div className='box-footer'>
          <ul>
          <span>Conocenos</span>
            <li>Nuestra empresa</li>
            <li>Mis pedidos</li>
            <li>Puntos de retiro</li>
          </ul>
        </div>
      </div>
      <div className='container-secondPart'>
        <div>
          <p>
            © Copyright 2024. Todos los derechos reservados | Farmacia Heguilen S.A ©

            CUIT (), Av. Alem 604 , BAHIA BLANCA - BUENOS AIRES
          </p>
        </div>
        <div>
          SPonsors
        </div>
      </div>
    </footer>
  )
}

export default Footer;