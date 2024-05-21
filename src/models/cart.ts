import { Schema, models, model } from "mongoose";

interface PropsCartSchema{
    user:Schema.Types.ObjectId;
    products:Schema.Types.ObjectId[];
}

const CartSchema = new Schema<PropsCartSchema>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true // Asegura que el ID del usuario sea requerido al crear el carrito
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

const Cart = models.Cart || model<PropsCartSchema>('Cart', CartSchema);

export default Cart;