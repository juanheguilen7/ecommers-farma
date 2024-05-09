'use client'
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';

import '../../../styles/loginForm.scss';
import { useRouter } from 'next/navigation';



const Login = () => {

  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("pabloperez@hotmail.com");
  const [password, setPassword] = useState<string>("123123");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(res);
    if (res?.error) {
      alert(res.error);
    } else {
      router.push('/');
      router.refresh();
    }
  };




  return (
    <main className='container'>
      <form className='form-login' onSubmit={handleSubmit}>
        <div className='box-inputs'>
          <label htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder="test@test.com"
            name="email"
            className='inputs-form'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className='box-inputs'>
          <label htmlFor='password'>
            Contraseña
          </label>
          <input
            type="password"
            placeholder="123123"
            name="password"
            className='inputs-form'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
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