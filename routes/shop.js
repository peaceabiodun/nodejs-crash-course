import express from 'express';
// import path from 'path';
// import rootDir from '../util/path.js';

import {
  getCart,
  getCheckout,
  getIndex,
  getProducts,
  getOrders,
} from '../controllers/shop.js';

const router = express.Router();

router.get('/', getIndex);
router.get('/products', getProducts);
router.get('/cart', getCart);
router.get('/orders', getOrders);
router.get('/checkout', getCheckout);

export default router;
