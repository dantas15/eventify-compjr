import { Router } from 'express';
import { ensureAuthenticated } from '@/middlewares/ensureAuthenticated';
import { UserController } from '@/controllers/UserController';

const router = Router(); // /users
const userController = new UserController();

/**
 * @swagger
 * /me:
 *   get:
 *     summary: Get the authenticated user's profile
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Returns the profile of the authenticated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserProfile'
 *       401:
 *         description: Unauthorized, authentication failed
 *
 * /me/events:
 *   get:
 *     summary: Get the events associated with the authenticated user
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Returns an array of events associated with the authenticated user (or empty array)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 *       401:
 *         description: Unauthorized, authentication failed
 */

router.get('/me', ensureAuthenticated, userController.me);
router.get('/me/events', ensureAuthenticated, userController.myEvents);

router.get('/me', ensureAuthenticated, userController.me);
router.get('/me/events', ensureAuthenticated, userController.myEvents);

export { router as userRoutes };
