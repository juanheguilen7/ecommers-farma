import { Schema, model, models } from 'mongoose';

interface PropsProductSchema {
    name: string;
    price: number;
    stock: number;
    description: string;
    image: string;
    offer: number;
    category: string;
}
const ProductSchema = new Schema<PropsProductSchema>({
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
    offer: {
        type: Number
    },
    category: {
        type: String,
        required: [true, 'Category required']
    }
})

const Product = models.Product || model<PropsProductSchema>('Product', ProductSchema);

export default Product;