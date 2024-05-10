import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../app/api/auth/[...nextauth]/route';

import '../styles/header.scss';
import SliderComponent from './Slider';
import LogOut from './LogOut';
import { cookies } from 'next/headers';


interface Session {
  user?: {
    name?: string;
    email?: string;
    image?: string;
    id?: string;
    cart?: string;
    rol?: string;
  };
  // Agrega otros campos de sesión si los necesitas
}

const Header = async () => {
  const session: any = await getServerSession(authOptions);
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
        {session ?
          <>
            <div className='acces-container'>
              <Link href={'/'} className='container-btn'>
                <Image src='/icons/boxes.svg' alt='svg de boxes'
                  width={25}
                  height={25} />
                <p>Mis pedidos</p>
              </Link>
              <Link href={`/profile/${session.user.id}`} className='container-btn '>
                <Image src='/icons/user.svg' alt='svg de usuario'
                  width={25}
                  height={25} />
                <p>Hola!: {session.user.name}</p>
              </Link>
              <div className='cart'>
                <Link href={'/bookmark'} className='svg-cart'>
                  <Image src="/icons/heart.svg" alt='heart svg' width={25} height={25} />
                </Link>
                <Link href={`/cart/${session.user.cart}`} className='svg-cart'>
                  <Image src="/icons/shopping-cart.svg" alt='cart svg' width={25} height={25} />
                </Link>
              </div>
            </div>
            <LogOut />
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