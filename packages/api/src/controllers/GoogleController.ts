import { Request, Response } from 'express';
import passport from 'passport';

export class GoogleController {
  async getUrl(request: Request, response: Response) {
    const googleAuthUrl = passport.authenticate('google', {
      scope: ['profile', 'email']
    });

    response.json({ url: googleAuthUrl });
  }
  async auth(request: Request, response: Response) {}
}
