import { connectionToDB } from '@/utils/database';
import Cart from '@/models/cart.js';
import { NextRequest } from 'next/server';
interface Params {
    slug: string;
}

export async function GET(request: NextRequest, { params }: { params: Params }) {
    const { slug } = params;
    try {
        await connectionToDB();

        const cart = await Cart.findById(slug);
        return new Response('', { status: 200 });

    } catch (error) {
        console.log(error)
        return new Response('', { status: 500 });
    }
}