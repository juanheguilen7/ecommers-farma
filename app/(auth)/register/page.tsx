import React from 'react';
import '../../../styles/loginForm.scss';

const Register = () => {
  return (
    <main className='container-form'>
      <form className='form-register'>
        <div className='box-inputs'>
          <div className='box-inputs'>
            <label>
              Nombre
            </label>
            <input type="text" className='inputs-form' />
          </div>
          <div className='box-inputs'>
            <label>
              Apellido
            </label>
            <input type="text" className='inputs-form' />
          </div>
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
        <div className='box-inputs'>
          <label>
            Validar contraseña
          </label>
          <input type="password" className='inputs-form' />
        </div>
        <div className='box-buttons'>
          <button type="button" className='btn-form cancel'>Cancelar</button>
          <button type="submit" className='btn-form logIn'>Registrarse</button>
        </div>

      </form>
    </main>
  )
}

export default Register;