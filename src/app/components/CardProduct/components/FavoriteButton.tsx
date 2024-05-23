import React, { useState } from 'react';
import Image from 'next/image';

interface FavoriteButtonProps {
    id: string;
    isFavorite: boolean;
    userBookmarkId?: string; // Hacemos que userBookmarkId sea opcional
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ id, isFavorite, userBookmarkId }) => {
    const [favorite, setFavorite] = useState(isFavorite);

    const handlePushFav = async (id: string) => {
        if (!userBookmarkId) {
            // Si no hay userBookmarkId, salimos de la función
            console.warn('userBookmarkId is not defined. Cannot change favorite status.');
            return;
        }

        const newFavoriteStatus = !favorite;
        setFavorite(newFavoriteStatus);
        const sendData = {
            idProd: id,
            idBookmark: userBookmarkId,
            status: newFavoriteStatus,
        };
        await fetch('/api/bookmark', {
            method: 'POST',
            body: JSON.stringify(sendData),
        });
    };

    return (
        <button onClick={() => handlePushFav(id)} disabled={!userBookmarkId}>
            <Image src={favorite ? '/icons/heart-filled.svg' : '/icons/heart.svg'} alt='iconHeart' width={20} height={20} />
        </button>
    );
};

export default FavoriteButton;
