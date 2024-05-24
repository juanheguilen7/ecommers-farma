import { connectionToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";
import Bookmark from "@/models/bookmark";

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { idProd, idBookmark, status } = await req.json();

    try {
        // Conectarse a la base de datos
        await connectionToDB();

        // Encontrar el bookmark asociado por su ID
        const bookmark = await Bookmark.findById(idBookmark);

        if (!bookmark) {
            return new Response('Bookmark no encontrado', { status: 400 });
        }

        // Verificar el estado y agregar o quitar el producto de la lista de favoritos
        if (status) {
            // Agregar el producto si no está ya en la lista
            if (!bookmark.products.includes(idProd)) {
                bookmark.products.push(idProd);
            }
        } else {
            // Eliminar el producto de la lista de favoritos
            bookmark.products.pull(idProd);
        }

        // Guardar los cambios en la base de datos
        await bookmark.save();

        // Respuesta exitosa
        return new Response('El producto fue actualizado correctamente en el bookmark', { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Ocurrió un error al procesar la solicitud', { status: 500 });
    }
};
