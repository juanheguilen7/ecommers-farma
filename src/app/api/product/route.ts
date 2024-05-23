import { connectionToDB } from '@/utils/database';
import Product from '@/models/product';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
    await connectionToDB();
    try {
        const arrProduct = await Product.find();
        return new Response(JSON.stringify({ arrProduct }), { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response('', { status: 500 });
    }
}