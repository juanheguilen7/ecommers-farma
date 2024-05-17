'use client'

import React, { useState } from 'react'
import "./createProduct.scss"
import Swal from 'sweetalert2'

const initialValues = {
    name: '',
    price: 0,
    stock: 0,
    description: '',
    image: null as string | null,
    category: 'otros',
    offer: 0
}

type FormData = {
    [key: string]: string | FileList;
};

const CreateProduct = () => {

    const [data, setFormData] = useState<any>(initialValues);
    const [offer, setOffer] = useState(false);

    const handleChange = (event: any) => {
        const { name, type, value, files } = event.target;
        let newValue = value;

        if (type === 'file') {
            newValue = files[0];
        }

        setFormData({
            ...data,
            [name]: newValue
        });
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('category', data.category);
            formData.append('description', data.description)
            formData.append('offer', data.offer)
            formData.append('image', data.image)
            formData.append('price', data.price)
            formData.append('stock', data.stock)

            const res = await fetch('/api/createProduct/', {
                method: 'POST',
                body: formData
            });

            if (res.ok) {
                setFormData(initialValues);
                Swal.fire('Producto cargado exitosamente.')
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
                    <input type="text" name='name' className='input-create' onChange={handleChange} value={data.name} />
                </div>
                <div className='box-input'>
                    <label htmlFor="price">
                        Price
                    </label>
                    <input type="number" name='price' className='input-create' onChange={handleChange} value={data.price} />
                </div>
                <div className='box-input'>
                    <label htmlFor="stock">
                        Stock
                    </label>
                    <input type="number" name='stock' className='input-create' onChange={handleChange} value={data.stock} />
                </div>
                <div className='box-input'>
                    <label htmlFor="description">
                        Descripcion
                    </label>
                    <input type="text" name='description' className='input-create' onChange={handleChange} value={data.description} />
                </div>
                <div className='box-input'>
                    <label htmlFor="image">
                        Cargar imagen
                    </label>
                    <input type='file' name='image' onChange={handleChange} accept='image/*' />
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
                        <input type="number" name='offer' className='input-create' onChange={handleChange} placeholder='Escriba el porcentaje de la oferta, sin el "%" ' value={data.offer} />
                    </div> : null
                }
                <button type="submit" className='btn-submit'>Crear producto</button>
            </form>
        </div>
    )
}

export default CreateProduct