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
    description: {
        type: String,
        kMaxLength: 40
    }
})

const Product = models.Product || model('Product', ProductSchema);

export default Product;