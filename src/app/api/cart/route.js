import { connectionToDB } from '@/utils/database.js';
import Cart from '@/models/cart.js';

export const POST = async (req, res) => {
    const { idProd, idCarrito } = await req.json();

    try {
        // Conectarse a la base de datos
        await connectionToDB();

        // Encontrar el carrito asociado por su ID
        const carrito = await Cart.findById(idCarrito);

        if (!carrito) {
            return res.status(404).json({ error: 'El carrito no fue encontrado' });
        }

        // Agregar el ID del producto al array de productos del carrito
        carrito.products.push(idProd);

        // Guardar los cambios en la base de datos
        await carrito.save();

        // Respuesta exitosa
        return new Response({ message: 'El producto fue agregado al carrito correctamente' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response({ error: 'Ocurrió un error al procesar la solicitud' }, { status: 500 });
    }
};

