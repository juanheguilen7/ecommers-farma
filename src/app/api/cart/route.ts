import { connectionToDB } from '@/utils/database';
import Cart from '@/models/cart';
import { NextRequest, NextResponse } from 'next/server';
import { stat } from 'fs';


export const POST = async (req: NextRequest, res: NextResponse) => {
    const { idProd, idCarrito, status } = await req.json();
    console.log(idProd, idCarrito, status)
    try {
        // Conectarse a la base de datos
        await connectionToDB();

        // Encontrar el carrito asociado por su ID
        const carrito = await Cart.findById(idCarrito);

        if (!carrito) {
            return new Response('Cart not founded', { status: 400 });
        }

        switch (status) {
            case true:
                // Agregar el ID del producto al array de productos del carrito
                carrito.products.push(idProd);
                break;

            case false:
                // Eliminar el ID del producto del array de productos del carrito
                carrito.products.pull(idProd);
                break;
        }
        // Guardar los cambios en la base de datos
        await carrito.save();

        // Respuesta exitosa
        return new Response('El producto fue agregado al carrito correctamente', { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Ocurrió un error al procesar la solicitud', { status: 500 });
    }
};

