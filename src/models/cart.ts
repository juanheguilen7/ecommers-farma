import { Schema, models, model } from "mongoose";

interface PropsCartSchema {
    user: Schema.Types.ObjectId;
    products: Product[];
    total: number;
    order: string;
}

type Product = {
    id: Schema.Types.ObjectId;
    quantity: number;
    price: number;
}

const CartSchema = new Schema<PropsCartSchema>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true // Asegura que el ID del usuario sea requerido al crear el carrito
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }],
    total: {
        type: Number,
    },
    order: {
        type: String,
    }
});

const Cart = models.Cart || model<PropsCartSchema>('Cart', CartSchema);

export default Cart;