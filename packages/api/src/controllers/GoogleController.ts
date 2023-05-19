import { AppError } from '@/errors/AppError';
import { Request, Response } from 'express';
import { Profile } from 'passport-google-oauth20';

type PassportUserPayload = {
  profile: Profile;
  token: string;
};

export class GoogleController {
  async getUrl(request: Request, response: Response) {
    response.json({ url: '/auth/google' });
  }

  async auth(request: Request, response: Response) {
    const googlePayload = (request.user as PassportUserPayload) || undefined;

    if (!googlePayload) {
      throw new AppError('User not authenticated', 401);
    }

    return response.json({ token: googlePayload.token });
  }
}
