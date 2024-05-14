'use client'

import React from 'react'
import { signOut } from 'next-auth/react'
import { destroyCookie } from 'nookies';

const LogOut = () => {
    const handleLogout = async () => {
        // Eliminar la cookie de roles
        destroyCookie(null, 'auth');

        // Realizar el logout con NextAuth
        await signOut({ callbackUrl: '/' }); // Especifica la URL a la que redirigir después del logout
    };


    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default LogOut