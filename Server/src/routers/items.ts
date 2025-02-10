import { Router } from 'express';
import { getProducts, getProductInfo } from '../controllers/items';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductInfo);

export default router;
