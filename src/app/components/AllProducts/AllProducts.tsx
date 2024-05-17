'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '../CardProduct/ProductCard';

import './allProduct.scss';
import { useSession } from 'next-auth/react';
const AllProducts = () => {
    const [arrProduct, setArrProduct] = useState<any[]>([]);

    const { data: session, status }: any = useSession()
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
                const slug = 'all';
                const res = await fetch(`/api/product/${slug}`, { method: 'GET' });
                const dataProduct = await res.json();

                setArrProduct(dataProduct.arrProduct);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className='allProducts-section'>
            <div>
                <h2>Todos los productos</h2>
            </div>
            <div className='box-products'>
                <ProductCard products={arrProduct} user={userData} />
            </div>
        </section>
    )
}

export default AllProducts