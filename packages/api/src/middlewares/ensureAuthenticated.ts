import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { secret } from '@/config/jwt';
import { AppError } from '@/errors/AppError';

type UserDataPayload = {
  googleId: string;
  userId: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receive token
  const authToken = request.headers.authorization;

  if (!authToken) {
    throw new AppError('Token is missing', 401);
  }

  // authToken: Bearer tokenWeNeed
  const [, token] = authToken.split(' ');

  try {
    // Validate token and pass to userData
    request.userData = verify(token, secret) as UserDataPayload;
    return next();
  } catch (err) {
    throw new AppError('Invalid token', 401);
  }
}
