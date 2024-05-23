// components/Buttons/CopyLinkButton.tsx
import React from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';

interface CopyLinkButtonProps {
  id: string;
}

const CopyLinkButton: React.FC<CopyLinkButtonProps> = ({ id }) => {
  const handlePath = (id: string) => {
    const pathProduct = `http://localhost:3000/product/${id}`;
    navigator.clipboard.writeText(pathProduct).then(() => {
      Swal.fire({
        position: 'bottom-end',
        icon: 'info',
        text: 'URL del producto copiada.',
        showConfirmButton: false,
        timer: 1500,
        toast: true,
      });
    });
  };

  return (
    <button onClick={() => handlePath(id)}>
      <Image src='/icons/copi.svg' alt='iconCopie' width={20} height={20} />
    </button>
  );
};

export default CopyLinkButton;
