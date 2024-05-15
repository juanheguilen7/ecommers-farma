'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from '../CardProduct/ProductCard';
import { base64ToFile } from '@/utils/fileManage';

import './offers.scss'
import Watch from './Timer/Timer';

const Offers = () => {
    const [arrProduct, setArrProduct] = useState<any[]>([]);
    const [arrFinally, setArrFinally] = useState<any[]>([]);

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

    // Paso 2: Crear URLs de las imágenes
    useEffect(() => {
        const updateProductImages = () => {
            const updatedProducts = arrProduct.map((product) => {
                const base64Image = product.image;
                const file = base64ToFile(base64Image, 'imagen.jpg');
                const url = URL.createObjectURL(file);
                return { ...product, imageUrl: url };
            });
            setArrFinally(updatedProducts);
        };
        updateProductImages();
        return () => {
            arrProduct.forEach(product => URL.revokeObjectURL(product.imageUrl));
        };
    }, [arrProduct]);


    return (
        <section className='offerSection'>
            <div>
                <h2>Ofertas del mes</h2>
            </div>
            <div className='offerContainer'>
            <Watch/>
            <div className='offerBox'>
                <ProductCard products={arrFinally} />
            </div>
            
            </div>
        </section>
    );
};

export default Offers;
