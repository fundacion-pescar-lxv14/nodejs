import { Router } from "express"
import * as User from "../controllers/users.js"
const userRouter = Router();

userRouter.post    ( '/',           User.createUser ); // CREATE
userRouter.get     ( '/:username?', User.getUsers   ); // READ
userRouter.put     ( '/:username?', User.updateUser ); // UPDATE
userRouter.delete  ( '/:username?', User.deleteUser ); // DELETE

export default userRouter;