import { connectionToDB } from '../../../utils/database.js';
import User from '../../../models/user.js';
import Cart from '../../../models/cart.js';

export const POST = async (req:any, res:) => {
    const { user } = await req.json();


    try {
        await connectionToDB();
        // Crear un nuevo usuario
        const newUser = new User(user);
        await newUser.save();

        // Crear un nuevo carrito asociado al usuario
        const newCart = new Cart({ user: newUser._id });
        await newCart.save();
        // Asignar el ID del carrito al campo "cart" del usuario y guardar el usuario actualizado
        newUser.cart = newCart._id;
        await newUser.save();

        return new Response(JSON.stringify(newUser), { satatus: 201 })

    } catch (error) {
        console.log(error)
    }
}