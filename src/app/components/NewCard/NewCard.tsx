import React from 'react'
import Image from 'next/image'

import './styles/newcard.scss';

const NewCard = () => {

    return (
        <main className='container-showProduct'>

            <div className='box-showProduct'>
                <Image src={'/colgateDeEsta.jpg'} alt='imageProduct' width={25} height={25} className='img-showProduct' />
                <div className='data-showProduct'>
                    <h2>Alina Smith</h2>
                    <h3>Señor ux/ui designer</h3>
                    <ul className='stats'>
                        <li>342</li>
                        <li>Posts</li>
                        {/* posibles mas datos */}
                    </ul>
                    <nav className='buttons'>
                        <button className='primary'>Add to Card</button>
                        <button>Add to likes</button>
                    </nav>
                </div>
            </div>
        </main>
    )
}

export default NewCard