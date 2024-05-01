import Link from 'next/link';
import React from 'react';

import '../../../styles/loginForm.scss';

const Login = () => {
  return (
    <main className='container-form'>
      <form className='form-register'>
        <div className='box-inputs'>
          <label htmlFor="">
            Email
          </label>
          <input type="text" className='inputs-form' />
        </div>
        <div className='box-inputs'>
          <label>
            Contraseña
          </label>
          <input type="password" className='inputs-form' />
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