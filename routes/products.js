import * as prod from '../controllers/products.js';
import {Router} from 'express';

const productsRouter = Router();

productsRouter.get    ("/", prod.getProducts       );
productsRouter.get    ("/:id", prod.getProductById );
productsRouter.post   ("/", prod.createProduct     );
productsRouter.put    ("/:id", prod.updateProduct  );
productsRouter.delete ("/:id", prod.deleteProduct  );

export default productsRouter;