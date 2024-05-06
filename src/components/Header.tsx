'use client'
import React from 'react'
import Image from 'next/image';

import '@/styles/header.scss';
import Link from 'next/link';
import SliderComponent from './Slider';

const Header = () => {
  return (
    <>
    <SliderComponent/>
      <header className='container-header'>

        <Link href={'/'}>
          <Image src="/farmacia.png" alt='logo de farmacia' width={300} height={300} className='logo-image' />
        </Link>

        <div className='search-container'>
          <input type="text" placeholder='Busca tu producto' className='input-text' />
          <button
            onClick={() => { console.log('busqueda') }}
            className='btn-search'
          >
            <Image src="/icons/search.svg" alt='icon de busqueda' width={30} height={30} />
          </button>
        </div>
        <div className='acces-container'>
          <Link href={'/'} className='container-btn'>
            <Image src='/icons/boxes.svg' alt='svg de boxes'
              width={25}
              height={25} />
            <p>Mis pedidos</p>
          </Link>

          <Link href='/profile' className='container-btn '>
            <Image src='/icons/user.svg' alt='svg de usuario'
              width={25}
              height={25} />
            <p>Mi cuenta</p>
          </Link>
          <div className='cart'>
            <Link href={'/bookmark'} className='svg-cart'>
              <Image src="/icons/heart.svg" alt='heart svg' width={25} height={25} />
            </Link>

            <Link href={'/cart'} className='svg-cart'>
              <Image src="/icons/shopping-cart.svg" alt='cart svg' width={25} height={25} />
            </Link>

          </div>
        </div>
      </header>
    </>
  )
}

export default Header;