'use client'

import React from 'react'
import { signOut } from 'next-auth/react'
const LogOut = () => {
    return (
        <button onClick={() => signOut()}>Logout</button>
    )
}

export default LogOut