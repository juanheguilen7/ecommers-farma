import { connectionToDB } from '@/utils/database.js';
import Product from '@/models/product.js';

//crea producto
export const POST = async (req, res) => {
    const { product } = await req.json();
    try {
        await connectionToDB()
        const newProduct = new Product(product);
        await newProduct.save();

        return new Response(JSON.stringify(newProduct), { status: 200 });
    } catch (error) {
        console.log(error)
        return new Response({ status: 500 });
    }
};


//modificar producto
export const PATCH = async () => {

    try {
        await connectionToDB();
    } catch (error) {
        console.log(error);
    }
};

export async function GET(request, { params }) {
    try {
        const { slug } = params;

        await connectionToDB();
        const arrProduct = await Product.find();

        switch (slug) {
            case 'offer':
                const arrProductFilter = arrProduct.filter((product) => {
                    if (product.offer !== 0) {
                        return product
                    }
                })
                return new Response(JSON.stringify({ arrProductFilter }), { status: 200 });
            case 'all':
                return new Response(JSON.stringify({ arrProduct }), { status: 200 });
        }

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ status: 500 }));
    }
}


/* 
//llamar producto por ID
export const GET = async (req, res) => {
    console.log(params)
    try {
        await connectionToDB();
        const productById = await Product.findById(id);
        console.log(productById);
        return res.status(200).json(productById);
    } catch (error) {
        console.log(error);
        return new Response({ status: 500 })
    }
};

//eliminar producto
export const DELETE = async (req, res) => {

    try {
        await connectionToDB();
        const deletProduct = await Product.findByIdAndDelete(productId);

        return new Response('El producto fue eliminado de forma exitosa', { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response({ status: 500 })

    }
};
 */