import { connectionToDB } from '@/utils/database.js';
import User from '@/models/user.js';

export const POST = async (req, res) => {
    const { user } = await req.json();

    try {
        await connectionToDB();

        // Buscar un usuario que coincida con las credenciales proporcionadas
        const foundUser = await User.findOne(user);

        if (foundUser) {
            // Si se encuentra un usuario que coincide, responder con el usuario y código 201
            return new Response(JSON.stringify(foundUser), { status: 201 });
        }

    } catch (error) {
        console.log(error);
        // Manejar errores aquí
        return new Response({ status: 500 });
    }
}
