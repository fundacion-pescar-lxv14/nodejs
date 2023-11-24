import { Post } from '../models/posts.js'

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
    .then(data => res.json(data))
    .catch(err => res.json(err.message))
}
export const getFilteredPosts = (req, res) => {
    
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