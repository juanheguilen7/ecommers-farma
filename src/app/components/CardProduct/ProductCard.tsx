'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import './productCard.scss';
import CopyLinkButton from './components/CopyLinkButton';
import FavoriteButton from './components/FavoriteButton';
import { fetchData } from '@/utils/dataCall';
import { useSession } from 'next-auth/react';
import AddToCartButton from './components/AddToCardButton';

interface ProductCardProps {
  url: string;
  method: string;
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

interface SessionUser {
  user: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ url, method }) => {
  const { data: session } = useSession() as { data: SessionUser };
  const [dataUser, setDataUser] = useState<any | undefined>();
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [products, setProducts] = useState<Product[] | undefined>([]);

  useEffect(() => {
    if (session?.user) {
      const user = session.user;
      setDataUser(user);

      // Fetch user's bookmarks
      const fetchBookmarks = async () => {
        try {
          if (user) {
            const response = await fetch(`/api/bookmark/${user.bookmark}`); // Adjusted URL to use user.bookmark (bookmarkId)
            const data = await response.json();
            const favoriteProducts = data.products.reduce((acc: any, product: any) => {
              acc[product._id] = true;
              return acc;
            }, {});
            setFavorites(favoriteProducts);
          }

        } catch (error) {
          console.error('Error fetching bookmarks:', error);
        }
      };

      fetchBookmarks();
    } else {
      setDataUser(undefined);
    }
  }, [session]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchData(url, { method });
        setProducts(data.arrProduct); // Assuming your API response has a 'arrProduct' field
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [url, method]);

  const handleCalculate = (price: number, offer: number) => {
    return price - (price * (offer / 100));
  };

  return (
    <>
      {products && products.length !== 0 ? (
        products.map((item, index) => {
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
                {item.offer && item.offer !== 0 ? (
                  <div className='productPriceOffer'>
                    <span className='productPriceOld'>${item.price}</span>
                    <div className='productData'>
                      <span className='productPrice'>${priceOffer}</span>
                      <span className='productStock'>{item.stock}</span>
                    </div>
                  </div>
                ) : (
                  <div className='productData'>
                    <span className='productPrice'>${item.price}</span>
                    <span className='productStock'>{item.stock}</span>
                  </div>
                )}
                <div className='productAction'>
                  <FavoriteButton id={item._id} isFavorite={favorites[item._id]} userBookmarkId={dataUser?.bookmark} />
                  <CopyLinkButton id={item._id} />
                  {dataUser ? <AddToCartButton item={item} /> : null}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No products available</p>
      )}
    </>
  );
};

export default ProductCard;
