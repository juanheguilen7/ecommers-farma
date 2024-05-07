'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import '../styles/header.scss';
import Link from 'next/link';
import SliderComponent from './Slider';

const Header = () => {
  const [userData, setUserData] = useState(null);
  const [localStorageUpdated, setLocalStorageUpdated] = useState(false);

  useEffect(() => {
    const dataUserIds = () => {
      const data = localStorage.getItem('utils');
      if (data) {
        const parsedData = JSON.parse(data);
        if (parsedData) {
          setUserData(parsedData);
        }
      } else {
        setUserData(null);
      }
    }
    dataUserIds();
  }, [localStorageUpdated]);


  console.log(userData)
  const handleMensage = () => {
    return alert('Deberias loguear primero')
  }

  return (
    <>
      <SliderComponent />
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

          {userData ? <>
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
          </>
            :
            <>
              <div className='container-btn' onClick={handleMensage}>
                <Image src='/icons/boxes.svg' alt='svg de boxes'
                  width={25}
                  height={25} />
                <p>Mis pedidos</p>
              </div>
              <Link href='/login' className='container-btn '>
                <Image src='/icons/user.svg' alt='svg de usuario'
                  width={25}
                  height={25} />
                <p>Loguearse</p>
              </Link>
            </>}

          <div className='cart'>

            {
              userData ? <>
                <Link href={'/bookmark'} className='svg-cart'>
                  <Image src="/icons/heart.svg" alt='heart svg' width={25} height={25} />
                </Link>
                <Link href={`/cart/${Object.values(userData)}`} className='svg-cart'>
                  <Image src="/icons/shopping-cart.svg" alt='cart svg' width={25} height={25} />
                </Link>
              </> : <>
                <Image src="/icons/heart.svg" alt='heart svg' width={25} height={25} onClick={handleMensage} />
                <Image src="/icons/shopping-cart.svg" alt='cart svg' width={25} height={25} onClick={handleMensage} />
              </>
            }

          </div>
        </div>
      </header>
    </>
  )
}

export default Header;