import express from 'express';
import { getAddProduct, getProducts, postAddProduct } from '../controllers/admin.js';
// import path from 'path';
// import rootDir from '../util/path.js';

const router = express.Router();

router.get('/add-product', getAddProduct);
router.get('/products', getProducts);

router.post('/add-product', postAddProduct);

export default { routes: router };
