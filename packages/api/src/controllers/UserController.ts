import { AppError } from '@/errors/AppError';
import User from '@/models/User';
import { Request, Response } from 'express';

export class UserController {
  async me(request: Request, response: Response) {
    const { userId } = request;

    try {
      const user = await User.findById(userId);
      return response.json(user);
    } catch {
      throw new AppError('User not found');
    }
  }
}
