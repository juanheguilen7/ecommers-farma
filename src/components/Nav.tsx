'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import '@/styles/navbar.scss';
import Image from 'next/image';

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };


  return (
    <>
      <nav className='container'>
        <ul className='nav'>
          <li onMouseEnter={handleMouseEnter} >
            <Image src={'/icons/dropdown.svg'} alt='icon de hamburguesa' width={25} height={25} /> Categorias
          </li>
          <li>
            <Link href={'/'}>
              Ofertas
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              Espacios consciente
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              Combos
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              Quienes Somos
            </Link>
          </li>
        </ul>
      </nav>
      {dropdown && (
        <div className="dropdown-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='dropdown-container'>
            <ul>
              <li>
                <Link href={'/'}>
                  Cuidado Personal
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  Cosmetica
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  Cremas
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  Bebe & Maternidad
                </Link>
              </li>
            </ul>
          </div>
          <div className='dropdown-resto'>
              <p>asdsd</p>
              <p>adasdasd</p>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar;