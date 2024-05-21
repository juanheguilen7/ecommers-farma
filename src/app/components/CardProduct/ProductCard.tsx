import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';

import './productCard.scss';
import { CartContext } from '@/context/CartContext';
import Swal from 'sweetalert2';

interface ProductCardProps {
  products: Product[];
  user: any;
}

interface Product {
  category: string;
  image: string;
  name: string;
  description: string;
  stock: number;
  price: number;
  offer?: number;
  _id: string;
  __v:number;
}

interface Cart {
  id: string;
  cart: string;
}


const ProductCard: React.FC<ProductCardProps> = ({ products, user }) => {

  const [dataUser, setDataUser] = useState<any | undefined>();
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { addToCart } = cartContext;
  useEffect(() => {
    if (user) {
      setDataUser(user);
    }
  }, [user]);

  const handleCalculate = (price: number, offer: number) => {
    return price - (price * (offer / 100));
  };
  const handlePush = (item: any) => {
    const productCart: any = {
      id: item._id,
      name: item.name,
      price: item.price,
      cantidad: 1,
      image: item.image,
      category: item.category,
      offer:item.offer,
      stock:item.stock

    }
    addToCart(productCart);
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      text: 'Listo para comprar.',
      showConfirmButton: false,
      timer: 1000,
      toast: true
    });
  }
  /*  try {
     // Realizar la solicitud al servidor para agregar el producto al carrito
     const response = await fetch('/api/cart', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         idProd: idProduct,
         idCarrito: cart,
       }),
     });
     // Manejar la respuesta del servidor
     if (response.ok) {
       console.log('Producto agregado al carrito correctamente');
       // Aquí puedes realizar alguna acción adicional si es necesario
     } else {
       console.error('Error al agregar el producto al carrito:', response.statusText);
       // Aquí puedes manejar el error de alguna manera apropiada
     }
   } catch (error) {
     console.error('Error al agregar el producto al carrito:');
     // Manejar errores de red u otros errores no controlados
   } */
  return (

    
    <>
      {products && products.length !== 0 ? products.map((item, index) => {
        const priceOffer = item.offer && item.offer !== 0 ? handleCalculate(item.price, item.offer) : null;

        return (
          <div key={index} className='productBox'>
            <div className='productImage'>
              <Image src={item.image} alt={`image-product${item.name}`} width={200} height={200} />
            </div>
            <div className='productText'>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
            <div className='productBoxAction'>
              {item.offer && item.offer !== 0 ?
                <div className='productPriceOffer'>
                  <span className='productPriceOld'>
                    ${item.price}
                  </span>
                  <div className='productData'>
                    <span className='productPrice'>
                      ${priceOffer}
                    </span>
                    <span className='productStock'>
                      {item.stock}
                    </span>
                  </div>
                </div>
                :
                <div className='productData'>
                  <span className='productPrice'>
                    ${item.price}
                  </span>
                  <span className='productStock'>
                    {item.stock}
                  </span>
                </div>
              }
              <div className='productAction'>
                {/* btn que agrega a favoritos este si deberia conectar a la BD*/}
                <button>
                  <Image src={'/icons/heart.svg'} alt='iconHeart' width={20} height={20} />
                </button>
                {/* btn que copia el link del producto */}
                <button>
                  <Image src={'/icons/copi.svg'} alt='iconCopie' width={20} height={20} />
                </button>
                {/* btn que agrega al cart lo que hace conecta el contexto*/}
                {dataUser && dataUser.cart && (
                  <button onClick={() => { handlePush(item) }} type='button'>
                    <Image src={'/icons/shopping-cart.svg'} alt='iconCart' width={20} height={20} />
                  </button>
                )}
              </div>
            </div>
          </div >
        );
      }) : null}
    </>
  );
};

export default ProductCard;