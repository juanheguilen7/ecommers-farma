import React from 'react';
import './header.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Action from './SessionAction/Action';
import Button from '@mui/material/Button';
import SliderComponent from './Slider/Slider';
import CartIcon from './CartIcon/CartIcon';

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
        <>
            <SliderComponent />
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
                    <Link href={session && session.user.rol !== 'admin' ? `/cart/${session.user.cart}` : '/auth/login'}>
                        <Button>
                            <CartIcon />
                        </Button>
                    </Link>
                    {session ?
                        <Action id={session.user.id} rol={session.user.rol} />
                        :
                        <Link href={'/auth/login'}>
                            <Button>
                                <Image src={'/icons/user.svg'} width={25} height={25} alt='iconUser' />
                            </Button>
                        </Link>
                    }
                </div>
            </header>
        </>
    )
}

export default Header;