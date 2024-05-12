
import React from 'react';
import Link from 'next/link';
import '@/styles/navbar.scss';

const NavBar = () => {

  return (
    <>
      <nav className='container'>
        <ul className='nav'>
          <li>
            <Link href={'/'}>
              Ofertas
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              Combos
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              Espacios consciente
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              Quienes Somos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar;