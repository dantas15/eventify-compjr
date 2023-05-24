import { Request, Response } from 'express';

import { AppError } from '@/errors/AppError';
import { User } from '@/models/User';
import { Event } from '@/models/Event';

export class UserController {
  async me(request: Request, response: Response) {
    const { userData } = request;
    const user = await User.findById(userData.userId);
    return response.json(user);
  }

  async myEvents(request: Request, response: Response) {
    const { userData } = request;

    const events = await Event.find({
      userId: userData.userId
    });
    return response.json(events);
  }
}
