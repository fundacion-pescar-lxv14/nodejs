import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0.01,
        required: true
    },
    description: String,
    image: String,
    category: Array,
    stock: {
        type: Number,
        min: 0,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    postedAt: {
        type: Date,
        default: Date.now
    },
    delivery: {
        type: Boolean,
        default: true,
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;