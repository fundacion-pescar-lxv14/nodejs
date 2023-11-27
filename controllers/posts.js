import { Post } from '../models/posts.js'
const config = {
    Appname: process.env.APP_NAME ?? "Aplicacion",
    description: process.env.APP_DESCRIPTION ?? "Aplicacion desarrollada con NodeJS",
    author: process.env.APP_AUTHOR ?? "muchos desarrolladores",
}
const resolve = (data) => JSON.parse(JSON.stringify(data))

export const createPost = async(req, res) => {
    const newPost = new Post(req.body);
    newPost.save()
    .then(data => res.json(newPost))
    .catch(err => res.json(err.message))
}
export const getPosts = (req, res) => {
    const {postId} = req.params;
    const query = ( 
        postId && req.body.length > 0 ? {postId, ...req.body} :
        req.body.length > 0 ? {...req.body} :
        postId ? {postId} : {}
    )
    Post.find(query)
    .then(posts => posts.length > 0 ? 
        res.render('index', {...config, posts: resolve(posts)}) : 
        res.json({message: "No se encontraron resultados"}))
    .catch(err => res.json(err.message))
}
export const getFilteredPosts = (req, res) => {
    const {key, val} = req.params;
    (key && val) && Post.find({[key]: val})
    .then(posts => res.render('index', posts))
    .then(err => res.json(err.message))
}
export const updatePost = (req, res) => {
    const {postId} = req.params;
    Post.updateOne({postId},{$set: req.body})
    .then(data => res.json(data))
    .catch(err => res.json(err.message))
}
export const deletePost = (req, res) => {
    const {postId} = req.params;
    Post.deleteOne({postId})
    .then(data => res.json(data))
    .catch(err => res.json(err.message))
}