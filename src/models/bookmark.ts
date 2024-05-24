import { Schema, models, model } from "mongoose";

interface BookmarkProps {
    user: Schema.Types.ObjectId;
    products: Schema.Types.ObjectId[];
    quantity: number;
}

const BookmarkSchema = new Schema<BookmarkProps>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true // Asegura que el ID del usuario sea requerido al crear el carrito
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }]
});

const Bookmark = models.Bookmark || model<BookmarkProps>('Bookmark', BookmarkSchema);

export default Bookmark;