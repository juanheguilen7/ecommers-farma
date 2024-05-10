import { connectionToDB } from '../../../utils/database.js';
import Product from '../../../models/product.js';

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

//llamar productoss
export const GET = async (req, res) => {
    try {
        await connectionToDB()
        const arrProduct = await Product.find();

        return new Response(JSON.stringify(arrProduct), { status: 200 })
    } catch (error) {
        console.log(error)

        return new Response({ status: 500 });
    }
};

//llamar producto por ID
export const GETBYID = async (id) => {

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
    const { productId } = await req.json();

    try {
        await connectionToDB();
        const deletProduct = await Product.findByIdAndDelete(productId);

        return new Response('El producto fue eliminado de forma exitosa', { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response({ status: 500 })

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