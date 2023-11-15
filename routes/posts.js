import { Router } from 'express'
import * as P from '../controllers/posts.js'

const postRouter = Router();

postRouter.post     ( '/',      P.createPost ); // CREATE
postRouter.get      ( '/:id?',  P.getPosts   ); // READ
postRouter.put      ( '/:id?',  P.updatePost ); // UPDATE
postRouter.delete   ('/:id?',   P.deletePost ); // DELETE

export default postRouter;