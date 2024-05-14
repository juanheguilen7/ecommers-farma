import Link from 'next/link';
import React from 'react';

import '@/styles/actionBtn.scss';

const ActionBtn = () => {
  return (
    <div className='dropdown'>
      <div className='content'>
        <span>Iniciar Sesion</span>
        <p>Iniciar Sesion</p>
        <span> expand_more</span>
      </div>
      <button type='button'></button>
      <div className='menu'>
        <Link href={''}>
          <span>Iniciar Session</span>
          <p>Account</p>
        </Link>
        <Link href={''}>
          <span>credit_card</span>
          <p>Payments</p>
        </Link>
        <Link href={''}>
          <span>archive</span>
          <p>Archive</p>
        </Link>
      </div>
    </div>
  )
}

export default ActionBtn