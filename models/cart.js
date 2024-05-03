import { Schema,models,model } from "mongoose";

const CartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true // Asegura que el ID del usuario sea requerido al crear el carrito
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

const Cart = models.Cart || model('Cart', CartSchema);

export default Cart;