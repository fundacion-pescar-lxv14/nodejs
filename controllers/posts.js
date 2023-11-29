import { Post } from '../models/posts.js'
import { config, notFound, resolve, getQuery } from '../utils/helpers.js'

export const createPost = async(req, res) => {
    const newPost = new Post(req.body);
    newPost.save()
    .then(data => res.json(newPost))
    .catch(err => res.json(err))
}
export const getPosts = (req, res) => {
    const query = getQuery(req);
    Post.find(query)
    .then(posts => 
        posts.length > 1 ? 
        res.render('layouts/posts', {...config, posts: resolve(posts)}) : 
        posts.length > 0 ?
        res.render('layouts/post', {...config, posts: resolve(posts[0])}) :
        res.render('layouts/404', {...config, err: notFound}))
    .catch(err => res.render('layouts/404', err))
}
export const updatePost = (req, res) => {
    const {postId} = req.params;
    Post.updateOne({postId},{$set: req.body})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
export const deletePost = (req, res) => {
    const {postId} = req.params;
    Post.deleteOne({postId})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}