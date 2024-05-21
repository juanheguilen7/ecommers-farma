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
  __v: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ products, user }) => {

  const [dataUser, setDataUser] = useState<any | undefined>();
  //un estado de un objeto con clave id y valor true/false
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [arrProd, setArrProd] = useState<string[]>([]);


  //contexto de carrito
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { addToCart } = cartContext;

  //user credenciales
  useEffect(() => {
    if (user) {
      setDataUser(user);
    }
  }, [user]);

  //funcion que calcula el precio en base al descuento
  const handleCalculate = (price: number, offer: number) => {
    return price - (price * (offer / 100));
  };

  const handlePush = (item: Product) => {
    //creo el dato que quiero mandar al contexto
    const productCart: any = {
      id: item._id,
      name: item.name,
      price: item.price,
      cantidad: 1,
      image: item.image,
      category: item.category,
      offer: item.offer,
      stock: item.stock
    }
    //uso la funcion del contexto para agregar al carrito
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
  const handlePath = (id: string) => {
    const pathProduct = `http://localhost:3000/product/${id}`;

    //para copiar el path;
    navigator.clipboard.writeText(pathProduct).then(() => {
      Swal.fire({
        position: "bottom-end",
        icon: "info",
        text: 'URL del producto copiada.',
        showConfirmButton: false,
        timer: 1500,
        toast: true
      });
    });


  }

  const handlePushFav = async (id: string) => {
    const newFavorites = { ...favorites, [id]: !favorites[id] };
    setFavorites(newFavorites);



    const sendData = {
      idProd: id,
      idCarrito: dataUser.cart,
      status: !favorites[id]
    }
    console.log(sendData);
    const response = await fetch('/api/cart', {
      method: 'POST', body: JSON.stringify(
        sendData
      )
    })


  };


  return (
    <>
      {products && products.length !== 0 ? products.map((item, index) => {
        //constante que calcula el dato
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
                {dataUser.cart && favorites[item._id] ?
                  <button onClick={() => { handlePushFav(item._id) }}>
                    <Image src={'/icons/heart-filled.svg'} alt='iconHeart' width={20} height={20} />
                  </button>
                  :
                  <button onClick={() => { handlePushFav(item._id) }}>
                    <Image src={'/icons/heart.svg'} alt='iconHeart' width={20} height={20} />
                  </button>
                }

                {/* btn que copia el link del producto */}
                <button onClick={() => { handlePath(item._id) }}>
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