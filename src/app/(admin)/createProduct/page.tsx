'use client'

import React, { FormEvent, useState } from 'react'

import '../../../styles/createProduct.scss'

const initialValues = {
    name: '',
    price: 0,
    stock: 0,
    description: '',
    image: '',
    offer: 0
}
const CreateProduct = () => {
    const [formData, setFormData] = useState(initialValues);
    const [offer, setOffer] = useState(false);

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const product = formData;
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
            <form className='form-product' onSubmit={handleSubmit}>
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
                    <input type='file' name='image' onChange={handleChange} value={formData.image} />
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