import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={''}>
                        Productos
                    </Link></li>
                <li>
                    <Link href={''}>
                        Combos
                    </Link>
                </li>
                <li>
                    <Link href={''}>
                        Promociones
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar