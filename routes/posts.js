import { Router } from 'express'
import * as P from '../controllers/posts.js'

const postRouter = Router();

// Rutas principales
postRouter.post     ('/',          P.createPost ); // CREATE
postRouter.get      ('/:postId?/:val?',  P.getPosts   ); // READ
postRouter.put      ('/:postId?',  P.updatePost ); // UPDATE
postRouter.delete   ('/:postId?',  P.deletePost ); // DELETE

export default postRouter;