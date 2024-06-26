'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import './registerForm.scss';

const initialFormData = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  confirm_password: ''
};

const Register = () => {
  const router = useRouter();
  //useStates guarda los datos de el formulario
  const [formData, setFormData] = useState(initialFormData);
  //setea el error del formulario
  const [errors, setErrors] = useState({
    passwordMismatch: false
  });

  //funcion que cada vez que cambia el valor actualiza el estado, de los valores 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      setErrors({
        passwordMismatch: true
      });
      return;
    }

    const user = {
      username: formData.name,
      lastname: formData.lastname,
      email: formData.email,
      password: formData.password
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ user })
      });
      console.log(res);
      if (res.ok) {
        router.push('/auth/login');
      }
      if (res.status === 400) {
        alert('el usuario ya existe');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    // Restablece el formulario al estado inicial
    setFormData(initialFormData);

    // Limpia los errores
    setErrors({
      passwordMismatch: false
    });
  };

  return (
    <main className='container-form'>
      <h3>
        Formulario de registro
      </h3>
      <form className='form-register' onSubmit={handleSubmit}>
        <div className='box-inputs'>
          <label htmlFor='name'>
            Nombre
          </label>
          <input type="text" className='inputs-form' name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className='box-inputs'>
          <label htmlFor='lastname'>
            Apellido
          </label>
          <input type="text" className='inputs-form' name="lastname" value={formData.lastname} onChange={handleChange} required />
        </div>
        <div className='box-inputs'>

          <label htmlFor="email">
            Email
          </label>
          <input type="text" className='inputs-form' name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className='box-inputs'>
          <label htmlFor='password'>
            Contraseña
          </label>
          <input type="password" className='inputs-form' name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className='box-inputs'>
          <label htmlFor='confirm_password'>
            Confirmar Contraseña
          </label>
          <input type="password" className='inputs-form' name="confirm_password" value={formData.confirm_password} onChange={handleChange} required />
        </div>
        {errors.passwordMismatch && (
          <span className="error-message">Las contraseñas no coinciden</span>
        )}
        <div className='box-buttons'>
          <button type="button" className='btn-form cancel' onClick={handleCancel}>Cancelar</button>
          <button type="submit" className='btn-form logIn'>Registrarse</button>
        </div>
      </form>
    </main>
  )
}

export default Register;
