import { Router } from 'express';
import controller from './auth.controller';
import { signin, signup } from './auth.validator';
import authenticated from './strategy/authenticated';

const router = Router();

router.post('/signin', signin, controller.signin);
router.post('/signup', signup, controller.signup);
router.get('/', authenticated, controller.user);
export default router;
