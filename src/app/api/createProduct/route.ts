import { connectionToDB } from '@/utils/database';
import Product from '@/models/product';
import { v2 as cloudinary } from 'cloudinary';
import { NextRequest, NextResponse } from 'next/server';

//crea producto
export const POST = async (req: NextRequest, res: NextResponse) => {
    //Tomo los datos de la peticion
    const formData = await req.formData();

    // Config Claudinary
    cloudinary.config({
        cloud_name: `${process.env.CLOUD_NAME}`,
        api_key: `${process.env.CLOUD_API_KEY}`,
        api_secret: `${process.env.CLOUD_API_SECRERT}`
    });
    //convierto el formData en string
    const dataObject: any = {};

    formData.forEach((value: any, key: any) => {
        dataObject[key] = value;
    })

    //convierto el archivo en buffer con funciones de node.js
    const bytes = await dataObject.image.arrayBuffer();
    const buffer = Buffer.from(bytes);


    // Subo la imagen a Cloudinary y recolecto su respuesta, para guardar la url de la imagen
    const response: any = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({}, (error, result) => {
            if (error) {
                reject(error)
            }
            resolve(result)
        }).end(buffer)
    });

    const product = {
        ...dataObject,
        image: response?.secure_url,
    }

    try {
        await connectionToDB()

        const newProduct = new Product(product);
        await newProduct.save();

        return new Response(JSON.stringify(newProduct), { status: 200 });

    } catch (error) {
        console.log(error)
        return new Response('', { status: 500 });
    }
};
