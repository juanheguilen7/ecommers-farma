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
