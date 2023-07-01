import { Router } from 'express';
import passport from 'passport';
import { GoogleController } from '@/controllers/GoogleController';

const router = Router();
const googleController = new GoogleController();

/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *     summary: Callback endpoint for Google authentication
 *     tags: [Authentication]
 *     parameters:
 *       - in: query
 *         name: code
 *         schema:
 *           type: string
 *         required: true
 *         description: Authorization code received from Google
 *       - in: query
 *         name: state
 *         schema:
 *           type: string
 *         required: true
 *         description: State parameter received from the initial authentication request
 *     responses:
 *       200:
 *         description: Authentication successful, returns the user profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserProfile'
 *       400:
 *         description: Bad request, missing authorization code or state parameter
 *       401:
 *         description: Unauthorized, authentication failed
 *
 * /auth/google:
 *   get:
 *     summary: Initiate Google authentication
 *     tags: [Authentication]
 *     responses:
 *       302:
 *         description: Redirects to the Google authentication page
 *         headers:
 *           Location:
 *             schema:
 *               type: string
 *               description: URL of the Google authentication page
 *
 */

router.get('/auth/google/callback', googleController.callback);
router.get(
  '/auth/google/verify',
  passport.authenticate('google', {
    failureRedirect: '/',
    session: false
  }),
  googleController.auth
);
router.get('/auth/google/url', googleController.getUrl);
router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

export { router as googleRoutes };
