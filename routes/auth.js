import { Router } from "express"
import * as Auth from "../controllers/auth.js"
const authRouter = Router();

authRouter.get  ( '/',       Auth.Home     ); // VISTA HOME
authRouter.get  ( '/login',  Auth.LogIn    ); // VISTA ACCESO
authRouter.post ( '/login',  Auth.Validate ); // VALIDAR ACCESO
authRouter.get  ( '/signin', Auth.SignIn   ); // VISTA REGISTRO
authRouter.post ( '/signin', Auth.Register ); // REGISTRAR USUARIO

export default authRouter;