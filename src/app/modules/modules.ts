import { Router } from 'express';
import { catcher } from '@middlewares/catcher';
// imports
import auth from '@modules/auth/auth.router';
import users from '@modules/users/users.router';

const router = Router();

// routers
router.use('/auth', auth);
router.use('/users', users);
router.use(catcher);
export default router;
