// components/Buttons/AddToCartButton.tsx
import React, { useContext } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { CartContext } from '@/context/CartContext';

interface AddToCartButtonProps {
  item: any; // Replace `any` with your product type
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ item }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { addToCart } = cartContext;

  const handleAddToCart = () => {
    const productCart = {
      id: item._id,
      name: item.name,
      price: item.price,
      cantidad: 1,
      image: item.image,
      category: item.category,
      offer: item.offer,
      stock: item.stock,
    };
    addToCart(productCart);

    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      text: 'Listo para comprar.',
      showConfirmButton: false,
      timer: 1000,
      toast: true,
    });
  };

  return (
    <button onClick={handleAddToCart}>
      <Image src='/icons/shopping-cart.svg' alt='iconCart' width={20} height={20} />
    </button>
  );
};

export default AddToCartButton;
