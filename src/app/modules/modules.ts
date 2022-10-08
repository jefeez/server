import { Router } from 'express';
import { catcher } from '@middlewares/catcher';
// imports
import users from '@modules/users/users.router';

const router = Router();

// routers
router.use('/users', users);
router.use(catcher);
export default router;
