import { Router } from 'express';
import multer from 'multer';
import controller from './users.controller';
import { params, store, update } from './users.validator';

const router = Router();

router.get('/', controller.index);
router.post('/', multer().single('avatar'), store, controller.store);
router.get('/:id', params, controller.show);
router.patch('/:id', params, update, controller.update);
router.delete('/:id', params, controller.destroy);

export default router;
