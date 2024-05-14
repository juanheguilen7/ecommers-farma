import Link from 'next/link';
import React from 'react';

import './actionBtn.scss';

const ActionBtn = () => {
  return (
    <div className='dropdown'>
      <div className='content'>
        <p>icono</p>
        
      </div>
      <button type='button'></button>
      <div className='menu'>
        <Link href={'/auth/login'}>
          <p>Iniciar sesion</p>
        </Link>
        <Link href={''}>
          <p>Account</p>
        </Link>
        <Link href={''}>
          <p>Archive</p>
        </Link>
      </div>
    </div>
  )
}

export default ActionBtn