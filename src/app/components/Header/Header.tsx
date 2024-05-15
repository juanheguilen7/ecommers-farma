import React from 'react';
import './header.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Action from './sessionAction/Action';
import Button from '@mui/material/Button';

type userSession = {
    user: {
        name: string;
        email: string;
        image: string;
        id: string;
        cart: string;
        rol: string
    }
}
const Header = async () => {
    const session: userSession | null = await getServerSession(authOptions);
    return (
        <header className='boxHeader'>
            <div className='containerLogo'>
                <Link href={'/'} className='boxLogoHeader'>
                    <Image src={'/cruz.png'} width={100} height={100} alt='logoEmergency' />
                    <h1>Farmacia Heguilen</h1>
                </Link>
            </div>
            <nav className='navHeader'>
                <ul className='listHeader'>
                    <Link href={'/'} className='btnHeader' >
                        <li>Productos</li>
                    </Link>
                    <Link href={'/'} className='btnHeader' >
                        <li>Ofertas del mes</li>
                    </Link>
                    <Link href={'/'} className='btnHeader'>
                        <li>Contactanos</li>
                    </Link>
                </ul>
            </nav>
            <div className='actionHeader'>

                <Button>
                    <Link href={session && session.user.rol !== 'admin' ? `/cart/${session.user.cart}` : '/auth/login'}>
                        <Image src={'/icons/shopping-cart.svg'} width={25} height={25} alt='iconCart' />
                    </Link>
                </Button>
                {session ?
                    <Action id={session.user.id} rol={session.user.rol} />
                    :
                    <Button>
                        <Link href={'/auth/login'}>
                            <Image src={'/icons/user.svg'} width={25} height={25} alt='iconUser' />
                        </Link>
                    </Button>
                }

            </div>
        </header>
    )
}

export default Header