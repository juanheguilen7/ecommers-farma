'use client'

import React, { useState } from 'react'

import '../../../styles/createProduct.scss'
import { fileToBase64 } from '@/src/utils/fileManage'

const initialValues = {
    name: '',
    price: 0,
    stock: 0,
    description: '',
    image: null as string | null,
    category: 'otros',
    offer: 0
}
const CreateProduct = () => {
    const [formData, setFormData] = useState(initialValues);
    const [offer, setOffer] = useState(false);
    const [image, setImage] = useState('');

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleImageChange = async (event: any) => { // Nueva función para manejar el cambio de imagen
        const file = event.target.files[0]; // Obtenemos el archivo seleccionado
        const base64ImageRecord = await fileToBase64(file);
        setImage(base64ImageRecord);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const product = {
                name: formData.name,
                price: formData.price,
                stock: formData.stock,
                description: formData.description,
                image: image, // No necesitas convertirlo aquí, ya está en base64
                offer: formData.offer,
                category: formData.category
            };
            const res = await fetch('/api/product', {
                method: 'POST',
                body: JSON.stringify({ product })
            });
            if (res.ok) {
                setFormData(initialValues);
                alert('El producto fue creado correctamente');

            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container'>
            <form className='form-product' onSubmit={handleSubmit} >
                <div className='box-input'>
                    <label htmlFor="name">
                        Nombre
                    </label>
                    <input type="text" name='name' className='input-create' onChange={handleChange} value={formData.name} />
                </div>
                <div className='box-input'>
                    <label htmlFor="price">
                        Price
                    </label>
                    <input type="number" name='price' className='input-create' onChange={handleChange} value={formData.price} />
                </div>
                <div className='box-input'>
                    <label htmlFor="stock">
                        Stock
                    </label>
                    <input type="number" name='stock' className='input-create' onChange={handleChange} value={formData.stock} />
                </div>
                <div className='box-input'>
                    <label htmlFor="description">
                        Descripcion
                    </label>
                    <input type="text" name='description' className='input-create' onChange={handleChange} value={formData.description} />
                </div>
                <div className='box-input'>
                    <label htmlFor="image">
                        Cargar imagen
                    </label>
                    <input type='file' name='image' onChange={handleImageChange} />
                </div>
                <div className='box-input'>
                    <label htmlFor="category">
                        Selecciona la categoria
                    </label>
                    <select name="category" id="category" >
                        <option value="cosmetica">Cosmetica</option>
                        <option value="perfumes">Perfumes</option>
                        <option value="cremas">Cremas</option>
                        <option value="saludBucal">Salud bucal</option>
                        <option value="Otros">otros</option>
                    </select>

                </div>
                <div>
                    <label htmlFor="checkOffer">
                        Tiene oferta click aqui
                    </label>
                    <input type='checkbox' id='checkOffer' onClick={() => { setOffer(!offer); }} />
                </div>
                {offer ?
                    <div className='box-input'>
                        <label htmlFor="offer">
                            Oferta
                        </label>
                        <input type="number" name='offer' className='input-create' onChange={handleChange} placeholder='Escriba el porcentaje de la oferta, sin el "%" ' value={formData.offer} />
                    </div> : null
                }
                <button type="submit" className='btn-submit'>Crear producto</button>
            </form>
        </div>
    )
}

export default CreateProduct