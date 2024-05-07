'use client'
import Link from 'next/link';
import React, { useState } from 'react';

import '../../../styles/loginForm.scss';
import { redirect, useRouter } from 'next/navigation';
import { cookies } from 'next/headers';

const Login = () => {
  const route = useRouter();

  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/log', {
        method: 'POST',
        body: JSON.stringify({ user }),
        credentials: 'include',
      });

      if (res.ok) {
        const { _id, cart } = await res.json();
        const idsUser: any = { [_id]: cart };

        localStorage.setItem('utils', JSON.stringify(idsUser));
        route.push('/')
      } else {
        alert('credenciales incorrectas');

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className='container'>
      <form className='form-login' onSubmit={handleSubmit}>
        <div className='box-inputs'>
          <label htmlFor="email">
            Email
          </label>
          <input type="text" name='email' className='inputs-form' onChange={handleChange} value={user.email} />
        </div>
        <div className='box-inputs'>
          <label htmlFor='password'>
            Contraseña
          </label>
          <input type="password" className='inputs-form' onChange={handleChange} name='password' value={user.password} />
        </div>
        <div className='box-buttons'>
          <button type="button" className='btn-form cancel'>Cancelar</button>
          <button type="submit" className='btn-form logIn'>Ingresar</button>
        </div>
        <div className='box-actions'>
          <div className='box-link'>
            <span>¿Olvidaste la contraseña?</span>
            <Link href={'/'}>Olvide la contraseña</Link>
          </div>
          <div className='box-link'>
            <span>¿No tienes cuenta?</span>
            <Link href={'/register'}>
              registrarse
            </Link>
          </div>
        </div>
      </form>
    </main>
  )
}

export default Login;