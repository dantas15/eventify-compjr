import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { secret } from '@/config/jwt';
import { AppError } from '@/errors/AppError';

type Payload = {
  sub: string;
};

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
    // Validate token
    const { sub } = verify(token, secret) as Payload;

    // Get user information
    request.userId = sub;
    return next();
  } catch (err) {
    throw new AppError('Invalid token', 401);
  }
}
