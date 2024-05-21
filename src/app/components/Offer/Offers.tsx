'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from '../CardProduct/ProductCard';

import './offers.scss'
import Watch from './Timer/Timer';
import { useSession } from 'next-auth/react';

type Product = {
    category: string;
    description: string;
    image: string;
    name: string;
    offer: number;
    price: number;
    stock: number;
    __v: number;
    _id: string;
}

const Offers = () => {
    const [arrProduct, setArrProduct] = useState<Product[]>([]);

    const { data: session, status }: any = useSession();

    let userData = {}

    if (session?.user) {
        userData = {
            id: session.user.id,
            cart: session.user.cart
        }
    }

    // Paso 1: Cargar los productos
    useEffect(() => {
        const fetchData = async () => {
            try {
                const slug = 'offer';
                const res = await fetch(`/api/product/${slug}`, { method: 'GET' });
                const dataProduct = await res.json();

                setArrProduct(dataProduct.arrProductFilter);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className='offerSection'>
            <div>
                <h2>Ofertas del mes</h2>
            </div>
            <div className='offerContainer'>
                <Watch />
                <div className='offerBox'>
                    <ProductCard products={arrProduct} user={userData} />
                </div>

            </div>
        </section>
    );
};

export default Offers;
