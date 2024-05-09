import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../app/api/auth/[...nextauth]/route';

import '../styles/header.scss';
import SliderComponent from './Slider';

const Header = async () => {
  const session = await getServerSession(authOptions);

  console.log(session?.user);
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
            className='btn-search'
          >
            <Image src="/icons/search.svg" alt='icon de busqueda' width={30} height={30} />
          </button>
        </div>
        {session?.user ?
          <>
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
                <Link href={`/cart`} className='svg-cart'>
                  <Image src="/icons/shopping-cart.svg" alt='cart svg' width={25} height={25} />
                </Link>
              </div>
            </div>
          </>
          :
          <>
            <div className='acces-container'>
              <Link href='/auth/login' className='container-btn'>
                <Image src='/icons/boxes.svg' alt='svg de boxes'
                  width={25}
                  height={25} />
                <p>Mis pedidos</p>
              </Link>
              <Link href='/auth/login' className='container-btn '>
                <Image src='/icons/user.svg' alt='svg de usuario'
                  width={25}
                  height={25} />
                <p>Mi cuenta</p>
              </Link>
              <div className='cart'>
                <Link href='/auth/login' className='svg-cart'>
                  <Image src="/icons/heart.svg" alt='heart svg' width={25} height={25} />
                </Link>
                <Link href='/auth/login' className='svg-cart'>
                  <Image src="/icons/shopping-cart.svg" alt='cart svg' width={25} height={25} />
                </Link>
              </div>
            </div>

          </>
        }

      </header>
    </>
  )
}

export default Header;