import { Router } from 'express'
import * as P from '../controllers/posts.js'

const postRouter = Router();

// Ruta Alternativas
postRouter.get      ( '/:field/:postId', P.getFilteredPosts ); // Props tipo String
postRouter.get      ( '/filter', P.getFilteredPosts ); // Props tipo Number
// Rutas principales
postRouter.post     ( '/',      P.createPost ); // CREATE
postRouter.get      ( '/:postId?',  P.getPosts   ); // READ
postRouter.put      ( '/:postId?',  P.updatePost ); // UPDATE
postRouter.delete   ('/:postId?',   P.deletePost ); // DELETE

export default postRouter;