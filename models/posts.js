import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  postId: {
    type: Number,
    required: true,
    unique: true,
  },
  postTitle: {
    type: String,
    required: true,
  },
  description: String,
  product: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0.0000,
    max: 99999999.9999,
  },
  stock: {
    type: Number,
    required: true,
    min: 1,
  },
  user: {
    type: String,
    required: true,
  },
  postDate: {
    type: Date,
    default: Date.now,
  },
  categories: {
    type: Array, 
    default: [],
  },
  comments: {
    type: Array,
    default: []
  }
})
export const Post = mongoose.model('Post', postSchema);