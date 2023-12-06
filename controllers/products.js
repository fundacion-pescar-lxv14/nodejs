import Product from '../models/products.js';

export const getProducts = (req, res) => {
    Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json(err))
}
export const getProductById = (req, res) => {
    Product.find({postId: req.params.id})
    .then((products) => res.json(products))
    .then((err) => res.status(400).json(err))
}
