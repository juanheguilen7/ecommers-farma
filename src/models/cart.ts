import { Schema, models, model } from "mongoose";

interface PropsCartSchema {
    user: Schema.Types.ObjectId;
    products: Product[];
    totalOrder: number;
    order: string;
}

type Product = {
    id: Schema.Types.ObjectId;
    quantity: number;
    price: number;
}

// Definir el esquema del carrito
const CartSchema = new Schema<PropsCartSchema>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true // Asegura que el ID del usuario sea requerido al crear el carrito
    },
    products: [{
        id: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true // Asegura que el ID del producto sea requerido
        },
        quantity: {
            type: Number,
            required: true // Asegura que la cantidad sea requerida
        },
        price: {
            type: Number,
            required: true // Asegura que el precio sea requerido
        }
    }],
    totalOrder: {
        type: Number,
        required: true // Asegura que el total del pedido sea requerido
    },
    order: {
        type: String,
        unique: true, // Asegura que el número de orden sea único
        required: true // Asegura que el número de orden sea requerido
    }
});

const Cart = models.Cart || model<PropsCartSchema>('Cart', CartSchema);

export default Cart;