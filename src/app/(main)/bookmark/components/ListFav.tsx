'use client'
import React, { SetStateAction, useEffect, useState } from 'react'
import './listFav.scss';
import Image from 'next/image';

interface ListProps {
    bookmarkId: string | undefined;
}
type products = {
    _id: string;
    name: string;
    price: number;
    stock: number;
    description: string;
    image: string;
    offer: number;
    category: string;
}

const ListFav = ({ bookmarkId }: ListProps) => {
    const [renderData, setRenderData] = useState<products[] | undefined>(undefined);

    const URL = `http://localhost:3000/api/bookmark/${bookmarkId}`;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL, { method: 'GET' });
            const data = await response.json();
            setRenderData(data.products);
        }
        fetchData();

    }, [])


    return (
        <div className='containerBookmark'>
            {renderData ? renderData.map((item) => (
                <div key={item._id} className='boxBookmark'>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>Price: {item.price}</p>
                    <p>Stock: {item.stock}</p>
                    <Image src={item.image} alt={item.name} width={125} height={125} />
                </div>
            )) :
                null
            }
        </div>

    )
}

export default ListFav