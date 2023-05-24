import { Router } from 'express';
import passport from 'passport';
import { GoogleController } from '@/controllers/GoogleController';

const router = Router();
const googleController = new GoogleController();

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
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
