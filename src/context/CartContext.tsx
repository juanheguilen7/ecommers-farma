'use client'
import React, { ReactNode, useState, createContext, useEffect } from "react";

interface Product {
    id: string;
    name: string;
    price: number;
    offer: number;
    cantidad: number;
    image: string;
    category: string;
    stock: number;
}

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, cantidad: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}


export const CartProvider: React.FC<CartProviderProps> = ({ children }: CartProviderProps) => {

    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('arrCat');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const productIndex = prevCart.findIndex(p => p.id === product.id);
            let updatedCart;
            if (productIndex !== -1) {
                // Producto ya está en el carrito, aumentar cantidad
                updatedCart = prevCart.map((p, index) =>
                    index === productIndex ? { ...p, cantidad: p.cantidad + 1 } : p
                );
            } else {
                // Producto no está en el carrito, agregar al carrito
                updatedCart = [...prevCart, { ...product, cantidad: 1 }];
            }
            localStorage.setItem('arrCat', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter(product => product.id !== id);
            localStorage.setItem('arrCat', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const updateQuantity = (id: number, cantidad: number) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map(product => 
                product.id === id ? { ...product, cantidad } : product
            );
            localStorage.setItem('arrCat', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            localStorage.setItem('arrCat', JSON.stringify(updatedCart)); //tengo que hacerlo JSON
            return updatedCart
        }) //dentro de la funcion del use estate cargo a local storage, y a su vez retorno el arr de los productos;
    }

    const removeFromCart = (id: string) => {
        setCart((prevCart): Product[] => {
            console.log(prevCart, 'prevcart')
            const updatedCart = prevCart.filter(product => product.id !== id)// me va a retornar otro arr pero exceptuando ese producto
            localStorage.setItem('arrCat', JSON.stringify(updatedCart))
            return updatedCart;
        })
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
