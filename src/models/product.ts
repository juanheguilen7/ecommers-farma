import { Schema, model, models } from 'mongoose';

interface PropsProductSchema {
    title: string;
    price: number;
    stock: number;
    description: string;
    image: string;
    offer: number;
    category: string;
    favoriteBy: Schema.Types.ObjectId;
}
const ProductSchema = new Schema<PropsProductSchema>({
    title: {
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
    },
    favoriteBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Product = models.Product || model<PropsProductSchema>('Product', ProductSchema);

export default Product;