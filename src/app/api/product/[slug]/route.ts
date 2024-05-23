import { connectionToDB } from '@/utils/database';
import Product from '@/models/product';
import { NextRequest, NextResponse } from 'next/server';

interface Params {
    slug: string;
}

//modificar producto
export const PATCH = async () => {

    try {
        await connectionToDB();
    } catch (error) {
        console.log(error);
    }
};

export async function GET(request: NextRequest, { params }: { params: Params }) {
    try {
        const { slug } = params;

        await connectionToDB();
        const products = await Product.find();

        switch (slug) {
            case 'offer':
                const arrProduct = products.filter((product) => {
                    if (product.offer !== 0) {
                        return product
                    }
                })
                return new Response(JSON.stringify({ arrProduct }), { status: 200 });
            case 'all':
                return new Response(JSON.stringify({ products }), { status: 200 });
        }

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ status: 500 }));
    }
}

//eliminar producto
export const DELETE = async (req: NextRequest, res: NextResponse) => {

    try {
        await connectionToDB();

        return new Response('El producto fue eliminado de forma exitosa', { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response('', { status: 500 })

    }
};
