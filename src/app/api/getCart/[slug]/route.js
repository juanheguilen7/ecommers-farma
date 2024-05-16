import { connectionToDB } from '@/utils/database.js';
import Cart from '@/models/cart.js';

export async function GET(request, { params }) {
    const { slug } = params;
    try {
        await connectionToDB();

        console.log(slug,'estoy en el get')

        const cart = await Cart.findById(slug);
        console.log(cart);


        return new Response({ status: 200 });

    } catch (error) {
        console.log(error)
        return new Response({ status: 500 });
    }
}