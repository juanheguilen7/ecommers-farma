import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        kMaxLength: 40
    },
    image: {
        type: String
    },
    offer:{
        type:Number
    }
})

const Product = models.Product || model('Product', ProductSchema);

export default Product;