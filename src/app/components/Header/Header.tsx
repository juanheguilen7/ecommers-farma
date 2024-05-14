import React from 'react';
import './header.scss'
import Image from 'next/image';
import NavBar from './NavBar';
import ActionBtn from './ActionBtn';

const Header = () => {
    return (
        <header className='headerContent'>
            <div className='headerLogo'>
                <Image src={'/cruz.png'} alt='header logo' width={150} height={150} />
            </div>

            <div className='headerNav'>
                <NavBar />
            </div>
            <div className='headerAction'>
               <ActionBtn/>
            </div>
        </header>
    )
}

export default Header