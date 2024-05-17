import { connectionToDB } from '@/utils/database.js';
import Cart from '@/models/cart.js';

export async function GET(request, { params }) {
    const { slug } = params;
    try {
        await connectionToDB();

        const cart = await Cart.findById(slug);
        return new Response({ status: 200 });

    } catch (error) {
        console.log(error)
        return new Response({ status: 500 });
    }
}