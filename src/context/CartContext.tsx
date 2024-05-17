'use client'
import React, { ReactNode, useState, createContext, useEffect } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    offer: number;
    cantidad: number;
    imageUrl: string;
    category: string;
    stock:number;
}

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: any) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }: any) => {
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('arrCat');

        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }

    }, [])


    const addToCart = (product: Product) => {
        setCart((prevCart): any => {
            const updatedCart = [...prevCart, product];
            localStorage.setItem('arrCat', JSON.stringify(updatedCart)); //tengo que hacerlo JSON
            return updatedCart
        }) //dentro de la funcion del use estate cargo a local storage, y a su vez retorno el arr de los productos;
    }

    const removeFromCart = (id: any) => {
        setCart((prevCart): any => {
            const updatedCart = prevCart.filter(product => product.id !== id)// me va a retornar otro arr pero exceptuando ese producto
            localStorage.setItem('arrCat', JSON.stringify(updatedCart))
            return updatedCart;
        })
    }
    
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}