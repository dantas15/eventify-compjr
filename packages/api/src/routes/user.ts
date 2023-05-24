import { Router } from 'express';
import { ensureAuthenticated } from '@/middlewares/ensureAuthenticated';
import { UserController } from '@/controllers/UserController';

const router = Router(); // /users
const userController = new UserController();

router.get('/me', ensureAuthenticated, userController.me);
router.get('/me/events', ensureAuthenticated, userController.myEvents);

export { router as userRoutes };
