'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { base64ToFile } from '@/utils/fileManage';

import '@/styles/allProduct.scss';
const AllProducts = () => {
    const [arrProduct, setArrProduct] = useState<any[]>([]);
    const [arrFinally, setArrFinally] = useState<any[]>([]);

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
        <section className='allProducts-section'>
            <div>
                <h2>Todos los productos</h2>
            </div>
            <div className='box-products'>
                <ProductCard products={arrFinally} />
            </div>
        </section>
    )
}

export default AllProducts