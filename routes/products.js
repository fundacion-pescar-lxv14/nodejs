import * as prod from '../controllers/products.js';
import {Router} from 'express';

const productsRouter = Router();

productsRouter.get("/", prod.getProducts);
productsRouter.get("/:id", prod.getProductById);

export default productsRouter;