import { connectionToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";
import Bookmark from "@/models/bookmark";


export const POST = async (req: NextRequest, res: NextResponse) => {
    const { idProd, idBookmark, status } = await req.json();

    console.log(idProd, idBookmark, status)
    try {
        // Conectarse a la base de datos
        await connectionToDB();

        // Encontrar el carrito asociado por su ID
        const bookmark = await Bookmark.findById(idBookmark);

        if (!bookmark) {
            return new Response('Cart not founded', { status: 400 });
        }

        switch (status) {
            case true:
                // Agregar el ID del producto al array de productos del carrito
                bookmark.products.push(idProd);
                break;

            case false:
                // Eliminar el ID del producto del array de productos del carrito
                bookmark.products.pull(idProd);
                break;
        }
        // Guardar los cambios en la base de datos
        await bookmark.save();

        // Respuesta exitosa
        return new Response('El producto fue agregado al carrito correctamente', { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Ocurrió un error al procesar la solicitud', { status: 500 });
    }
};
