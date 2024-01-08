import Product from '../models/products.js';

export const getProducts = (_req, res) => {
    Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json(err))
}
export const getProductById = ({params:{id:_id}}, res) => {
    Product.find({_id})
    .then((products) => res.json(products))
    .then((err) => res.status(400).json(err))
}
export const createProduct = ({body}, res) => {
    const newProduct = new Product(body);
    newProduct.save()
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err))
}

export const updateProduct = ({params:{id:_id}, body}, res) => {
    Product.updateOne({_id},{$set: body})
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err))
}

export const deleteProduct = ({params:{id}, body}, res) => {
    Product.deleteOne({$or: [id, body]})
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err))
}